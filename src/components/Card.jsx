import { Link } from 'react'
import '../styles/Card.css'

function Card({ show }) {

  const { ended, genres, id, image, laguage, name, premiered, rating, status, summary } = show

  return (
    <div className='mb-4 tw-w-40 tw-w-sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/6' key={id}>
      <div className='card'>
        <img src={image.medium} alt={name} className='portrait tw-rounded-md'/>
        <div className='card-body tw-text-center tw-capitalize tw-truncate tw-text-sm'>
          {name}
          {/* <Link>
            <h4 className='card-title'>{name}</h4>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Card
