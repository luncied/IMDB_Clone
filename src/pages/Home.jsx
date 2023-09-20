import { useState, useEffect } from "react"
function Home() {

  const [shows, setShows] = useState([]);
  const url = "https://api.tvmaze.com/shows";

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setShows(json)
    };
    fetchData()
  }, [url]);

  console.log(shows);

  return (
    <></>
  )
}

export default Home