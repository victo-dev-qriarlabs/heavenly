import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-verde2'>
  <div className='container mx-auto px-8 '>
  <div className='flex flex-col space-y-4 mt-7'>
  <button className='bg-verde1 text-white font-bold py-2 px-32 mt-10 rounded-xl'>
    Ajuda
  </button>
  
  <button className='bg-verde1 text-white font-bold py-2 px-6 rounded-xl'>
    Entre em contato
  </button>
</div>
  </div>

  <div className='mt-10'>
    <p className='text-verde1 flex justify-center mt-4'>Autores</p>
    <p className='text-verde1 flex justify-center mt-4'>Todos os produtos</p>
    <p className='text-verde1 flex justify-center mt-4'>Termos de uso</p>
  </div>

  <div className='text-center mt-10'>
          <h3 className='text-2xl font-semibold text-verde1 mb-4'>Redes Sociais</h3>
          <div className='flex space-x-4 justify-center'>
            <img className='w-12 h-12' src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook"/>
            <img className='w-12 h-12' src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter"/>
            <img className='w-12 h-12' src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram"/>
          </div>
          <h3 className='text-2xl font-semibold text-verde1 mb-4 mt-10'>Apoio</h3>
          <div className='flex justify-center'>
            <img src='./img/qriar_logo.png' alt='logo qriarlans' className='w-[200px] mb-10' />
         </div>
         <div className='bg-verde1 text-white p-3'>
         Copyright © 2024. All rights reserved.
         </div>
        </div>
</div>
    </>
  )
}

export default Footer