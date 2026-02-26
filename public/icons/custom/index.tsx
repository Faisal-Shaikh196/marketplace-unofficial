interface IconProps {
  size?: string;
  color?: string;
}

export const Lock = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "18"}
      height={size || "16"}
      className="lucide"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3.5V6H12.5C13.3284 6 14 6.67157 14 7.5V13.5C14 14.3284 13.3284 15 12.5 15H2.5C1.67157 15 1 14.3284 1 13.5V7.5C1 6.67157 1.67157 6 2.5 6H4V3.5C4 1.567 5.567 0 7.5 0C9.433 0 11 1.567 11 3.5ZM5 3.5C5 2.11929 6.11929 1 7.5 1C8.88071 1 10 2.11929 10 3.5V6H5V3.5Z"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};

export const ShoppingBag = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      viewBox="0 0 24 24"
      className="lucide"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_2621_6154)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2.4a4.8 4.8 0 0 0-4.8 4.8v1.2H6a1.2 1.2 0 0 0-1.193 1.067l-1.2 10.8A1.2 1.2 0 0 0 4.8 21.6h14.4a1.2 1.2 0 0 0 1.193-1.333l-1.2-10.8A1.2 1.2 0 0 0 18 8.4h-1.2V7.2A4.8 4.8 0 0 0 12 2.4m2.4 6V7.2a2.4 2.4 0 1 0-4.8 0v1.2zM7.2 12a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0m8.4-1.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4"
          fill={color || "var(--bg-grey-400)"}
          className="lucide-inner"
        />
      </g>
    </svg>
  );
};

export const Cube = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      className="lucide"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2 20.4a1.2 1.2 0 0 0 1.737 1.073l4.8-2.4A1.2 1.2 0 0 0 20.4 18v-6.917a1.2 1.2 0 0 0-1.737-1.073l-4.8 2.4a1.2 1.2 0 0 0-.663 1.073zm5.054-12.868a1.2 1.2 0 0 0 0-2.147l-5.717-2.858a1.2 1.2 0 0 0-1.074 0L5.747 5.385a1.2 1.2 0 0 0 0 2.147l5.716 2.858a1.2 1.2 0 0 0 1.074 0zM5.337 10.01A1.2 1.2 0 0 0 3.6 11.083V18c0 .454.257.87.663 1.073l4.8 2.4A1.2 1.2 0 0 0 10.8 20.4v-6.917a1.2 1.2 0 0 0-.663-1.073z"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};

export const Bulding = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      className="lucide"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.8 4.8a2.4 2.4 0 0 1 2.4-2.4h9.6a2.4 2.4 0 0 1 2.4 2.4v14.4a1.2 1.2 0 0 1 0 2.4h-3.8a1 1 0 0 1-1-1V18a1.2 1.2 0 0 0-1.2-1.2h-2.4A1.2 1.2 0 0 0 9.6 18v2.6a1 1 0 0 1-1 1H4.8a1.2 1.2 0 0 1 0-2.4zM8.4 6h2.4v2.4H8.4zm2.4 4.8H8.4v2.4h2.4zM13.2 6h2.4v2.4h-2.4zm2.4 4.8h-2.4v2.4h2.4z"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};

export const Plus = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      className="lucide"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 22v-5H2v-4h6.45l1.7 2.55q.125.2.35.325t.475.125a1 1 0 0 0 .6-.2q.275-.2.375-.5l1.35-4.05.85 1.3q.15.2.375.325T15 13h7v4h-5v5zm3.7-9.25-.875-1.3a.94.94 0 0 0-.35-.325A.96.96 0 0 0 9 11H2V7h5V2h10v5h5v4h-6.475l-1.7-2.55a.94.94 0 0 0-.35-.325.96.96 0 0 0-1.062.075q-.263.2-.363.5z"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};

export const AcademicCap = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      className="lucide"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.473 2.497a1.2 1.2 0 0 0-.946 0l-8.4 3.6a1.2 1.2 0 0 0 0 2.206L6.3 9.663c.116-.13.26-.237.427-.309l4.8-2.057a1.2 1.2 0 0 1 .946 2.206L9.2 10.905l2.327.998c.302.13.644.13.946 0l8.4-3.6a1.2 1.2 0 0 0 0-2.206zm-8.501 8.779 2.028.87v4.921a11 11 0 0 0-1.26-.208 1.2 1.2 0 0 1-1.068-1.068 13.3 13.3 0 0 1 .3-4.515m7.188 8.611a10.8 10.8 0 0 0-2.76-1.965v-4.748l2.182.935a3.6 3.6 0 0 0 2.836 0l6.61-2.833a13.2 13.2 0 0 1 .3 4.515 1.2 1.2 0 0 1-1.069 1.068 10.76 10.76 0 0 0-6.419 3.028 1.2 1.2 0 0 1-1.68 0M7.2 21.6a1.2 1.2 0 0 0 1.2-1.2v-2.478a10.7 10.7 0 0 0-2.4-.855V20.4a1.2 1.2 0 0 0 1.2 1.2"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};

