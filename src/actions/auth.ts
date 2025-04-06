"use server";

import axios from "axios";

export async function loginUser(email: string, password: string) {
  try {
    const response = await axios.post(`${process.env.API_URL}/login-user`, {
      email,
      password,
    });

    return response.data;
  } catch {
    throw new Error("Erro ao fazer login");
  }
}
