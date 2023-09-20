import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'

function App() {

  return (
    <>
       <BrowserRouter>
        <Navbar />
        <RoutesIndex /> {/* Este es el indice de las rutas, que según la ruta cargara cierta pagina */}
      </BrowserRouter>     
    </>
  )
}

export default App
