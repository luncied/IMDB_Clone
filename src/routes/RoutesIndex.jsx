import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
// import About from '../pages/About'
import ShowDetail from '../pages/ShowDetail'

function RoutesIndex ( {query, setQuery} ) {
  return (
    <Routes>
      <Route path='/' element={<Home query={query} setQuery={setQuery}/>} />
      {/* <Route path='/about' element={<About />} /> */}
      <Route path='/' element={<ShowDetail />} />
    </Routes>
  )
}

export default RoutesIndex
