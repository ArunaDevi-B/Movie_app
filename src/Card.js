import React from "react";
import { Likedislike} from "./Likedislike"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { API } from "./Global";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';


function Card({movie, id }){
    const getMovies=()=>{
        fetch(`${API}/movies`, {
          method:"GET",
        })
        .then((data)=>data.json())
        .then((mvs)=>setMovieList(mvs))
      }
    
      useEffect(()=>getMovies(),[]);
      const navigate = useNavigate()
    
    // const movie={
    //        src:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG", 
    //        Title:"RRR", 
    //        Rating:"7.6", 
    //        Description:"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."

    // }
    const [show, setShow] = useState(true);
    const styles={
        color: movie.rating <7 ? "red" : "green"
    }
    // const summarystyles={
    //     display:show===true ? "block" : "none",
    // }
    const [movieList, setMovieList] = useState([]);

    return(
        <div className="Container">
            <img className="thumbnails" src={movie.src} alr={movie.title}/>
            <div className="title-rating">
            <h3 className="title">{movie.title}
            <IconButton 
                  aria-label="Toggle description"
            onClick={()=>setShow(!show)}>
            {show ? <ExpandLessIcon color="primary"/> : <ExpandMoreIcon color="primary" />} 
      </IconButton> <InfoIcon 
      color="primary"
       onClick={()=>navigate(`/movies/${id}`)}>
      </InfoIcon >
                    
     
            </h3>
           
            <p className="rating" style={styles}>⭐{movie.rating}</p>
            </div>
    
            {/* <p className="movie-summary" style={summarystyles}>{movie.Description}</p> */}
            {show ? <p className="movie-summary">{movie.description}</p> : "" }

            <Likedislike 
             deleteButton ={
                <IconButton 
                color="error"
                onClick={()=>{
                  fetch(`${API}/movies/${id}`, {
                     method:"DELETE",
                   })
                   .then(()=>getMovies())
                 }}>
              <DeleteIcon />
                 </IconButton>
               }
               editButton={
                <IconButton onClick={()=>navigate(`/movies/edit/${id}`)} >
                <EditIcon />
                </IconButton>
              }
            />

           {/* <div className="edit-delete">
            {deleteButton} {editButton}
            </div>  */}

        </div>
    )
}
export default Card;