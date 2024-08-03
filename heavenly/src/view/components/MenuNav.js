import React from 'react';
import Logo from "../assets/logo.jpg";

function MenuNav() {
  return (
    <>
      <div className="fixed left-0 top-0 w-full z-50 bg-verde2 h-20">
        <div className="container mx-auto flex justify-between items-center p-6 px-6 lg:px-0 relative">
          <input className="peer hidden" type="checkbox" name="transicao" id="transicao" />
          <label className="peer-checked:hamburguer lg:hidden peer-checked:border-2 peer-checked:border-verde1 p-3 rounded-md transition-all flex flex-col items-center justify-center"
            htmlFor="transicao">
            <div className="w-7 h-0.5 rounded bg-verde1 mb-1"></div>
            <div className="w-7 h-0.5 rounded bg-verde1 mb-1"></div>
            <div className="w-7 h-0.5 rounded bg-verde1 "></div>
          </label>
<div className="absolute inset-0 flex flex-col items-center justify-center text-lg font-bold z-[-10] pointer-events-none">
            <img src={Logo} alt='' className='w-8 rounded-full'/>
            <h1 className='text-white'>Heavenly</h1>
          </div>

          <div className="-translate-x-full peer-checked:translate-x-0 lg:translate-x-0 inset-0 fixed lg:static pt-20
            lg:pt-0 lg:bg-transparent -z-20 lg:z-10 lg:h-auto lg:w-auto w-screen transition-all duration-300 
            ease-in-out peer-checked:lg:static peer-checked:lg:translate-x-0 peer-checked:lg:w-auto">

            <div className="bg-white shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col 
              lg:items-center lg:flex-row px-6 space-y-4 lg:space-y-0 lg:space-x-12 h-screen lg:h-auto">

              <a className=" lg:text-white hover:text-gray-300 transition-all text-verde2" href="/">Home</a>
              <a className=" lg:text-white hover:text-gray-300 transition-all text-verde2" href="/horoscopo">Horóscopo do dia</a>
              <a className=" lg:text-white hover:text-gray-300 transition-all text-verde2" href="/constelacao">Constelações</a>
              <a className=" lg:text-white hover:text-gray-300 transition-all text-verde2" href="/duvidas">Dúvidas comuns</a>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuNav;