export const Bulb = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      className="lucide"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2 3.6a1.2 1.2 0 0 0-2.4 0v1.2a1.2 1.2 0 0 0 2.4 0zm5.588 3.309a1.2 1.2 0 0 0-1.697-1.697l-.849.848a1.2 1.2 0 0 0 1.698 1.697zM21.6 12a1.2 1.2 0 0 1-1.2 1.2h-1.2a1.2 1.2 0 1 1 0-2.4h1.2a1.2 1.2 0 0 1 1.2 1.2M6.06 7.757A1.2 1.2 0 1 0 7.757 6.06l-.848-.848a1.2 1.2 0 0 0-1.697 1.697zM6 12a1.2 1.2 0 0 1-1.2 1.2H3.6a1.2 1.2 0 1 1 0-2.4h1.2A1.2 1.2 0 0 1 6 12m3.6 7.2V18h4.8v1.2a2.4 2.4 0 1 1-4.8 0m4.801-2.4c.018-.408.248-.776.571-1.03a4.8 4.8 0 1 0-5.944 0c.323.255.553.622.57 1.03z"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};

export const Desktop = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      className="lucide"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.6 6A2.4 2.4 0 0 1 6 3.6h12A2.4 2.4 0 0 1 20.4 6v9.6A2.4 2.4 0 0 1 18 18h-2.663l.147.587.965.964A1.2 1.2 0 0 1 15.6 21.6H8.4a1.2 1.2 0 0 1-.848-2.049l.965-.964.146-.587H6a2.4 2.4 0 0 1-2.4-2.4zm6.926 8.4H6V6h12v8.4z"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};

export const Bulk = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      className="lucide"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.547 14.764 3.795 9.46c-.323-.331-.323-.994 0-1.325l7.752-4.97c.16-.166.322-.166.484-.166s.322 0 .484.166l7.751 4.97a.815.815 0 0 1 0 1.16l-7.75 5.467c-.207.14-.743.143-.97 0m.26 7.153-8.495-5.8c-.323-.165-.425-.673-.162-1.043.402-.463.838-.303.934-.235l7.947 5.595 7.995-5.63c.227-.16.66-.109.887.27.127.213.147.64-.161.878l-8.46 5.965c-.163.11-.336.111-.485 0m0-3.418-8.495-5.8c-.323-.165-.425-.674-.162-1.043.402-.464.838-.303.934-.236l7.947 5.596 7.995-5.63c.227-.16.66-.11.887.27.127.213.147.64-.161.878l-8.46 5.965c-.163.11-.336.11-.485 0"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};

export const CurrencyRupee = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      className="lucide"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12.6A5.6 5.6 0 1 0 7 1.4a5.6 5.6 0 0 0 0 11.2M4.9 3.5a.7.7 0 1 0 0 1.4h.7a1.4 1.4 0 0 1 1.213.7H4.9a.7.7 0 1 0 0 1.4h1.913a1.4 1.4 0 0 1-1.213.7h-.7a.7.7 0 0 0-.495 1.195l2.1 2.1a.7.7 0 0 0 .99-.99L6.456 8.966A2.8 2.8 0 0 0 8.312 7H9.1a.7.7 0 1 0 0-1.4h-.788a2.8 2.8 0 0 0-.287-.7H9.1a.7.7 0 1 0 0-1.4z"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};

export const Bell = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      className="lucide"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 3.2a9.6 9.6 0 0 0-9.6 9.6v5.737L5.268 19.67A1.6 1.6 0 0 0 6.4 22.4h19.2a1.6 1.6 0 0 0 1.131-2.731L25.6 18.537V12.8A9.6 9.6 0 0 0 16 3.2m0 25.6a4.8 4.8 0 0 1-4.8-4.8h9.6a4.8 4.8 0 0 1-4.8 4.8"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};

export const Calculator = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      className="lucide"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.6 3.2a3.2 3.2 0 0 0-3.2 3.2v19.2a3.2 3.2 0 0 0 3.2 3.2h12.8a3.2 3.2 0 0 0 3.2-3.2V6.4a3.2 3.2 0 0 0-3.2-3.2zm1.6 3.2a1.6 1.6 0 1 0 0 3.2h9.6a1.6 1.6 0 1 0 0-3.2zm9.6 11.2a1.6 1.6 0 0 1 1.6 1.6V24a1.6 1.6 0 0 1-3.2 0v-4.8a1.6 1.6 0 0 1 1.6-1.6M16 22.4a1.6 1.6 0 1 0 0 3.2h.016a1.6 1.6 0 0 0 0-3.2zM9.6 24a1.6 1.6 0 0 1 1.6-1.6h.016a1.6 1.6 0 1 1 0 3.2H11.2A1.6 1.6 0 0 1 9.6 24m1.6-6.4a1.6 1.6 0 1 0 0 3.2h.016a1.6 1.6 0 0 0 0-3.2zm3.2 1.6a1.6 1.6 0 0 1 1.6-1.6h.016a1.6 1.6 0 1 1 0 3.2H16a1.6 1.6 0 0 1-1.6-1.6m6.4-6.4a1.6 1.6 0 1 0 0 3.2h.016a1.6 1.6 0 0 0 0-3.2zm-6.4 1.6a1.6 1.6 0 0 1 1.6-1.6h.016a1.6 1.6 0 1 1 0 3.2H16a1.6 1.6 0 0 1-1.6-1.6m-3.2-1.6a1.6 1.6 0 1 0 0 3.2h.016a1.6 1.6 0 0 0 0-3.2z"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};

