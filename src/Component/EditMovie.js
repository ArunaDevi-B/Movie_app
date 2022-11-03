import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./Global";
import { useParams } from "react-router-dom";


export function EditMovie() {
  const { id } = useParams();
  // const movie = movieList[movieid];
  const [movie, setMovie] = useState(null)
  useEffect(()=>{
    fetch(`${API}/movies/${id}`, {
      method:"GET",
    })
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv))
  },[])
  
  return movie ? <EditMovieForm movie={movie}/> : "loading...";
   
  
}

function EditMovieForm({ movie }){
  const [title, setTitle] = useState(movie.title);
  const [src, setSrc] = useState(movie.src);
  const [rating, setRating] = useState(movie.rating);
  const [description, setDescription] = useState(movie.description);
  const [trailer, setTrailer] = useState(movie.trailer);
  const Navigate = useNavigate()

  return(
    <div>
    <div className="add-movie-form">
      <TextField value={title}
        onChange={(event) => setTitle(event.target.value)}
        label="Movie Name"
        variant="standard" />

      <TextField value={src}
        onChange={(event) => setSrc(event.target.value)}
        label="Movie src"
        variant="standard" />

      <TextField value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="Movie Rating"
        variant="standard" />

      <TextField value={description}
        onChange={(event) => setDescription(event.target.value)}
        label="Movie Description"
        variant="standard" />

      <TextField value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="Movie Trailer"
        variant="standard" />
    </div>
    {/* newMovie = object */}

    <Button
      className="add-movie-btn"
      onClick={() => {
        const updatedMovie = {
          src: src,
          title: title,
          rating: rating,
          description: description,
          trailer: trailer,
        };
        fetch(`${API}/movies/${movie.id}`, {
          method:"PUT",
          body: JSON.stringify(updatedMovie),
          headers:{
            "Content-Type": "application/json",
          }

        }).then((data)=>data.json()).then(()=>Navigate("/movies"))
        // setMovieList([...movieList, newMovie]);
        
       }}
      variant="contained"
    >
      Save
    </Button>
  </div>
  )
}