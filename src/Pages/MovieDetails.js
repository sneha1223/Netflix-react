import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { movieContext,showMoviesContext} from '../App'
import { imageUrl } from '../Constants/Constants'


function MovieDetails() {
    const {id} = useParams()
    const [showDetails,setShowDetails] = useContext(showMoviesContext)

    useEffect(()=>{
        setShowDetails(false)
   },[showDetails])

    const [movieUrl,setMovieUrl] = useContext(movieContext)
    console.log(id);
    console.log(movieUrl);

    const detailData = movieUrl[id]
    console.log(detailData);
  return (
    <div>
         {detailData && (
            <img className='detail-img' src={imageUrl + detailData.backdrop_path} alt='img' style={{ height: "35rem", width: "45rem" }}>
            </img>
        )}
        <h1 style={{fontFamily: "cursive" , fontSize: "3rem"}}>{detailData.title || detailData.name}</h1>
        <p style={{fontSize: "2rem",fontFamily: "cursive"}}>{detailData.overview}</p>
    </div>
  )
}

export default MovieDetails