import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageUrl, ComedyMovies } from '../../Constants/Constants'
import { Card } from 'react-bootstrap'

function ComedyMovie() {

  const [comicMovies, setComicMovies] = useState([])

  useEffect(() => {
    axios.get(ComedyMovies).then((value) => {
      console.log(value.data.results)
      setComicMovies(value.data.results)
    })
  })

  return (
    <div>
      <h2 className='titles'>Comedy Movies</h2>
   
    <div id='container-main' className='container-fluid'>
      <div id='row' className='row row-cols-4 g-2'>
      {comicMovies.map((event) => {
       
        return(
          <Card className='col-md-3 float-left'>
                  <Card.Img id='card-img' variant="top" src={`${imageUrl + event.backdrop_path}`} />
                  <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                  </Card.Body>
                </Card>
        )
      })}
      <div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ComedyMovie