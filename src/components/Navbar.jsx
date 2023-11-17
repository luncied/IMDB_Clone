import { Link } from "react-router-dom";

function Navbar ({ handleSearchSubmit }) {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light tw-bg-gradient-to-tr tw-from-neutral-900 tw-to-neutral-800 tw-sticky tw-top-0 tw-z-50'>
        <div className='container-fluid'>
          <Link to={`/`} className='tw-no-underline'>
            <a className='navbar-brand tw-text-yellow-500 tw-font-bold hover:tw-text-white tw-duration-500' href='#'>IMDB</a>
          </Link>
          <button className='navbar-toggler navbar-dark tw-text-yellow-500 tw-font-bold hover:tw-text-white tw-duration-500' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <Link to={`/`} className='tw-no-underline nav-item'>
                <a className='nav-link tw-text-yellow-500 tw-font-bold hover:tw-text-white tw-duration-500' aria-current='page' href='#'>Home</a>
              </Link>
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
