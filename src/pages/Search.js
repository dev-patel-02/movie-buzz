import React from "react";
import MovieCard from "../components/MovieCard";
import { ImWarning } from "react-icons/im";
import ReactDOM from "react-dom/client";
import { axe } from "@axe-core/react";

function Search({ content, error }) {
  return (
    <div className="h-screen">
      <div>
        <p className="text-xl md:text-3xl font-bold text-[#d4d4dc] py-8: ml-1">
          Searches Result
        </p>
        <div
          className={
            content.length === 0
              ? "text-center font-bold"
              : "grid md:grid-cols-6 grid-cols-2 gap-3 md:gap-5  mx-2"
          }
        >
          {error ? (
            <p className="text-red-400 px-4 w-full my-20 flex justify-center items-center md:text-xl">
              <ImWarning size={30} className="mx-4" /> {error}
            </p>
          ) : (
            content.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;


if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}