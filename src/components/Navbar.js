import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
function Navbar({ handleSearch, setMovieType, setSeachText }) {
  return (
    <div className="navbar text-[#feda6a] my-4 border-b-2 border-b-[rgb(212,212,220)]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content font-bold mt-3 p-2 shadow bg-[#2b2b2c]"
          >
            <li className="pr-6">
              <NavLink to="/trending">Trending</NavLink>
            </li>
            <li className="pr-6" tabIndex={0}>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/tv-series">TV Series</NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="font-bold text-3xl text-[#feda6a] md:block hidden font-patua"
        >
          Movie Buzz
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex px-1 font-bold uppercase font-patua">
          <li className="pr-6">
            <NavLink to="/trending">Trending</NavLink>
          </li>
          <li className="pr-6" tabIndex={0}>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink to="/tv-series">TV Series</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end font-patua">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl pt-2 text-[#feda6a] block md:hidden rounded-md"
        >
          Movie Buzz
        </Link>
        <div>
          <Link
            to="/search"
            className="form-control border border-[#feda6a] rounded-sm hidden  w-68 md:flex justify-between"
          >
            <div className="flex px-4 items-center">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 bg-[#1d1e22] outline-none placeholder:text-[#feda6a] block"
                onChange={(e) => setSeachText(e.target.value)}
              />
              <select
                onChange={(e) => setMovieType(e.target.value)}
                className=" bg-[#1d1e22]  outline-none block  px-4 placeholder:text-[#feda6a]"
              >
                <option defaultValue required>
                  Type
                </option>
                <option>movie</option>
                <option>tv</option>
              </select>
              <button onClick={handleSearch} type="">
                <ImSearch size={24} className="mx-2" />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
