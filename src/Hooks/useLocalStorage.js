

import React, { useEffect, useState } from 'react'

const useLocalStorage = (itemName) => {
    const [value , setValue] = useState(() => JSON.parse(localStorage.getItem(itemName)) || [])
    useEffect(()=> {
        localStorage.setItem(itemName , JSON.stringify(value))
       }, [value])
    return [value , setValue]
}

export default useLocalStorage
