import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import PageHeader from '../components/PageHeader.jsx'
import PageContent from '../components/PageContent.jsx'

function ShowDetail() {
  const [show, setShow] = useState();
  const { id } = useParams();
  const url = `https://api.tvmaze.com/shows/${id}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(err => console.error(err))
  }, [url])

  // console.log(id)
  console.log(show)
  if (!show) {
    return <div>We could not find what your searching... :c</div>
  }

  return (
    <>
      <PageHeader show={show}/>
    </>
  )
}

export default ShowDetail;
