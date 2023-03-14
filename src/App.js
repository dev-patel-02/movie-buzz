import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import Trending from "./pages/Trending";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Footer from "./components/Footer";
import Search from "./components/Search";
import axios from "axios";
// import { axe } from "@axe-core/react";

function App() {
  const [searchText, setSeachText] = useState("");
  const [movieType, setMovieType] = useState("");
  const [error, setError] = useState("");
  const [content, setContent] = useState([]);
  const handleSearch = async () => {
    try {
      if (searchText && movieType) {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/${
            movieType ? "tv" : "movie"
          }?api_key=b438eb3479c6e4729b05c73cbe88e602&language=en-US&query=${searchText}&page=${1}&include_adult=false`
        );
        setContent(data.results);
      } else {
        setError("Please Enter movie title and select a type");
      }
    } catch (error) {
      setError(error);
    }
    
  };
  return (
    <div className="container mx-auto text-[#d4d4dc] px-4 md:px-0">
      <Navbar
        handleSearch={handleSearch}
        setSeachText={setSeachText}
        setMovieType={setMovieType}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<TVSeries />} />
        <Route path="/search" element={<Search content={content}  error={error}/>} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// if (process.env.NODE_ENV !== "production") {
//   const axe = require("@axe-core/react");
//   axe(React, ReactDOM, 1000);
// }
