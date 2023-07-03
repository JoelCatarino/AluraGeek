import Image from 'next/image'
import cogu from '../assets/cogu.jpg'

export default function Hero() {
  return (
    <>
      <div className="w-full relative">
        <Image className="w-full relative" alt="" src={cogu} />
        <div>
          <div className="absolute top-44 left-4 h-40 w-auto flex flex-col">
            <h1 className="text-3xl font-bold text-branco w-full break-words">
              Dezembro Promocional
            </h1>
            <h3 className="text-sm text-branco font-semibold mt-2">
              Produtos selecionados com 33% de desconto
            </h3>
            <button className="bg-azul text-branco">Ver Consoles</button>
          </div>
        </div>
      </div>
    </>
  )
}
