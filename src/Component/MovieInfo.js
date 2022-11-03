import { useParams } from "react-router-dom";
import { React } from "react";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "./Global";

export function MovieInfo() {
  const { id } = useParams();
  // const movie = movieList[movieid];
  const [movie, setMovie] = useState({})
  useEffect(()=>{
    fetch(`${API}/movies/${id}`, {
      method:"GET",
    })
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv))
  },[])
  // console.log(movieList);
  const navigate=useNavigate()
  return (
    <div className="movie-info-page">
      <iframe width="100%" height="700" src={movie.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
      <div className="title-rating">
        <h3 className="title">{movie.title}</h3>
        <p className="rating">⭐{movie.rating}</p>
      </div>
      <p className="movie-summary">{movie.description}</p>
      <Button 
      onClick={()=>navigate(-1 )}
      variant="contained" startIcon={<ArrowBackIosIcon />}>
  Back
</Button>
    </div>
  );
}
