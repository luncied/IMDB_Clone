
function Navbar ( { handleSearchSubmit } ) {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light tw-bg-gray-900'>
        <div className='container-fluid'>
          <a className='navbar-brand tw-text-yellow-500 tw-font-bold hover:tw-text-white tw-duration-500' href='#'>IMDB</a>
          <button className='navbar-toggler navbar-dark tw-text-yellow-500 tw-font-bold hover:tw-text-white tw-duration-500' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link tw-text-yellow-500 tw-font-bold hover:tw-text-white tw-duration-500' aria-current='page' href='#'>Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link tw-text-yellow-500 tw-font-bold hover:tw-text-white tw-duration-500' href='#'>About</a>
              </li>
            </ul>
            <form className='d-flex' onSubmit={handleSearchSubmit}>
              <input className='form-control me-2' type='search' placeholder='Buscar Serie' aria-label='Search'/>
              <button className='btn btn-outline-warning tw-text-yellow-500 tw-font-bold hover:tw-text-white tw-duration-300' type='submit'>Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
