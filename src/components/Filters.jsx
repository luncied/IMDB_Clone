function Filters({ genres, ratings, handleSort }) {
// function Filters({ genres, ratings, setSortName, setSortGen, setSortRat }) {
  return (
    <>
      <select className="form-select tw-w-1/4" id="name-sort" defaultValue="default" aria-label="Filter Shows" onChange={handleSort}>
        <option value="default" selected>Nombre</option>
        <option value="Asc">Ascendente</option>
        <option value="Desc">Descendente</option>
      </select>
  
      <select className="form-select tw-w-1/4" id="genre-sort" defaultValue="default" aria-label="Filter Shows" onChange={handleSort}>
        <option value="default" selected>Genero</option>
        {genres.sort().map(( genre ) => {
          return ( 
            <option key={genre} value={genre}>{genre}</option>
            )
          })
        }
      </select>
  
      <select className="form-select tw-w-1/4" id="rating-sort" defaultValue="default" aria-label="Filter Shows" onChange={handleSort}>
        <option value="default" selected>Rating</option>
        {ratings.sort().map(( rating ) => {
          return ( 
            <option key={rating} value={rating}>{rating}</option>
            )
          })
        }
      </select>
    </>
  )
}

export default Filters