import React, { useState } from 'react'

import Logo from '../../assets/Images/Logo/logo.png'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import DetailModal from '../DetailModal/DetailModal'
import { Alert } from '@mui/material'

const Header = ({characters , query , setQuery , favorites}) => {
   const [isOpen , setIsOpen] = useState(false)
   console.log(favorites)
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
              <button onClick={() => setIsOpen(prev => !prev)} className='flex-centre relative'>
                <FavoriteBorderOutlined className='text-rose-500 size-9'/>
                <span className='bg-rose-500 font-sans text-white size-6 pt-2 flex-center rounded-full absolute -top-2 -right-1'>{favorites.length}</span>
              </button>
            </div>
        </div>
        <DetailModal title="Favorite Details" open={isOpen} setOpen={setIsOpen}>
          {
            favorites.length ? 


<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-gray-950">
            <tr>
            <th scope="col" class="px-6 py-3">
                    No.
                </th>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Gender
                </th>
                <th scope="col" class="px-6 py-3">
                  Species
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
          {
        favorites.map(({id, image , name , gender , species , status } , index) => {
          console.log(typeof index)
              return(
                <React.Fragment key={id}>
            <tr class="bg-slate-700 border-b border-slate-600 last:border-0 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600">
                <th scope="row" class="font-sans px-6 py-4 font-medium whitespace-nowrap">
                    {+(index + 1)}
                </th>
                <td class="px-6 py-4">
                <img className="rounded-full size-12" src={image} alt="profile picture" />
                </td>
                <td class="px-6 py-4">
                    {name}
                </td>
                <td class="px-6 py-4">
                    {gender}
                </td>
                <td class="px-6 py-4">
                    {species}
                </td>
                <td class="px-6 py-4">
                    {status === "Alive" ? <span className='bg-emerald-500 font-bold rounded-lg px-8 py-1'>{status}</span> : <span className='bg-rose-500 font-bold rounded-lg px-8 py-1'>{status}</span>}
                </td>
            </tr>

                </React.Fragment>
              )
             })
          }
           
            
        </tbody>
    </table>
</div>

          
            : <Alert variant="outlined" severity="info" className="text-white">
            You didn't select item ...
          </Alert>
          }
        </DetailModal>
    </header>
  )
}

export default Header