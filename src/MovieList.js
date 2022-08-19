import { React } from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { API } from "./Global";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";



// const movieDetails = movieList;
export function MovieList() {
  const [movieList, setMovieList] = useState([]);
  
  const getMovies=()=>{
    fetch(`${API}/movies`, {
      method:"GET",
    })
    .then((data)=>data.json())
    .then((mvs)=>setMovieList(mvs))
  }

  useEffect(()=>getMovies(),[]);
  const navigate = useNavigate()

  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Card key={mv.id} movie={mv} id={mv.id} 
          //  deleteButton ={
          //   <IconButton 
          //   color="error"
          //   onClick={()=>{
          //     fetch(`${API}/movies/${mv.id}`, {
          //        method:"DELETE",
          //      }).then(()=>getMovies())
          //    }}>
          // <DeleteIcon />
          //    </IconButton>
          //  }
        //    editButton={
        //     <IconButton onClick={()=>navigate(`/movies/edit/${mv.id}`)}
        //       fetch(`${API}/movies/${mv.id}`, {
        //           method:"PUT",
        //         }).then(()=>getMovies())
        // }}>
        //   <EditIcon />
        //      </IconButton>
        //    }
          />
        ))}
      </div>
    </div>
  );
}
