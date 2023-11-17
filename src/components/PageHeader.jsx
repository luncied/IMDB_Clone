import "../styles/PageHeader.css";

function PageHeader({ show }) {
  const { name, premiered, ended, runtime, image, summary, genres, rating } = show

  const showPremieredYear = new Date(premiered).getFullYear()
  const showEndYear = ended ? new Date(ended).getFullYear() : ended

  return (
    <div className= 'tw-bg-gradient-to-r tw-from-stone-900  tw-via-yellow-700  tw-to-stone-900 text-white tw-py-5 tw-px-8 tw-flex tw-justify-self-center tw-justify-center'>
        <div className="tw-max-w-6xl">
            <section className="legend-container tw-container tw-pb-7">
                <h1>{name}</h1>
                <div className="tw-flex tw-justify-between sm:tw-justify-items-stretch">
                    <div>
                        <span>{showPremieredYear.toString()} - {showEndYear ?? ''}</span>
                        <span>{' '}&#183;{' '}</span>
                        <span>{runtime}min</span>
                    </div>
                    <div>
                        <span className="tw-ps-14 tw-text-xl">
                            Rating: <i className="bi bi-star-fill"></i> <span className="tw-text-xl tw-font-bold">{rating.average}</span>
                        </span>
                        <span>/10</span>
                    </div>
                </div>
            </section>

            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2">
                <section className="md:tw-w-2/3 tw-justify-self-center">
                    <img src={image.original} alt="show-image" className="tw-w-full tw-max-w-sm tw-justify-self-center tw-pb-8" />
                </section>
                <section className="tw-w-auto tw-grid tw-grid-rows-2 tw-max-w-full xl:tw-w-auto">
                    <div className="">
                        <h3 className="tw-font-bold tw-text-2xl">
                            Synopsis
                        </h3>
                        <p className="tw-text-lg">{summary.replace('<p>', '').replace('</p>', '').replace('<b>', '').replace('</b>', '')}</p>
                    </div>
                    <div className="tw-container tw-flex tw-py-2 tw-justify-between tw-h-1/6 tw-justify-self-end">
                        <div className="tw-justify-self-end">
                            {
                                genres.map(genre => (
                                    <span key={genre} className="badge rounded-pill border border-warning tw-mx-1 tw-px-4">{genre}</span>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>

        </div>
    </div>
  )
}

export default PageHeader
