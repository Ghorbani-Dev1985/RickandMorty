
import { Toaster } from 'react-hot-toast'

import { useRoutes } from 'react-router-dom'


function App() {
  let router = useRoutes(routes)
  return (
    <>
     <Toaster />
           
    </>
  )
}

export default App
