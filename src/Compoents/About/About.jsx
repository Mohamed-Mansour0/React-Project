import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./../../index.css";
import "./About.css"; 


export default function About() { const [movies, setMovies] = useState([]);

  useEffect(()=>{
getMovies()
  },[]);

  async function getMovies(){
    let{data} =await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=e4c1d92fa1b07a7d266e5877c0b3ee29&page=1'
    );
    console.log(data.results);
    setMovies(data.results);
  }



  return (

    <>
      
   <div className="container mx-auto">

    <div className="flex flex-wrap">
      {movies.map((movie)=> <div className="w1/3" key={movie.id}>
        <img className='w-full' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        <p>{movie.title}</p>
        </div>) }
    </div>
   </div>
 
    </>
  )
}
