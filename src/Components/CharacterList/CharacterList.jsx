import React, { useEffect, useState } from 'react'


import { GppMaybe, Man2Outlined, PrivacyTipOutlined, WomanOutlined } from '@mui/icons-material'

const CharacterList = ({selectedID ,SelectedIDHandler , characters}) => {

  return (

<div className={`${characters.length && "border border-gray-600"} grid mb-8  rounded-lg shadow-sm dark:border-gray-700 md:mb-12 lg:grid-cols-2`}>
    {
        characters.map((character)=> {
            return(
                <React.Fragment key={character.id}>
  <CharacterCard characterInfos={character} >
  <button onClick={() => SelectedIDHandler(character.id)} className='text-violet-500'>
                    {
                        selectedID === character.id ? <GppMaybe /> : <PrivacyTipOutlined />
                    }
                    
                  </button>

    </CharacterCard>
                </React.Fragment>
            )
        })
    }


</div>

  )
}

export default CharacterList


export function CharacterCard({characterInfos , children}){
    return(
        <div className="flex flex-col items-center justify-center p-4 text-center bg-gray-800 border-b border-gray-600 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full flex items-center justify-between gap-2">
            <img className="rounded-full size-12" src={characterInfos.image} alt={characterInfos.name} />
            <div className="flex flex-col space-y-4 font-medium dark:text-white text-left">
                <div className='flex text-orange-500 font-bold'>
                    <p className='text-sky-500'>
                    { characterInfos.gender === "Male" ? <Man2Outlined className='size-5' /> : <WomanOutlined className='size-5' />} </p>
                    <p className='text-base'>{characterInfos.name}</p>
                    </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 ">
                    <p>
                        {characterInfos.status === "Alive" ? <span className='block size-2 bg-emerald-500 rounded-full'></span> :  characterInfos.status === "unknown" ? <span className='block size-2 bg-white rounded-full'></span> : <span className='block size-2 bg-rose-500 rounded-full'></span>}
                    </p>
                    <p> {characterInfos.status} - {characterInfos.species}</p>
                   
                    </div>
            </div>
                  {children}
        </div>    
    </div>
    )
}