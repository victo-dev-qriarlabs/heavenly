import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
function MenuNav () {
  return(
    <>
      <div className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faBars} className='text-xl text-gray-800 mr-3' />
        </div>
        <div className='flex-grow text-center'>
          <div className='font-black text-2xl text-gray-800'>
            HEAVENLY
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