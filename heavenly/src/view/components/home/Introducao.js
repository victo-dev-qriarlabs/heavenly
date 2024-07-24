function Introducao () {
    return(
      <>
        <div
        style={{ backgroundImage: "url('./img/banner.png')" }}
        className='w-full h-[600px] bg-cover bg-center flex items-center justify-center relative'
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='p-8 z-10 -mt-32'>
          <h1 className='text-3xl font-bold mb-7 text-left text-yellow-400'>HEAVENLY - CELESTIAL</h1>
          <p className='items-center text-justify text-white'>
            Descubra os segredos do cosmos com nossas previsões diárias. No Heavenly - Celestial, explore como as estrelas e planetas influenciam sua vida.
          </p>
        </div>
      </div>
      </>
    )
  }
    export default Introducao;