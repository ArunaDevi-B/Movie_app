import { Routes, Route, Link, Navigate } from "react-router-dom";
import { React, useState } from "react";
import AddColor from "./AddColor";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import { AddMovie } from "./AddMovie";
import { MovieInfo } from "./MovieInfo";
import { Home } from "./Home";
import { NotFoundPage } from "./NotFoundPage";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from "react";
import { EditMovie } from "./EditMovie";
// const movieDetails = [
//   {
//     src: "https://flxt.tmsimg.com/assets/p9561344_p_v10_ab.jpg",
//     title: "Thuppakki",
//     rating: "8.8",
//     description:
//       "An army captain is on a mission to track down and destroy a terrorist gang and deactivate the sleeper cells under its command. Jagdish (Vijay), an army captain, is back in Mumbai for a holiday to be with his parents and two sisters. They want him to get married and finds a bride Nisha (Kajal Aggarwal) for him.",
//     trailer: "https://www.youtube.com/embed/s0O44Sn1hD4",
//   },
//   {
//     src: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//     title: "Ratatouille",
//     rating: "6",
//     description:
//       "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     trailer: "https://www.youtube.com/embed/c3sBBRxDAqk",
//   },
//   {
//     src: "https://i.ytimg.com/vi/wxriFa75CG0/movieposter_en.jpg",
//     title: "Bachelor",
//     rating: "8.8",
//     description:
//       "Bachelor is a 2021 India Tamil-language adult romantic court drama film written and directed by debutant Sathish Selvakumar. Produced by G.",
//     trailer: "https://www.youtube.com/embed/nPAthjZdBUY",
//   },
//   {
//     src: "https://stringfixer.com/files/101199071.jpg",
//     title: "Theeran",
//     rating: "8",
//     description:
//       "Based on Operation Bawaria of Tamilnadu Police Department. In this film based on true incidents, Theeran, a police officer is entrusted with the task to solve the mystery behind a series of murders and burglaries. The only clues left behind are the fingerprints of the culprits. How he solves the case, forms the crux.",
//     trailer: "https://www.youtube.com/embed/t3a4gmUfi1c",
//   },
//   {
//     src: "https://fight-library.com/wp-content/uploads/2021/04/img_4571.jpg",
//     title: "The Karate Kid",
//     rating: "7",
//     description:
//       "The Karate Kid follows Daniel LaRusso (Macchio), a teenager taught karate by Mr. Miyagi (Morita) to help defend himself and compete in a tournament against his bullies, one of whom is Johnny Lawrence (Zabka), the ex-boyfriend of his love interest Ali Mills (Shue).",
//     trailer: "https://www.youtube.com/embed/XY8amUImEu0",
//   },
//   {
//     src: "https://i.pinimg.com/474x/4f/3b/da/4f3bda97431cd17ddecb05605952c3fc.jpg",
//     title: "Kaakha Kaakha",
//     rating: "7.6",
//     description:
//       "Kaakha Kaakha movie is all about Anbuchelvan (Surya) who is part of a group of four police officers who work battling organized crime in Chennai. Violent and laconic, he finds little patience for a personal life, until he turns hero in the eyes of schoolteacher Maya (Jyothika), and embarks on a little romance.",
//     trailer: "https://www.youtube.com/embed/cTNg0sa-gBs",
//   },
//   {
//     src: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//     title: "No Country for Old Men",
//     rating: "6.5",
//     description:
//       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     trailer: "https://www.youtube.com/embed/38A__WT3-o0",
//   },
//   {
//     src: "https://d229kpbsb5jevy.cloudfront.net/firstshows/content/common/movie/images/custattr-movie-movie-thumbnail-2x3-movie-ho3yr9gydj8.jpeg",
//     title: "Kaththi",
//     rating: "9",
//     description:
//       "A case of mistaken identity embroils an escaped convict in a fight against a large corporation intent on seizing a village's land. A multinational company tries to forcefully take over a village that was once a fertile agricultural land to make way for its commercial projects.",
//     trailer: "https://www.youtube.com/embed/bMf0IyzyKt4",
//   },
//   {
//     src: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//     title: "Jai Bhim",
//     rating: "8.8",
//     description:
//       "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//     trailer: "https://www.youtube.com/embed/pVOd8HAQQZM",
//   },
//   {
//     src: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     title: "The Avengers",
//     rating: "6.5",
//     description:
//       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//     trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
//   },
//   {
//     src: "https://wallpapercave.com/wp/wp4871559.jpg",
//     title: "Kaithi",
//     rating: "7",
//     description:
//       "Prisoner) is a 2019 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj. It is produced by S. R. Prakashbabu and S. R.",
//     trailer: "https://www.youtube.com/embed/g79CvhHaj5I",
//   },
//   {
//     src: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//     title: "Interstellar",
//     rating: "6.8",
//     description:
//       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     trailer: "https://www.youtube.com/embed/2LqzF5WauAw",
//   },
//   {
//     src: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//     title: "Baahubali",
//     rating: "7.9",
//     description:
//       "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     trailer: "https://www.youtube.com/embed/uNoU1eR84Kw",
//   },
//   {
//     src: "https://www.commonsensemedia.org/sites/default/files/styles/ratio_2_3_medium/public/product-images/csm-movie/iron-man-2-poster-min.jpg",
//     title: "Iron man 2",
//     rating: "6.5",
//     description:
//       "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     trailer: "https://www.youtube.com/embed/nS8aKzfIyGY",
//   },
//   {
//     src: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//     title: "RRR",
//     rating: "7",
//     description:
//       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     trailer: "https://www.youtube.com/embed/oO8TTM2FgIA",
//   },
// ];
const App = () => {
  //Lifting the state up
  const [movieList, setMovieList] = useState([]);
  const navigate= useNavigate();
  const [themeMode, setThemeMode] = useState("dark");

  // useEffect(()=>{
  //   fetch("https://62cbb33e3e924a01286a67a0.mockapi.io/movies")
  //   .then((data)=>data.json())
  //   .then((mvs)=>console.log(mvs))
  // },[])

 

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="App">
      {/* <nav>
        <ul>
          <li>
            link tag helps to change to the page without refreshing the page whereas ancher tag will refresh the page 
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/colors">Color-game</Link>
          </li>
          <li>
            <Link to="/movie/add">Add-movie</Link>
          </li>
        </ul>
      </nav> */}
      <AppBar position="static">
      <Toolbar>
        <Button color="inherit"
        onClick={()=> navigate("/")}>Home</Button>
        <Button color="inherit"
        onClick={()=>navigate("/movies")}>Movies</Button>
        <Button color="inherit"
        onClick={()=> navigate("/movie/add")} >Add Movie</Button>
        {/* <Button color="inherit"
        onClick={()=> navigate("/colors")} >Color Game</Button> */}
        <Button className="theme-btn"
        color="inherit"
        startIcon = {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        onClick={()=> setThemeMode(themeMode == "dark" ? "light" : "dark")} >{themeMode =="dark" ? "Light" : "Dark"} Mode</Button>
       </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList/>} />
        <Route path="/movies/:id" element={<MovieInfo />}/>
        <Route path="/movie/add" element={<AddMovie />}/>
        <Route path="/movies/edit/:id" element={<EditMovie />}/>
        <Route path="/colors" element={<AddColor />} />
        {/* <Route path="/films" element={<Navigate replace to="/movies" />}  />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/*" element={<Navigate replace to="/404" />} /> */}
        
      </Routes>
      {/* <movieDetails /> */}
    </div>
    </ThemeProvider>

  );
};

export default App;