export const Cart = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      className="lucide"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.8 1.6a1.6 1.6 0 1 0 0 3.2h1.95l.49 1.956q.007.034.017.067l2.171 8.686L8 16.937c-2.016 2.016-.588 5.463 2.263 5.463H24a1.6 1.6 0 1 0 0-3.2H10.263l1.6-1.6H22.4a1.6 1.6 0 0 0 1.431-.884l4.8-9.6a1.6 1.6 0 0 0-1.43-2.316H10.048l-.497-1.988A1.6 1.6 0 0 0 8 1.6zm20.8 24.8a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0m-15.2 2.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};

export const Profile = ({ size }: IconProps) => {
  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      viewBox="0 0 43 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 20C0 8.954 8.954 0 20 0h3c11.046 0 20 8.954 20 20s-8.954 20-20 20h-3C8.954 40 0 31.046 0 20"
        fill="#b0d1ef"
      />
      <g clipPath="url(#a)" shapeRendering="crispEdges">
        <g filter="url(#b)">
          <path
            d="M6.757 40.571c0-7.732 6.738-14 15.05-14s15.05 6.268 15.05 14z"
            fill="url(#c)"
          />
          <path
            d="M21.807 27.556c7.473 0 13.484 5.358 14.027 12.03H7.782c.542-6.672 6.553-12.03 14.025-12.03Z"
            stroke="url(#d)"
            strokeWidth="1.969"
          />
        </g>
        <g filter="url(#e)">
          <path
            d="M21.807 22.572c3.562 0 6.45-2.687 6.45-6s-2.888-6-6.45-6-6.45 2.686-6.45 6 2.888 6 6.45 6"
            fill="url(#f)"
          />
          <path
            d="M21.807 9.697c3.985 0 7.325 3.02 7.325 6.875s-3.34 6.874-7.325 6.875c-3.985 0-7.325-3.02-7.325-6.875s3.34-6.875 7.325-6.875Z"
            stroke="url(#g)"
            strokeWidth="1.75"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="c"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 7 -15.05 0 21.807 33.571)"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" />
        </radialGradient>
        <radialGradient
          id="d"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 7 -15.05 0 21.807 33.571)"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" />
        </radialGradient>
        <radialGradient
          id="f"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 6 -6.45 0 21.807 16.572)"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" />
        </radialGradient>
        <radialGradient
          id="g"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 6 -6.45 0 21.807 16.572)"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" />
        </radialGradient>
        <filter
          id="b"
          x="2.757"
          y="18.571"
          width="38.1"
          height="30"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2621_3690"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2621_3690"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-8" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_2621_3690" />
        </filter>
        <filter
          id="e"
          x="9.607"
          y=".822"
          width="24.4"
          height="31.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2621_3690"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2621_3690"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-8" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow_2621_3690" />
        </filter>
        <clipPath id="a">
          <rect width="43" height="40" rx="20" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Currency = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size || "10"}
      height={size || "10"}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.833 5.417q-.52 0-.885-.365a1.2 1.2 0 0 1-.365-.885q0-.521.365-.886.365-.364.885-.364.521 0 .886.364.364.365.364.886 0 .52-.364.885a1.2 1.2 0 0 1-.886.365m-2.916 1.25a.8.8 0 0 1-.589-.245.8.8 0 0 1-.245-.589V2.5q0-.344.245-.588a.8.8 0 0 1 .589-.245H8.75q.344 0 .588.245.245.244.245.588v3.333q0 .345-.245.589a.8.8 0 0 1-.588.245zm.833-.834h4.167q0-.344.244-.588A.8.8 0 0 1 8.75 5V3.333a.8.8 0 0 1-.589-.244.8.8 0 0 1-.244-.589H3.75q0 .344-.245.589a.8.8 0 0 1-.588.244V5q.343 0 .588.245t.245.588m4.583 2.5H1.25a.8.8 0 0 1-.59-.243.8.8 0 0 1-.243-.59V2.917h.833V7.5h7.083z"
        fill={color || "var(--bg-grey-400)"}
      />
    </svg>
  );
};
