import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {  imageUrl, LatestMovies } from '../../Constants/Constants'
import { Card } from 'react-bootstrap'

function LatestMovie() {

  const [latestMovies, setLatestMovies] = useState([])

  useEffect(() => {
    axios.get(LatestMovies).then((value) => {
      console.log(value.data.results)
      setLatestMovies(value.data.results)
    },[])
  })
  return (
    <div>
      <h2 className='titles'>Latest Movies</h2>
    <div id='container-main' className='container-fluid'>
    <div id='row' className='row row-cols-4 g-2'>
      {latestMovies.map((event) => {
      return(
        <Card className='col-md-3 float-left'>
                  <Card.Img id='card-img' variant="top" src={`${imageUrl + event.backdrop_path}`} />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                  </Card.Body>
                </Card>
      )
        
      })}
     
      </div>
      </div>
    </div>
  )
}

export default LatestMovie