import React, { useState } from 'react'

import Logo from '../../assets/Images/Logo/logo.png'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import DetailModal from '../DetailModal/DetailModal'

const Header = ({characters , query , setQuery , numOfFavorites}) => {

  return (
    <header>
        <div className='container'>
            <div className='bg-gray-800 border border-gray-600 flex-between rounded-xl my-6 p-2'>
         <img src={Logo} alt='ghorbani-dev.ir' className='w-25 rounded-full'/>
         <div className='flex flex-col items-center gap-2'>
         <input value={query} onChange={(event) => setQuery(event.target.value)} type='text' className="rounded-full h-14 dark:focus:text-white outline-none text-white dark:text-gray-600 placeholder:text-slate-500 dark:placeholder-gray-600 w-48 focus:w-64 border border-transparent hover:border-gray-200 dark:border-gray-700 dark:focus:border-gray-600 bg-gray-700 text-base placeholder:text-lg pl-14 pr-5 block transition-all"
              placeholder="search..."/>
              <span className='font-DanaBold'>Found <span className='text-emerald-500 font-sans'>{characters.length}</span> Characters</span>
         </div>
              <div className='flex-centre relative'>
                <FavoriteBorderOutlined className='text-rose-500 size-9'/>
                <span className='bg-rose-500 text-white size-6 pt-2 flex-center rounded-full absolute -top-2 -right-1'>{numOfFavorites}</span>
              </div>
            </div>
        </div>
        <DetailModal open={true} setOpen={true}>dsds</DetailModal>
    </header>
  )
}

export default Header