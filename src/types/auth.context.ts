export type AuthContext = {
  isLoggedIn: boolean;
  user: {
    name: string;
    email: string;
    username: string;
    role: string;
  } | null;
};
