import React from 'react'

const CharacterDetail = () => {
  return (
    
<div className="w-full flex flex-col items-center text-white bg-gray-800 border border-gray-600 rounded-lg shadow md:flex-row">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>

  )
}

export default CharacterDetail