export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
      <div className="container mx-auto px-4">
        <p className="mb-4">© 2026 Histórias da Bíblia Kids. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}
