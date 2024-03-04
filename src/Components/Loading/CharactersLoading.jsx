import React from 'react'

const CharactersLoading = ({listsToRender}) => {
  return (
    
      <div role="status" className="grid grid-cols-2 border border-gray-700 rounded shadow animate-pulse dark:divide-gray-700dark:border-gray-700">
    {
        Array(listsToRender)
        .fill(1)
        .map((card, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center justify-between gap-1 p-4 border border-gray-700 h-30">
            <div className="size-10 bg-gray-300 rounded-full dark:bg-gray-600 mb-4"></div>
        <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-20 mb-4"></div>
            <div className="w-28 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
            </React.Fragment>
          ))
        }
        </div>
     
//     <div className="flex items-center justify-between">
//         <div>
//             <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
//             <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
//         </div>
//         <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
//     </div>
//     <div className="flex items-center justify-between pt-4">
//         <div>
//             <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
//             <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
//         </div>
//         <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
//     </div>
//     <div className="flex items-center justify-between pt-4">
//         <div>
//             <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
//             <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
//         </div>
//         <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
//     </div>
//     <div className="flex items-center justify-between pt-4">
//         <div>
//             <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
//             <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
//         </div>
//         <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
//     </div>
//     <div className="flex items-center justify-between pt-4">
//         <div>
//             <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
//             <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
//         </div>
//         <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
//     </div>
//     <span className="sr-only">Loading...</span>
// </div>

  )
}

export default CharactersLoading