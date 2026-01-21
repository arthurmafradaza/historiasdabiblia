import { BookOpen, Heart, MessageCircle } from "lucide-react";

export default function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-[1200px] mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-black">
            Desenvolva a Fé com Leveza 💡
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-black">Fortalece a Fé</h3>
            <p className="font-sans text-gray-600 leading-relaxed max-w-[280px]">
              Histórias que ensinam sobre Deus de forma lúdica e envolvente, criando raízes profundas.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-pink-500" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-black">Valores Reais</h3>
            <p className="font-sans text-gray-600 leading-relaxed max-w-[280px]">
              Ensine bondade, perdão e amor através de exemplos práticos dos heróis da fé.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-12 h-12 text-purple-500" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-black">União Familiar</h3>
            <p className="font-sans text-gray-600 leading-relaxed max-w-[280px]">
              Crie momentos preciosos de leitura e conversa em família longe das telas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
