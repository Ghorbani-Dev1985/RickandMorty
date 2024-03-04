import React from 'react'
import { Divider } from '@mui/material'
import CharacterDetail from '../../Components/CharacterDetail/CharacterDetail'
import CharacterList from '../../Components/CharacterList/CharacterList'


const Index = () => {
  return (
    <>
   <h1 className='text-center my-8 text-7xl font-MorabbaBold tracking-widest'>The Rick and Morty</h1>
   <Divider className='border-gray-600 max-w-sm mx-auto'/>
   <div className='grid grid-cols-12 gap-5 my-8 px-3'>
        <div className='col-span-5'>
         <CharacterList />
        </div>
        <div className='col-span-7'>
         <CharacterDetail />
        </div>
   </div>
    </>
  )
}

export default Index