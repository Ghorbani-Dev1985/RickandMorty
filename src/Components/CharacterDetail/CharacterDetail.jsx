import { Man2Outlined, WomanOutlined } from "@mui/icons-material";
import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import ApiRequest from "../../Services/Axios/Config";
import CharacterLoading from "../Loading/CharacterLoading";

const CharacterDetail = ({selectedID}) => {
   const [character , setCharacter] = useState(null)
   const [isLoading , setIsLoading] = useState(false)
   const [episodes , setEpisodes] = useState([])
   useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const getCharactersData = await ApiRequest(`character/${selectedID}`)
          .then((response) => {
            if(response.status === 200){
              setCharacter(response.data)
              const episodeID = response.data.episode.map(episode => episode.split("/").at(-1))
              const getEpisodeData = ApiRequest(`episode/${episodeID}`)
              .then((response) => {
                if(response.status === 200){
                 setEpisodes([response.data].flat())
                }
              })
              setIsLoading(false)
             
            }
          })
    }
    // if(selectedID) 
    fetchData()
   }, [selectedID])
   console.log(episodes)
  return (
    <>
      {!selectedID ? (
        <Alert variant="outlined" severity="info" className="text-white">
        Please select a character
      </Alert>
      ) : (
        <>
        {
          isLoading ? <CharacterLoading /> :
          <>
          <div className="w-full flex flex-col items-center text-white bg-gray-800 border border-gray-600 rounded-lg shadow md:flex-row mb-8">
            <img
              className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-72 md:rounded-none md:rounded-s-lg"
              src={character.image}
              alt=""
            />
            <div className="flex flex-col justify-between gap-3 p-4 leading-normal">
              <div className="flex text-orange-500 font-bold my-2">
                <p className="text-sky-500">
                  {character.gender === "Male" ? (
                    <Man2Outlined className="size-5" />
                  ) : (
                    <WomanOutlined className="size-5" />
                  )}{" "}
                </p>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-orange-500 dark:text-white">
                  {character.name}
                </h2>
              </div>
              <div className="flex items-center gap-1 text-sm text-white">
                <p>
                  {character.status === "Alive" ? (
                    <span className="block size-2 bg-emerald-500 rounded-full"></span>
                  ) : character.status === "unknown" ? (
                    <span className="block size-2 bg-white rounded-full"></span>
                  ) : (
                    <span className="block size-2 bg-rose-500 rounded-full"></span>
                  )}
                </p>
                <p>
                  {" "}
                  {character.status} - {character.species}
                </p>
              </div>
              <p className="text-gray-500">Last known Location</p>
              {/* {character.location.name} */}
              <button className="bg-gray-600 rounded-full px-2 py-3 max-w-40 my-2">
                Add To Favorite
              </button>
            </div>
          </div>
          {/* Character Episode */}
          <div className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg h-[48.5rem] min-h-[48.5rem] overflow-y-scroll shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-3 text-base font-semibold md:text-xl dark:text-white">
              List Of Episodes:
            </h5>
            {
              episodes.length ? (
                episodes.map(({id,air_date, episode, name }) => {
                  return(
                    <React.Fragment key={id}>
              
                <ul className="my-4 space-y-3">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-3 text-base font-bold rounded-lg bg-slate-700 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap">
                      <span className="text-gray-400 font-sans">{String(id).padStart(2, "0")}-{episode}</span>: <span className="text-orange-500 font-bold">{name}</span>
                      </span>
                      <span className="inline-flex font-sans items-center justify-center px-2 py-1 ms-3 text-xs font-medium text-white bg-gray-500 rounded dark:bg-gray-700 dark:text-gray-400">
                        {air_date}
                      </span>
                    </a>
                  </li>
                </ul>
                    </React.Fragment>
                  )
                })
              )
               :  <Alert variant="outlined" severity="info" className="text-white">
              Episode Not Available
            </Alert>
         }
          </div>
                  </>
          }
          </>
      )}
    </>
  );
};

export default CharacterDetail;
