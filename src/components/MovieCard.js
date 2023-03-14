import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import noImage from "../assets/images/noImage.png";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/movie/${id}`);
  };
  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <div
      onClick={() => navigateToDetails(movie.id)}
      className="relative my-1 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <img
        src={movie.poster_path ? img_path + movie.poster_path : noImage}
        alt=""
        className="rounded-lg h-[230px] md:h-[300px] w-[350px] md:w-[400px] object-cover"
      />
      <p className="bg-[#feda6a] rounded-md px-2 py-1 text-center absolute top-2 text-sm flex items-center font-semibold text-black">
        <FaStar className="inline mx-2" size={18} /> {movie.vote_average}
      </p>
      <div className="flex justify-center items-center bg-semiblack h-10 w-full absolute bottom-1 ">
        <p
          className={
            movie?.title?.length > 25
              ? "px-2 py-1 text-white text-center text-sm font-semibold"
              : "px-2 py-1 text-white text-center text-lg font-semibold"
          }
        >
          {movie.name ? movie.name : movie.title}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
