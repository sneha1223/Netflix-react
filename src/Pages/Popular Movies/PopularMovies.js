import React, { useContext } from 'react'
import './PopularMovies.css'
import { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageUrl } from '../../Constants/Constants'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { movieContext,showMoviesContext} from '../../App'

function PopularMovie({ url, title }) {
  
  const [popularMovies, setPopularMovies] = useState([])
  const [movieUrl,setMovieUrl] = useContext(movieContext)
  const [showDetails,setShowDetails] = useContext(showMoviesContext)
  useEffect(() => {
    setMovieUrl(popularMovies)
    setShowDetails(true)
  }, [popularMovies])

  useEffect(() => {
    axios.get(url).then((value) => {
      setPopularMovies(value.data.results)
    })
    console.log(popularMovies)
  }, [url])

  useEffect(() => {
    setMovieUrl(popularMovies)
  }, [popularMovies])
  console.log(movieUrl)
  return (
    <div>
      <h2 className='titles'>{title} </h2>
      <div>
        <div id='container-main' className='container-fluid'>
          <div id='row' className='row row-cols-4 g-2'>
            {popularMovies.map((obj, index) => {

              return (
                <Link to={`/details/${index}`}>
                  <Card id='card' className='col-md-3 float-left'>
                    <Card.Img id='card-img' variant="top" src={`${imageUrl + obj.backdrop_path}`} />
                    <Card.Body>
                      <Card.Title className='movie-title'>{obj.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularMovie




