export type UseSessionRedirectProps = {
  redirectTo: string;
  when?: "authenticated" | "unauthenticated";
};

export type SessionUser = {
  id: string;
  email: string | null;
  role?: string;
};

export type SessionResponse = {
  session: SessionUser | null;
};
