import { motion } from "framer-motion";
import focusImg from "@assets/generated_images/cartoon_child_focusing_on_tasks_with_lightbulb_icon.png";
import valuesImg from "@assets/generated_images/child_reading_a_bible_story_book_with_parents.png";
import readingImg from "@assets/generated_images/open_book_with_floating_letters_and_stars.png";
import offlineImg from "@assets/generated_images/child_playing_with_blocks_and_books_away_from_tablet.png";

const benefits = [
  {
    title: "Fortalece atenção e concentração",
    desc: "Atividades e histórias que estimulam o foco, a escuta e a participação ativa da criança de forma leve e natural.",
    img: focusImg
  },
  {
    title: "Constrói valores e desenvolvimento espiritual",
    desc: "Histórias que ensinam princípios como respeito, empatia, obediência, gratidão e fé, de maneira simples e acessível.",
    img: valuesImg
  },
  {
    title: "Incentiva o hábito da leitura",
    desc: "Conteúdos pensados para despertar o interest pelas histórias, melhorar a compreensão e criar uma rotina saudável de leitura.",
    img: readingImg
  },
  {
    title: "Menos telas, mais aprendizado consciente",
    desc: "Atividades e histórias que promovem momentos offline, fortalecendo o vínculo familiar e reduzindo o excesso de tempo digital.",
    img: offlineImg
  }
];

export default function Skills() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-[800px] mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-black leading-tight">
            Desenvolva valores e habilidades desde a infância 💡
          </h2>
        </div>

        <div className="space-y-20">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="w-56 h-56 mb-8 relative">
                <div className="absolute inset-0 bg-brand-pink/5 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
                <img 
                  src={benefit.img} 
                  alt={benefit.title} 
                  className="relative z-10 w-full h-full object-contain drop-shadow-md"
                />
              </div>
              
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl mb-4 text-black px-4 leading-tight">
                {benefit.title}
              </h3>
              
              <p className="font-sans text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-4">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
