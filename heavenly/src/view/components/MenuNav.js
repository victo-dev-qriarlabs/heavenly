import React from 'react';

function MenuNav() {
  return (
    <>
      <div className=" fixed top-0 left-0 w-full z-50" style={{ backgroundColor: '#02735E' }}>
        <div className="flex justify-between items-center p-6 px-6 lg:px-0 container mx-auto relative">

          <input className="peer hidden" type="checkbox" name="teste" id="teste" />
          <label className="peer-checked:hamburguer block cursor-pointer lg:hidden border border-gray-300
  peer-checked:border-2 peer-checked:border-white p-3 rounded-md transition-all flex flex-col items-center justify-center"
            htmlFor="teste">
            <div className="w-6 h-0.5 rounded bg-gray-300 transition-all duration-300 mb-1"></div>
            <div className="w-6 h-0.5 rounded bg-gray-300 transition-all duration-300 mb-1"></div>
            <div className="w-6 h-0.5 rounded bg-gray-300 transition-all duration-300"></div>
          </label>

          <div className="absolute inset-0 flex items-center justify-center text-lg font-bold uppercase text-white" style={{ zIndex: -10, pointerEvents: 'none' }}>
            HEAVENLY
          </div>


          <div className="-translate-y-full peer-checked:translate-y-0 lg:translate-y-0 inset-0 fixed lg:static pt-20
      lg:pt-0 lg:bg-transparent -z-20 lg:z-10 lg:h-auto lg:w-auto transition-all duration-300 
      ease-in-out">

            <div className="bg-white shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col 
      lg:items-center lg:flex-row px-6 space-y-4 lg:space-y-0 lg:space-x-12 ">

              <a className="text-black lg:text-white hover:text-gray-300 transition-all text-[#02735E]" href="/#">home</a>
              <a className="text-black lg:text-white hover:text-gray-300 transition-all text-[#02735E]" href="/horoscopo">Horoscopo do dia</a>
              <a className="text-black lg:text-white hover:text-gray-300 transition-all text-[#02735E]" href="/constelacoes">Constelação</a>
              <a className="text-black lg:text-white hover:text-gray-300 transition-all text-[#02735E]" href="/duvidas">Duvidas comuns</a>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MenuNav;