
import React, { useEffect, useState } from 'react'
import ApiRequest from '../Services/Axios/Config'

const useCharacters = (query) => {
    const [characters , setCharacters] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        async function getCharacters (){
          setIsLoading(true)
          const fetchCharacter = await ApiRequest(`character/?name=${query}` , {signal})
          .then((response) => {
            if(response.status === 200){
                setCharacters(response.data.results)
                setIsLoading(false)
            }
          })
          .catch((error) =>{
           if(error.response.status === 404){
            setCharacters([])
            setIsLoading(false)
           }
          })
        }
  
        getCharacters()
        return () => {
          controller.abort()
        }
      }, [query])

      return {characters , isLoading}
}

export default useCharacters