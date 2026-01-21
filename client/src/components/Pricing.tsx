import { Button } from "@/components/ui/button";

const pricingItems = [
  { name: "150+ Histórias Bíblicas", price: "R$ 67,00" },
  { name: "Planner Infantil Cristão", price: "R$ 19,90" },
  { name: "Cartazes Bíblicos Coloridos", price: "R$ 24,90" },
  { name: "Atividades para Colorir", price: "R$ 25,00" },
  { name: "Guia Prático para Pais", price: "R$ 25,20" },
  { name: "Suporte Pedagógico", price: "R$ 35,00" },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-[#F9F9F9]">
      <div className="container max-w-[1100px] mx-auto px-4">
        
        <h2 className="text-center font-heading font-bold text-3xl md:text-4xl mb-12 text-black">
          Quanto custaria separado? 💰
        </h2>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {pricingItems.map((item, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-black">{item.name}</h3>
              <span className="block font-bold text-2xl text-[#F44336] line-through decoration-2">
                {item.price}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
