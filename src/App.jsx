
import { Toaster } from 'react-hot-toast'
import { useRoutes } from 'react-router-dom'
import routes from './Routes'
import Index from './Pages/Index/Index'



function App() {
  let router = useRoutes(routes)
  return (
    <>
     <Toaster />
          <Index />
    </>
  )
}

export default App
