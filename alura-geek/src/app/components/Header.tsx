import { MagnifyingGlass } from 'phosphor-react'
import Image from 'next/image'
import controle from '../assets/controle.svg'
import titulo from '../assets/titulo.svg'

export default function Header() {
  return (
    <div className="my-4 flex justify-between mx-4">
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="flex">
            <Image src={controle} alt="controle" />
            <Image src={titulo} alt="titulo" />
          </div>

          <div className="relative hidden md:block">
            <textarea
              id="message"
              className=" items-center p-2 resize-none pl-4 text-sm flex h-10 w-64 mx-8 bg-bblur text-cinza rounded-full"
              placeholder="Write your thoughts here..."
            ></textarea>
            <div className="absolute top-2 left-60">
              <MagnifyingGlass
                size={24}
                className="hidden md:block text-cinza"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around">
        <div className="flex mr-10">
          <MagnifyingGlass className="md:hidden block" size={32} />
        </div>
        <div>
          <button className="py-3 flex  px-20 border font-bold font text-azul">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
