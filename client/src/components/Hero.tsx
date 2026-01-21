import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import bookMockup from "@assets/generated_images/3d_children's_bible_story_book_mockup.png";
import heroMockupImg from "@/assets/webp_images/hero_mockup.webp";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-[100px] pb-16 md:pt-[140px] md:pb-24 bg-gradient-to-b from-white to-brand-pink-light/30">
      <div className="container max-w-[1200px] mx-auto px-4 text-center">

        {/* Title Group */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading font-extrabold text-[29px] md:text-[47px] lg:text-[55px] leading-[1.2] text-black mb-4 uppercase"
        >
          <span className="text-brand-pink text-[39px] md:text-[59px] lg:text-[63px]">+ 150 HISTÓRIAS </span><br className="hidden md:block" />
          DA BÍBLIA PARA ENSINAR VALORES CRISTÃOS <span className="text-brand-pink text-[39px] md:text-[59px] lg:text-[63px]">DESDE CEDO!</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 font-sans mb-8 md:mb-12 max-w-3xl mx-auto"
        >
          Material pronto para imprimir<br />
          Ideal para famílias, escolas, catequese e projetos educativos 📖
        </motion.p>

        {/* Mockup Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative mx-auto max-w-[80%] md:max-w-[600px] mb-12"
        >
          <div className="absolute inset-0 bg-brand-pink/20 blur-[60px] rounded-full z-0 transform translate-y-10" />
          <img
            src={heroMockupImg}
            alt="150 Histórias da Bíblia Book Mockup"
            loading="eager"
            fetchPriority="high"
            className="relative z-10 w-full drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl"
          />
        </motion.div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
          <Badge color="green" text="Indicado por pedagogos e líderes religiosos" />
          <Badge color="blue" text="Idades 3 a 10 anos" />
          <Badge color="yellow" text="Prontos para imprimir" />
          <Badge color="purple" text="Compatível com BNCC" />
        </div>

        {/* Main CTA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-pink hover:bg-brand-pink/90 text-white font-bold text-base md:text-xl px-6 py-6 md:px-12 md:py-8 rounded-full shadow-[0_4px_15px_rgba(255,20,147,0.4)] hover:shadow-[0_6px_20px_rgba(255,20,147,0.6)] transition-all max-w-[90%] md:max-w-none whitespace-normal h-auto leading-tight"
          >
            QUERO ENSINAR VALORES CRISTÃOS! 🙏
          </Button>
        </motion.div>

      </div>
    </section>
  );
}

function Badge({ color, text }: { color: "green" | "blue" | "yellow" | "purple", text: string }) {
  const colors = {
    green: "bg-brand-green-light text-brand-green border-brand-green/20",
    blue: "bg-brand-blue-light text-brand-blue border-brand-blue/20",
    yellow: "bg-brand-yellow-light text-brand-yellow-dark border-brand-yellow/20", // using yellow-dark text for contrast
    purple: "bg-brand-purple-light text-brand-purple-dark border-brand-purple/20",
  };

  // Adjust text color for yellow manually if needed, or rely on palette
  const textColors = {
    green: "text-[#2E7D32]",
    blue: "text-[#1565C0]",
    yellow: "text-[#F57F17]",
    purple: "text-[#6A1B9A]",
  };

  return (
    <div className={`flex items-center gap-3 px-6 py-3 rounded-full border ${colors[color]} shadow-sm`}>
      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-white/50`}>
        <Check className={`w-4 h-4 ${textColors[color]}`} />
      </div>
      <span className={`font-medium text-sm md:text-base text-left leading-tight ${textColors[color]}`}>{text}</span>
    </div>
  );
}
