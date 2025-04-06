"use server";

import axios from "axios";

// eslint-disable-next-line
export async function authBankUser(body: any) {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/payment-user`,
      body
    );

    return response.data;
  } catch {
    throw new Error("Erro");
  }
}
