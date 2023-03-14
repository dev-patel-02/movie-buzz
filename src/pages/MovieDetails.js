import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Carousel from "../components/Carousel";
import noImage from "../assets/images/noImage.png";

function MovieDetails() {
  const [detail, setDetail] = useState();
  const [video, setVideo] = useState();
  const media_type = "movie";
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=b438eb3479c6e4729b05c73cbe88e602&language=en-US`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);
  let img_path = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b438eb3479c6e4729b05c73cbe88e602&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setVideo(data?.results[0]?.key));
  }, [id]);
  return (
    <div>
      <section className=" body-font overflow-hidden">
        <div className="container px-5 py-14 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full h-64 rounded"
              src={
                detail?.backdrop_path
                  ? `${img_path}/${detail?.backdrop_path}`
                  : noImage
              }
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-4 mt-6 lg:mt-0">
              <h2 className="text-2xl font-bold title-font  tracking-widest">
                {detail?.title}
              </h2>
              <p className="text-sm">{detail?.tagline}</p>
              <div className="flex my-4">
                <p className="bg-[#feda6a] rounded-md px-2 py-1 text-center text-sm flex items-center font-semibold text-black">
                  <FaStar className="inline mx-2" size={18} />{" "}
                  {detail?.vote_average}
                </p>
                <a
                  target="__blank"
                  href={`https://www.youtube.com/watch?v=${video}`}
                  className="bg-red-500 text-white font-semibold px-4 py-1 rounded-md ml-8"
                  type=""
                >
                  Watch the trailer
                </a>
              </div>
              <div className="flex">
                <p className="pr-10">Release Date : </p>{" "}
                <p className="pl-4">{detail?.release_date}.</p>
              </div>
              <div className="flex">
                <p className="pr-20">Runtime : </p>{" "}
                <p className="pl-3">{detail?.runtime} </p>
              </div>
              <div className="flex">
                <p className="pr-10">Total Reveneu : </p>{" "}
                <p className="pl-3">{detail?.revenue} USD.</p>
              </div>

              <p className="leading-relaxed">{detail?.overview}</p>
              <div>
                <Carousel id={id} media_type={media_type} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MovieDetails;