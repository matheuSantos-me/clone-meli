"use server";

import axios from "axios";

export async function paymentKeyUser() {
  try {
    const response = await axios.get(`${process.env.API_URL}/payment-key`);

    return response.data;
  } catch {
    throw new Error("Erro");
  }
}
