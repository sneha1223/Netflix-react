import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY ,imageUrl} from '../../Constants/Constants'

function Banner() {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((value) => {
      console.log(value.data.results[0])
      setMovie(value.data.results[Math.floor(Math.random() * value.data.results.length - 1)]);
    })
  }, [])


  return (
    <div
     style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
      <div className='content'>
        <div>
        <h1 className='title'>{movie ? movie.name || movie.title : ""}</h1>
        </div>
        <div className='banner-button'>
        <button>Play</button>
        <button>My List</button>
        </div>
        <h2 className='description'>{movie ? movie.overview : ""} </h2>
      </div>
    </div>


  )
}

export default Banner