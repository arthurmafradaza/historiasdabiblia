import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const bonuses = [
  {
    title: "Plano de Leitura Bíblico Infantil",
    oldPrice: "R$ 19,90",
    desc: "Um plano simples e organizado para guiar a leitura das histórias bíblicas",
    img: "https://i.postimg.cc/2yyLBgVW/Chat_GPT_Image_Jan_21_2026_02_10_28_PM.png"
  },
  {
    title: "Lições de Jesus",
    oldPrice: "R$ 24,90",
    desc: "Um conjunto de histórias e ensinamentos de Jesus explicados de forma acessível para crianças",
    img: "https://i.postimg.cc/MHHfjgvy/Chat_GPT_Image_Jan_21_2026_02_12_49_PM.png"
  },
  {
    title: "Parábolas de Jesus",
    oldPrice: "R$ 25,20",
    desc: "As principais parábolas de Jesus adaptadas para o universo infantil",
    img: "https://i.postimg.cc/5yyQFD6X/Chat_GPT_Image_Jan_21_2026_02_12_54_PM.png"
  },
  {
    title: "Boas Maneiras conforme a Bíblia",
    oldPrice: "R$ 35,00",
    desc: "Histórias e exemplos bíblicos que ensinam respeito, obediência, gentileza e convivência",
    img: "https://i.postimg.cc/Y00LmThQ/Chat_GPT_Image_Jan_21_2026_02_12_58_PM.png"
  }
];


export default function Bonuses() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-[700px] mx-auto px-4 relative z-10">
        <div className="bg-[#f473b6] rounded-[40px] p-8 md:p-12 shadow-2xl">

          <div className="text-center mb-12 text-white">
            <Gift className="w-16 h-16 mx-auto mb-6 text-white drop-shadow-md" />
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
              🎁 SOMENTE HOJE NO PACOTE COMPLETO
            </h2>
            <p className="text-xl md:text-2xl opacity-90 font-sans">
              Bônus exclusivos para fortalecer a fé!
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[30px] p-6 shadow-xl"
              >
                <div className="flex flex-col items-center">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 flex items-center justify-center bg-gray-50">
                    <img
                      src={bonus.img}
                      alt={bonus.title}
                      className="max-h-full w-full object-cover"
                    />
                  </div>

                  <div className="w-full px-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-black">
                        {bonus.title}
                      </h3>
                      <div className="text-right flex flex-col items-end">
                        <span className="text-sm text-brand-red line-through font-bold leading-none mb-1 opacity-80">
                          {bonus.oldPrice}
                        </span>
                        <span className="inline-flex items-center justify-center bg-[#E8F5E9] text-[#2E7D32] text-sm font-extrabold px-4 py-1.5 rounded-lg uppercase tracking-wider border border-[#A5D6A7] shadow-[0_2px_10px_rgba(46,125,50,0.15)] ring-1 ring-[#2E7D32]/10">
                          Grátis
                        </span>
                      </div>
                    </div>

                    <p className="font-sans text-gray-600 text-base md:text-lg">
                      {bonus.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <div className="bg-[#fce4ec] border-2 border-[#e54a9c] p-6 md:p-8 rounded-2xl shadow-lg mx-auto max-w-[600px] text-center">
              <p className="font-heading font-bold text-[#b92b7a] text-lg md:text-xl leading-tight">
                Todos esses bônus dariam mais de <span className="text-[#881350]">R$ 100</span>, mas <span className="font-extrabold text-[#881350]">SOMENTE HOJE</span>, você leva de <span className="font-extrabold text-[#881350]">GRAÇA!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceCard({ title, price }: { title: string, price: string }) {
  return (
    <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-brand-pink/20">
      <p className="font-heading font-bold text-black text-sm md:text-base mb-1">{title}</p>
      <p className="font-bold text-brand-red line-through decoration-brand-red/60">{price}</p>
    </div>
  );
}
