import axios from "axios";


// GET
export const getSession = async () => {
  const res = await axios.get("/api/auth/session");
  return res.data;
};

import { SessionResponse } from "@/types/session";

export const getSessionService = async (): Promise<SessionResponse> => {
  const { data } = await axios.get<SessionResponse>(
    "/api/auth/session"
  );

  return data;
};