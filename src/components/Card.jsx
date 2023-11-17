import { Link } from "react-router-dom";
import "../styles/Card.css";

function Card({ show }) {
  const {
    url,
    ended,
    genres,
    id,
    image,
    laguage,
    name,
    premiered,
    rating,
    status,
    summary,
  } = show;

  return (
    <div
      className="mb-4 tw-w-40 tw-w-sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/6"
      key={id}
    >
      <Link to={`/show/${id}`} className="tw-no-underline">
        <div className="card">
          <img
            src={image.medium}
            alt={name}
            className="portrait tw-rounded-md"
          />
          <div className="card-body tw-text-center tw-capitalize tw-truncate tw-text-sm card-title hover:tw-text-yellow-600">
            {name} 
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
