import axios from "axios";
// import { api } from "./baseURL";

// POST
export const loginUser = async (email:string, password:string) => {
  
    // Axios otomatis melempar error jika res.ok !== true
  const response = await axios.post("/api/auth/login", { email, password });
  return response.data;
};