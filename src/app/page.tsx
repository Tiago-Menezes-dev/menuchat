import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MenuChat</h1>
        <Link
          href="/menu/beco-burguer/1"
          className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-100 transition-colors"
        >
          Usar agora
        </Link>
      </div>
    </header>

    <main className="flex-grow flex items-center justify-center bg-green-50">
      <div className="text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
          O pedido é com a gente!
        </h2>
        <p className="text-xl md:text-2xl text-green-600 max-w-2xl mx-auto mb-8">
          Um app para automatizar pedidos pelo WhatsApp
        </p>
        <Link
          href="/menu/beco-burguer/1"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors"
        >
          Usar agora
        </Link>
      </div>
    </main>

    <footer className="bg-green-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} MenuChat. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>

  );
}
