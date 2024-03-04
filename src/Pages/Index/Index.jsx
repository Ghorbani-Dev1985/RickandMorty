import React, { useEffect, useState } from 'react'
import { Divider } from '@mui/material'
import CharacterDetail from '../../Components/CharacterDetail/CharacterDetail'
import CharacterList from '../../Components/CharacterList/CharacterList'
import ApiRequest from '../../Services/Axios/Config'
import toast from 'react-hot-toast'
import Header from '../../Components/Header/Header'

const Index = () => {
    const [characters , setCharacters] = useState([])
    const [characterDetails , setCharacterDetails] = useState([])
    const [characterEpisodes , setCharacterEpisodes] = useState([])
    const ShowDetailsHandler = (id) => {
        const fetchCharacterDetails = ApiRequest(`character/${id}`)
        .then((response) => {
          if(response.status === 200){
            console.log(response)
            setCharacterDetails(response.data)
            setCharacterEpisodes(response.data.episode)
          }else{
              toast.error("Error- Fetch Datas")
          }
        })
    } 
    useEffect(() => {
      const fetchCharacter = ApiRequest('character')
      .then((response) => {
        if(response.status === 200){
            setCharacters(response.data.results)
        }else{
            toast.error("Error- Fetch Datas")
        }
      })
    }, [])
    console.log(characterEpisodes)
  return (
    <>
    <Header characters={characters}/>
    <section className='container'>
        <section className='border border-gray-600 rounded-xl min-h-screen'>
   <h1 className='text-center my-8 text-7xl font-MorabbaBold tracking-widest'>The Rick and Morty</h1>
   <Divider className='border-gray-600 max-w-sm mx-auto'/>
   <div className='grid grid-cols-12 gap-5 my-8 px-3'>
        <div className='col-span-12 lg:col-span-5 order-2 lg:order-1'>
         <CharacterList characters={characters} ShowDetailsHandler={ShowDetailsHandler}/>
        </div>
        <div className='col-span-12 lg:col-span-7 order-1 lg:order-2'>
         <CharacterDetail characterDetails={characterDetails} characterEpisodes={characterEpisodes}/>
        </div>
   </div>
   </section>
   </section>
    </>
  )
}

export default Index