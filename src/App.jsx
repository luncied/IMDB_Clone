import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'
import { useState } from 'react';

function App () {
  const [query, setQuery] = useState('')

  function handleSearchSubmit(e) {
    e.preventDefault();
    setQuery(e.target.firstChild.value)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar
          handleSearchSubmit={handleSearchSubmit}
        />
        <RoutesIndex 
          query={query}
          setQuery={setQuery}
        /> {/* Este es el indice de las rutas, que según la ruta cargara cierta pagina */}
      </BrowserRouter>
    </>
  )
}

export default App
