import { motion } from "framer-motion";
import { Check, ChevronDown, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import payImg from "@assets/generated_images/secure_payment_icon_with_credit_card_and_shield.png";
import mailImg from "@assets/generated_images/email_icon_with_a_paper_plane_and_envelope.png";
import accessImg from "@assets/generated_images/download_icon_with_mobile_phone_and_document.png";
import anaMariaImg from "@assets/generated_images/professional_woman_teacher_portrait.png";
import isabeleImg from "@/assets/webp_images/isabele.webp";

export default function PostPricing() {
  return (
    <div className="space-y-16 pb-24">


      {/* Social Proof / Rating */}
      <section className="container max-w-[500px] mx-auto px-4">
        <div className="bg-white border-2 border-gray-100 rounded-[30px] p-10 text-center shadow-xl">
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 text-[#FFC107] fill-[#FFC107]" />)}
          </div>
          <p className="text-5xl font-extrabold text-black mb-2">4,8 de 5</p>
          <p className="text-xl text-gray-500 mb-8">Avaliação média</p>
          <h4 className="text-2xl md:text-3xl font-heading font-bold text-brand-pink">
            Mais de 3.450 pedagogas aprovam
          </h4>
        </div>
      </section>

      {/* Oferta Section Moved Here */}
      <section className="py-8" id="ofertas">
        <div className="container max-w-[600px] md:max-w-5xl mx-auto px-4">
          <div className="bg-[#f473b6] rounded-[30px] p-6 md:p-10 shadow-2xl relative overflow-hidden">

            {/* Header Content inside Pink Card */}
            <div className="text-center text-white mb-10 relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 border-4 border-[#f473b6] rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-[#f473b6] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#f473b6] rounded-full" />
                  </div>
                </div>
              </div>
              <h3 className="font-heading font-extrabold text-3xl md:text-4xl leading-tight uppercase">
                Escolha Seu Plano:
              </h3>
            </div>

            {/* Grid Container for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

              {/* Kit Básico Card */}
              <div className="bg-white rounded-[20px] p-8 text-center shadow-lg">
                <h4 className="font-bold text-2xl text-[#1a2b3c] mb-2">Kit Básico</h4>
                <div className="text-[#3B82F6] font-extrabold text-5xl mb-4">R$ 14,90</div>
                <p className="text-gray-500 mb-6 font-medium">Pagamento único</p>

                <ul className="space-y-3 mb-8 text-left max-w-[250px] mx-auto">
                  <li className="flex items-center gap-2 text-gray-700 font-medium font-sans">
                    <span className="text-green-500 font-bold">✓</span> 50 histórias
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-medium font-sans">
                    <span className="text-green-500 font-bold">✓</span> Acesso Imediato
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-medium font-sans">
                    <span className="text-green-500 font-bold">✓</span> Pronto para imprimir
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-medium font-sans">
                    <span className="text-green-500 font-bold">✓</span> Suporte 24h
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-medium font-sans">
                    <span className="text-green-500 font-bold">✓</span> Garantia de 14 dias
                  </li>
                </ul>

                <Button
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).fbq) {
                      (window as any).fbq('track', 'InitiateCheckout', {
                        content_name: 'Kit Básico',
                        content_ids: ['kit-basico'],
                        value: 14.90,
                        currency: 'BRL'
                      });
                    }
                    window.open('https://pay.lowify.com.br/checkout?product_id=PAMxOz', '_blank');
                  }}
                  className="w-full bg-transparent hover:bg-blue-50 text-[#3B82F6] border-2 border-[#3B82F6] font-bold py-6 rounded-full text-xl shadow-lg uppercase mb-4"
                >
                  Escolher Básico
                </Button>
                <p className="text-base text-gray-600 font-bold font-sans mt-2">Temos uma oferta ainda mais vantajosa para você abaixo! ⬇️</p>
              </div>

              {/* Kit Premium Card */}
              <div className="bg-white rounded-[20px] p-8 text-center shadow-xl relative transform md:-translate-y-4 border-4 border-yellow-300 md:border-none hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D32F2F] text-white px-8 py-2 rounded-full font-bold uppercase text-sm tracking-wider shadow-md whitespace-nowrap z-20">
                  MAIS ESCOLHIDO
                </div>



                <h4 className="font-extrabold text-3xl text-[#da00ac] mb-2">Kit Premium</h4>
                <div className="text-[#F44336] font-extrabold text-6xl mb-4 whitespace-nowrap">R$ 29,90</div>
                <p className="text-gray-700 font-bold mb-2">Experiência completa para transformar a vida das crianças + todos os bônus</p>
                <p className="text-gray-500 mb-8 font-medium">Pagamento único</p>

                <ul className="space-y-4 mb-8 text-left max-w-[300px] mx-auto">
                  {[
                    "+ 150 histórias da bíblia para crianças",
                    "Mais de R$ 100 em bônus GRÁTIS",
                    "Acesso imediato vitalício",
                    "Material pronto para imprimir",
                    "Atendimento prioritário",
                    "Atualizações futuras inclusas"
                  ].map((text, i) => (
                    <li key={i} className={`flex items-center gap-3 font-bold font-sans ${text.includes('GRÁTIS') ? 'text-[#F44336]' : 'text-gray-800'}`}>
                      <div className="bg-[#4CAF50] rounded-full p-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>


                <Button
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).fbq) {
                      (window as any).fbq('track', 'InitiateCheckout', {
                        content_name: 'Kit Premium',
                        content_ids: ['kit-premium'],
                        value: 29.90,
                        currency: 'BRL'
                      });
                    }
                    window.open('https://pay.lowify.com.br/checkout.php?product_id=LgPbw2', '_blank');
                  }}
                  className="w-full bg-[#FF8C00] hover:bg-[#F57C00] text-white font-black py-8 rounded-full text-lg shadow-xl uppercase mb-4 h-auto leading-none"
                >
                  ESCOLHER PREMIUM
                </Button>

                <div className="space-y-2 mt-6">
                  <p className="text-[#D32F2F] font-bold flex items-center justify-center gap-2">
                    ⚠️ Oferta válida até hoje, 23h59 ou enquanto durar o lote atual
                  </p>
                  <p className="text-gray-500 font-medium">Não perca essa oportunidade única!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Risco Zero Section */}
      <section className="py-16 bg-[#E8F5E9]/50">
        <div className="container max-w-[600px] mx-auto px-4 text-center">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1B5E20] mb-8 leading-tight">
            Risco Zero por 14 Dias! 🛡️
          </h2>
          <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-xl border-2 border-[#81C784]/20">
            <div className="w-32 h-32 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-md">
              <Check className="w-16 h-16 text-[#2E7D32]" strokeWidth={4} />
            </div>
            <p className="text-2xl font-bold text-[#1B5E20] mb-4">Não gostou? Devolvemos 100% do valor sem perguntas.</p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Acreditamos tanto na qualidade do nosso material que você tem 14 dias para experimentar sem compromisso. Se não amar, devolvemos 100% do seu dinheiro, sem perguntas.
            </p>
            <div className="inline-block bg-[#E8F5E9] text-[#2E7D32] font-bold px-8 py-4 rounded-xl border-2 border-[#A5D6A7]">
              ✅ Compra 100% Sem Riscos
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-[700px] mx-auto px-4">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-12 text-center flex items-center justify-center gap-3">
            Dúvidas Frequentes 🤔
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Posso imprimir quantas vezes quiser?", a: "Sim! Após o download, o arquivo é seu para sempre e você pode imprimir quantas cópias precisar para uso pessoal ou em sala de aula." },
              { q: "Funciona para crianças com atraso na fala?", a: "Sim, o material é visual e lúdico, ajudando muito no estímulo à comunicação e associação de ideias." },
              { q: "É material físico ou digital?", a: "O material é 100% digital em formato PDF, enviado diretamente para o seu e-mail logo após a confirmação do pagamento." },
              { q: "Posso usar na escola com meus alunos?", a: "Com certeza! É um material excelente para professores, catequistas e educadores em geral." },
              { q: "Posso pagar no Pix ou cartão?", a: "Sim, aceitamos Pix com liberação imediata e cartão de crédito com parcelamento disponível." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-2 border-gray-100 rounded-2xl px-6 bg-gray-50/50">
                <AccordionTrigger className="hover:no-underline font-bold text-lg text-left py-6">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm shrink-0">{i + 1}</span>
                    {item.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg pb-6 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#E3F2FD]/50">
        <div className="container max-w-[600px] mx-auto px-4 text-center">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full border-4 border-brand-purple/20 p-1 bg-white shadow-xl">
            <img src={isabeleImg} alt="Isabele" loading="lazy" className="w-full h-full rounded-full object-cover" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl text-black mb-4">Sobre Isabele ✨</h2>
          <div className="space-y-6 text-lg text-gray-700 font-sans leading-relaxed">
            <p>Olá! Sou Isabele educadora apaixonada pela infância e pelo poder do aprendizado com significado. Ao longo da minha trajetória, percebi como muitos pais, educadores e catequistas enfrentam dificuldades para encontrar materiais infantis que sejam, ao mesmo tempo, educativos, acessíveis e cheios de valores.</p>
            <p>Este projeto nasceu do desejo de facilitar esse caminho, oferecendo conteúdos prontos, organizados e pensados para tornar o ensino mais leve, intencional e prazeroso.</p>
            <p className="font-bold italic text-brand-purple">Acredito que ensinar uma criança é plantar sementes que florescem para a vida toda.</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="container max-w-[600px] mx-auto px-4">
          <div className="bg-[#1E88E5] rounded-[30px] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <Star className="w-32 h-32 fill-white" />
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-8 leading-tight relative z-10">
              Um material que já apoia milhares de experiências educativas
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 relative z-10">
              Utilizado por famílias, educadores e projetos infantis em todo o país
            </p>
            <div className="flex justify-center relative z-10">
              <Button
                onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#FFC107] hover:bg-[#FFB300] text-black font-extrabold text-lg md:text-2xl px-12 py-6 md:px-16 md:py-10 rounded-full shadow-[0_4px_15px_rgba(255,193,7,0.4)] hover:shadow-[0_6px_20px_rgba(255,193,7,0.6)] transition-all h-auto w-auto max-w-[90%] uppercase leading-none tracking-wide border-2 border-white/20 flex flex-col items-center justify-center gap-1"
              >
                <span>GARANTIR MINHAS</span>
                <span>HISTÓRIAS!</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
