import React from 'react'

import Logo from '../../assets/Images/Logo/logo.png'
import { FavoriteBorderOutlined } from '@mui/icons-material'

const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='bg-mainSlate flex-between rounded-xl my-6 p-4'>
         <img src={Logo} alt='ghorbani-dev.ir' className='w-25 rounded-full'/>
         <input type='text' className="rounded-full h-14 dark:focus:text-white outline-none text-white dark:text-gray-600 placeholder:text-slate-500 dark:placeholder-gray-600 w-48 focus:w-64 border border-transparent hover:border-gray-200 dark:border-gray-700 dark:focus:border-gray-600 bg-gray-main/50 text-base placeholder:text-lg pl-14 pr-5 block transition-all"
              placeholder="search..."/>
              <div className='flex-centre relative'>
                <FavoriteBorderOutlined className='text-rose-500 size-9'/>
                <span className='bg-rose-500 text-white size-6 flex-center p-1 rounded-full absolute -top-2 -right-2'>2</span>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header