import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.jpg"

function MenuNav () {
  return(
    <>
      <div className='container mx-auto px-4 h-16 flex items-center justify-between bg-verde2'>
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faBars} className='text-xl text-verde1 mr-3' />
        </div>
        <div className='text-center'>
          <div className='font-black text-2xl text-gray-800'>
            <img src={logo} alt='logo' className='w-12 rounded-full'/>
          </div>      
        </div>
        <div className='flex items-center' style={{ visibility: 'hidden' }}>
          <FontAwesomeIcon icon={faBars} className='text-2xl text-gray-800' />
        </div>
      </div>
    </>
  )
}
  export default MenuNav;