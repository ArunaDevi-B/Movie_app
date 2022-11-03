import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./Global";

export function AddMovie() {
  const [title, setTitle] = useState("");
  const [src, setSrc] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [trailer, setTrailer] = useState("");
  const Navigate = useNavigate()

  return (
    <div>
      <div>
        <div className="add-movie-form">
          <TextField
            onChange={(event) => setTitle(event.target.value)}
            label="Movie Name"
            variant="standard" />

          <TextField
            onChange={(event) => setSrc(event.target.value)}
            label="Movie src"
            variant="standard" />

          <TextField
            onChange={(event) => setRating(event.target.value)}
            label="Movie Rating"
            variant="standard" />

          <TextField
            onChange={(event) => setDescription(event.target.value)}
            label="Movie Description"
            variant="standard" />

          <TextField
            onChange={(event) => setTrailer(event.target.value)}
            label="Movie Trailer"
            variant="standard" />
        </div>
        {/* newMovie = object */}

        <Button
          className="add-movie-btn"
          onClick={() => {
            const newMovie = {
              src: src,
              title: title,
              rating: rating,
              description: description,
              trailer: trailer,
            };
            fetch(`${API}/movies`, {
              method:"POST",
              body: JSON.stringify(newMovie),
              headers:{
                "Content-Type": "application/json",
              }

            }).then((data)=>data.json()).then(()=>Navigate("/movies"))
            // setMovieList([...movieList, newMovie]);
            
           }}
          variant="contained"
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
}
