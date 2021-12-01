import React, { Component,useState }from 'react';
import Header from '../../common/header/Header';
import Login from '../login/Login';
import './Home.css';
import {GridList,GridListTile} from '@material-ui/core';
const Home = () => {

 const poster_url=[
    {
        "id": 1,
        "title": "Header First",
        "description": "Description First",
        "image": "https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
      },
      {
        "id": 2,
        "title": "Header First",
        "description": "Description First",
        "image": "https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
      },
      {
        "id": 3,
        "title": "Header First",
        "description": "Description First",
        "image": "https://image.tmdb.org/t/p/w500/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg"
      },
      {
        "id": 4,
        "title": "Header First",
        "description": "Description First",
        "image": "https://image.tmdb.org/t/p/w500/lSEr1nphZuCqXli3VziIgCI8Ivf.jpg"
      },
      {
        "id": 5,
        "title": "Header First",
        "description": "Description First",
        "image": "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg"
      },
      {
        "id": 6,
        "title": "Header First",
        "description": "Description First",
        "image": "https://image.tmdb.org/t/p/w500/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg"
      }
    
 ]
   
    return(
        
        <>
         <Header></Header>
         <div className="upMovies">
          <p className="upText">Upcoming Movies</p>
         </div>
         <div className="root">
         <GridList className="gridList"  cols={2.5}>
            {poster_url.map((data)=>(
                <GridListTile key={data.id}>
                    <img src={data.image} alt={data.title}  />
                </GridListTile>
            ))}
         </GridList>
         </div>

        </>

    );
    
}

export default Home;