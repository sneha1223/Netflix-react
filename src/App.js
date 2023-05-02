import React, { useState , createContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';

import { Routes, Router, Route } from 'react-router-dom';
import PopularMovie from './Pages/Popular Movies/PopularMovies';
import MovieDetails from './Pages/MovieDetails';

import { ComedyMovies, LatestMovies, PopularMovies } from './Constants/Constants';

const movieContext = createContext();
const showMoviesContext = createContext()

function App() {

  const [movie, setMovie] = useState()
  const [showDetails, setShowDetails] = useState(true)


  return (
    <div className="App">
      <showMoviesContext.Provider value={[showDetails, setShowDetails]} >
        <movieContext.Provider value={[movie, setMovie]}>
          
            {showDetails && true ? <Header/> : null}
            {showDetails && true ? <Banner/> : null}

          <Routes>
            <Route path='/details/:id' element={<MovieDetails />}></Route>

            <Route path='/popular' element={<PopularMovie url={PopularMovies} title='Popular Movies' />} ></Route>

            <Route path='/latest' element={<PopularMovie url={LatestMovies} title='Latest Movies' />}></Route>

            <Route path='/comic' element={<PopularMovie url={ComedyMovies} title='Comedy Movies' />} ></Route>
            </Routes>
           
        </movieContext.Provider>
      </showMoviesContext.Provider>


    </div>
  );
}

export default App;
export { movieContext, showMoviesContext} ;
