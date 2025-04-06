"use server";

import axios from "axios";

export async function verifyPaymentUser() {
  try {
    const response = await axios.get(`${process.env.API_URL}/payment-value`);

    return response.data;
  } catch {
    throw new Error("Erro");
  }
}
