"use server";

import axios from "axios";

export async function receiptUser(base64: string, email: string) {
  try {
    const response = await axios.post(`${process.env.API_URL}/receipt-user`, {
      base64,
      email,
    });

    return response.data;
  } catch {
    throw new Error("Erro");
  }
}
