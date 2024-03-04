import React, { useEffect, useState } from 'react'
import ApiRequest from '../../Services/Axios/Config'
import toast from 'react-hot-toast'
import { Man2Outlined, WomanOutlined } from '@mui/icons-material'

const CharacterList = () => {
    const [characters , setCharacters] = useState([])
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
    console.log(characters)
  return (

<div className="grid mb-8 border border-gray-600 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
    {
        characters.map(({id ,name , image , gender , status , species , url})=> {
            return(
                <React.Fragment key={id}>
    <div className="flex flex-col items-center justify-center p-4 text-center bg-gray-800 border-b border-gray-600 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full flex items-center gap-2">
            <img className="rounded-full w-9 h-9" src={image} alt="profile picture" />
            <div className="flex flex-col space-y-4 font-medium dark:text-white text-left">
                <div className='flex gap-3 text-orange-500 font-bold'>
                    <p className='text-sky-500 size-3'>
                    { gender === "Male" ? <Man2Outlined /> : <WomanOutlined />} </p>
                    <p>{name}</p>
                    </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 ">
                    <p>
                        {status === "Alive" ? <span className='block size-2 bg-emerald-500 rounded-full'></span> :  status === "unknown" ? <span className='block size-2 bg-white rounded-full'></span> : <span className='block size-2 bg-rose-500 rounded-full'></span>}
                    </p>
                    <p> {status} - {species}</p>
                   
                    </div>
            </div>
        </div>    
    </div>

                </React.Fragment>
            )
        })
    }


</div>

  )
}

export default CharacterList
