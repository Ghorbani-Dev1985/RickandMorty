import React, { useEffect, useState } from 'react'
import { Divider } from '@mui/material'
import CharacterDetail from '../../Components/CharacterDetail/CharacterDetail'
import CharacterList from '../../Components/CharacterList/CharacterList'
import ApiRequest from '../../Services/Axios/Config'
import toast from 'react-hot-toast'
import Header from '../../Components/Header/Header'
import CharactersLoading from '../../Components/Loading/CharactersLoading'
import useCharacters from '../../Hooks/useCharacters'

const Index = () => {
  const [selectedID , setSelectedID] = useState("")
  const [characterEpisodes , setCharacterEpisodes] = useState([])
  const [query , setQuery] = useState("")
  const {characters , isLoading} = useCharacters(query) 
  console.log(characters , isLoading)
    const [favorites , setFavorites] = useState(() => JSON.parse(localStorage.getItem("RICK_FAVORITE_ITEM")) || [])
    const SelectedIDHandler = (id) => {
      setSelectedID(prevID => prevID === id ? null : id)
    } 
    const AddToFavoriteHandler = (char) => {
        setFavorites((prevFav) => [...prevFav , char])

    }
    const RemoveFavoriteHandler = (id) => {
    setFavorites((prevFav) => prevFav.filter(fav => fav.id !== id))
    }
    useEffect(()=> {
     localStorage.setItem("RICK_FAVORITE_ITEM" , JSON.stringify(favorites))
    }, [favorites])
    const isAddToFavorite = favorites.map((fav) => fav.id).includes(selectedID)

    
  return (
    <>
    <Header characters={characters} query={query} setQuery={setQuery} favorites={favorites} RemoveFavoriteHandler={RemoveFavoriteHandler}/>
    <section className='container'>
        <section className='border border-gray-600 rounded-xl min-h-screen'>
   <h1 className='text-center my-8 text-7xl font-MorabbaBold tracking-widest'>The Rick and Morty</h1>
   <Divider className='border-gray-600 max-w-sm mx-auto'/>
   <div className='grid grid-cols-12 gap-5 my-8 px-3'>
        <div className='col-span-12 lg:col-span-5 order-2 lg:order-1'>
          {
            isLoading ? <CharactersLoading listsToRender={20}/> 
            : <CharacterList selectedID={selectedID} characters={characters} SelectedIDHandler={SelectedIDHandler}/>
          }

        </div>
        <div className='col-span-12 lg:col-span-7 order-1 lg:order-2'>
         <CharacterDetail selectedID={selectedID} characterEpisodes={characterEpisodes} AddToFavoriteHandler={AddToFavoriteHandler} isAddToFavorite={isAddToFavorite}/>
        </div>
   </div>
   </section>
   </section>
    </>
  )
}

export default Index