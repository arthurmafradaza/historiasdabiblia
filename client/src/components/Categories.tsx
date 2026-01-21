import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type CategoryItem = {
  title: string;
  desc: string;
  color: string;
  border: string;
  img: string;
};

const categories: CategoryItem[] = [
  {
    title: "Antigo Testamento",
    desc: "Histórias clássicas como Noé, Moisés e a Criação.",
    color: "bg-brand-yellow-light",
    border: "border-t-[#F57F17]",
    img: "https://i.postimg.cc/m2m7k2qT/Whats_App_Image_2026_01_21_at_11_12_44.jpg"
  },
  {
    title: "Novo Testamento",
    desc: "A vida de Jesus, seus milagres e parábolas.",
    color: "bg-brand-blue-light",
    border: "border-t-[#1565C0]",
    img: "https://i.postimg.cc/dt5G3tXq/Whats_App_Image_2026_01_21_at_11_15_36.jpg"
  },
  {
    title: "Valores e Virtudes",
    desc: "Ensinamentos sobre amor, bondade e respeito.",
    color: "bg-brand-green-light",
    border: "border-t-[#2E7D32]",
    img: "https://i.postimg.cc/fT8YyTFD/Whats_App_Image_2026_01_21_at_11_18_15.jpg"
  },
  {
    title: "Heróis da Fé",
    desc: "Exemplos de coragem como Davi e Daniel.",
    color: "bg-brand-purple-light",
    border: "border-t-[#6A1B9A]",
    img: "https://i.postimg.cc/3Jt2NJ6R/Whats_App_Image_2026_01_21_at_12_23_15.jpg"
  },
  {
    title: "Orações",
    desc: "Orações simples e ilustradas para o dia a dia.",
    color: "bg-brand-pink-light",
    border: "border-t-[#FF1493]",
    img: "https://i.postimg.cc/zXxTvXMh/Whats_App_Image_2026_01_21_at_12_31_44.jpg"
  }
];

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-[1200px] mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
            Um Tesouro de Ensinamentos em um Só Lugar
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            Mais de 150 histórias infantis para um desenvolvimento espiritual estruturado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
              className={`p-8 rounded-[15px] ${cat.color} ${cat.border} border-t-[5px] shadow-sm flex flex-col items-center text-center transition-all duration-300`}
            >
              <div className="mb-6 h-[150px] flex items-center justify-center">
                <img src={cat.img} alt={cat.title} className="h-full object-contain drop-shadow-md rounded-lg" />
              </div>

              <h3 className="font-heading font-bold text-2xl mb-3 text-black">
                {cat.title}
              </h3>

              <p className="font-sans text-gray-700 leading-relaxed">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-pink hover:bg-brand-pink/90 text-white font-bold text-lg md:text-xl px-10 py-7 md:px-16 md:py-8 rounded-full shadow-[0_4px_15px_rgba(255,20,147,0.4)] hover:shadow-[0_6px_20px_rgba(255,20,147,0.6)] transition-all h-auto"
            >
              QUERO ESSAS HISTÓRIAS!
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
