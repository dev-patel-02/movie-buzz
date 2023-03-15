import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import apiConfig from './../utilities/apiConfig';

function TVSeries() {
  const [currentPage, setCurrentPage] = useState(1);

  const [trending, setTrending] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const url = `${apiConfig.baseUrl}/discover/tv?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}`;
  useEffect(() => {
    window.scroll(0, 0);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrending(data.results);
        setNumOfPages(data.total_pages);
      });
  }, [currentPage, url]);
  return (
    <div className="py-6">
      <div>
        <p className="text-xl md:text-3xl font-bold text-center text-[#d4d4dc] py-2 mb-10 ml-1 uppercase">
          EXPLORE Tv Series
        </p>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-3 md:gap-5  mx-2">
          {trending
            ?.map((movie) => <MovieCard movie={movie} key={movie.id} />)
            .slice(0, 18)}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Pagination
          totalPages={numOfPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default TVSeries;
