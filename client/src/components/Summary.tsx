import { Check } from "lucide-react";

const summaryItems = [
  "Mais de 150 histórias infantis bíblicas organizadas por categorias",
  "Material pronto para desenvolvimento espiritual e educacional",
  "5 bônus exclusivos para complementar o aprendizado",
  "Conteúdo pronto para imprimir e aplicar",
  "Acesso imediato por e-mail",
  "Garantia de 30 dias – risco zero"
];

export default function Summary() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container max-w-[900px] mx-auto bg-[#E8F5E9]/30 border-2 border-[#A5D6A7]/30 rounded-[30px] p-8 md:p-12 shadow-sm">
        
        <h2 className="text-center font-heading font-extrabold text-2xl md:text-3xl text-[#2E7D32] mb-10">
          ✅ Resumo do que você recebe:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {summaryItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-[#2E7D32] flex-shrink-0 text-xl font-bold mt-[-2px]">✔</span>
              <span className="font-sans text-gray-700 text-lg leading-tight">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
