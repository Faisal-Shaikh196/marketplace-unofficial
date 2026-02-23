import axios, { type AxiosResponse } from "axios";

const API_BASE = "http://localhost:4000";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

let refreshInFlight: Promise<boolean> | null = null;

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match?.[2] ? decodeURIComponent(match[2]) : null;
}

function csrfHeaders(): Record<string, string> {
  const csrf = getCookie("csrf_token");
  return csrf ? { "x-csrf-token": csrf } : {};
}

function getErrorText(res: AxiosResponse): string {
  const d = res.data;
  return typeof d === "string" ? d : JSON.stringify(d ?? "");
}

async function doRefresh(): Promise<boolean> {
  if (refreshInFlight) return refreshInFlight;

  refreshInFlight = (async () => {
    const res = await axios.post(`${API_BASE}/auth/refresh`, null, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        ...csrfHeaders(),
      },
      validateStatus: () => true,
    });
    return res.status >= 200 && res.status < 300;
  })();

  try {
    return await refreshInFlight;
  } finally {
    refreshInFlight = null;
  }
}

export async function apiFetch<T>(
  path: string,
  options: {
    method?: HttpMethod;
    body?: unknown;
    headers?: Record<string, string>;
  } = {}
): Promise<T> {
  const method = options.method ?? "GET";

  const makeRequest = () =>
    axios.request({
      url: `${API_BASE}${path}`,
      method,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        ...csrfHeaders(),
        ...(options.headers ?? {}),
      },
      data: method === "GET" ? undefined : options.body,
      validateStatus: () => true,
    });

  const res = await makeRequest();

  if (res.status !== 401) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error(`API error ${res.status}: ${getErrorText(res)}`);
    }
    return res.data as T;
  }

  const refreshed = await doRefresh();
  if (!refreshed) {
    window.location.href = "/login?reason=session_expired";
    throw new Error("Unauthorized: refresh failed");
  }

  const retry = await makeRequest();

  if (retry.status < 200 || retry.status >= 300) {
    throw new Error(
      `API error after refresh ${retry.status}: ${getErrorText(retry)}`
    );
  }

  return retry.data as T;
}
