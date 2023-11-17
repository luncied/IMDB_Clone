import { useState, useEffect } from "react"
import Card from "../components/Card"
import Filters from "../components/Filters"
import sortNames from '../helpers/sortNames'

function Home({ query, setQuery }) {
  const url = "https://api.tvmaze.com/shows";
  const [shows, setShows] = useState([]);
  const [filShows, setFilShows] = useState([]);
  const [sortName, setSortName] = useState('');
  const [sortGen, setSortGen] = useState('');
  const [sortRat, setSortRat] = useState('');

  const genres = Array.from(new Set(shows.map(show => show.genres).flat(1)))
  const ratings = Array.from(new Set(shows.map(show => Math.round(show.rating.average))))

  function handleSort(e) {
    if (e.target.id === 'name-sort') {
      return setSortName(e.target.value) 
    }
    if (e.target.id === 'genre-sort') {
      return setSortGen(e.target.value)
    }
    if (e.target.id === 'rating-sort') {
      return setSortRat(e.target.value)
    }
  }

  useEffect(() => {
    /* Obtiene los datos de la API y las guarda en "shows" */
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setShows(json)
    }
    fetchData()
  }, [url]);

  useEffect(() => {
    /* Guarda los shows que se buscan por nombre en el form y los guarda como una lista en "filShows" */
    setFilShows(shows.filter(show => {
      return show.name.toLowerCase().includes(query.toLowerCase())
    }))
  }, [shows, query])

  useEffect(() => {
    if (sortName == "Asc") {
      return setSortName(sortNames(filShows))
    }
    if (sortName == "Desc") {
      return setSortName(sortNames(filShows, true))
    }
    if (sortName == "default") {
      setFilShows(shows.filter(show => {
        return show.name.toLowerCase().includes(query.toLowerCase())
      }))
      return setSortName('')
    }
    }, [sortName] )

  useEffect(() => {
    if(sortGen == "default") {
      setFilShows(shows.filter(show => {
        return show.name.toLowerCase().includes(query.toLowerCase())
      }))
      return setSortName('')
    }
    setFilShows(shows.filter(show => { return show.genres.includes(sortGen)}));
    }, [sortGen])

  useEffect(() => {
    if(sortRat == "default") {
      setFilShows(shows.filter(show => {
        return show.name.toLowerCase().includes(query.toLowerCase());
      }));
      return setSortName('');
    }
    setFilShows(shows.filter(show => { if(Number(sortRat) === Math.round(show.rating.average)){return show}}));
    }, [sortRat])

  useEffect(() => {
      // console.log(filShows)
  }, [filShows])

  return (
    <>
      <div className="container text-center my-4">
        <div className="container d-flex my-5 justify-content-between">
          <Filters
            genres={genres}
            ratings={ratings}
            // setSortName={setSortName}
            // setSortGen={setSortGen}
            // setSortRat={setSortRat}
            handleSort={handleSort}
          />
        </div>
        <div className="row justify-content-center">
          {
            filShows.map(show => (
              <Card
                key={shows.id}
                show={show}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home;