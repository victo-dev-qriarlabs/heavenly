import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className='bg-verde2'>
      <div className='container mx-auto px-8 py-8 xl:py-32'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        
          <div className='flex flex-col space-y-4'>
            <button className='bg-verde1 text-white font-bold py-2 rounded-xl'>Ajuda</button>
            <button className='bg-verde1 text-white font-bold py-2 px-6 rounded-xl'>Entre em contato</button>
          </div>

          <div className='flex flex-col space-y-4 text-center'>
            <p className='text-verde1 font-extrabold'>Autores</p>
            <p className='text-verde1 font-extrabold'>Todos os produtos</p>
            <p className='text-verde1 font-extrabold'>Termos de uso</p>
          </div>

          <div className='flex flex-col space-y-4 text-center'>
            <h3 className='text-2xl font-extrabold text-verde1 mb-4'>Redes Sociais</h3>
            <div className='flex justify-center space-x-4'>
              <img className='w-12 h-12' src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook"/>
              <img className='w-12 h-12' src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter"/>
              <img className='w-12 h-12' src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram"/>
            </div>
          </div>

          <div className='flex flex-col space-y-4 text-center'>
            <h3 className='text-2xl font-extrabold text-verde1 mb-4'>Apoio</h3>
            <img src='/img/qriar_logo.png' alt='logo qriarlans' className='w-[200px] mx-auto'/>
          </div>
        </div>
      </div>

      <div className='bg-verde1 text-white text-center p-3'>
        Copyright © 2024. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer