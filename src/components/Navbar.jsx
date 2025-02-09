import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";
import { FaSearch } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.query);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie Database</Link>
      </div>
      <div className="link-nav">
      <div className="navbar-menu">
        <div>
        <Link to="/">Popular</Link>
        </div>
        <div>
        <Link to="/top-rated">Top Rated</Link>
        </div>
        <div>
        <Link to="/upcoming">Upcoming</Link>
        </div>
      </div>
      <div className="navbar-search">
        <div className="search-container">
          <FaSearch className="search-icon"/>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        </div>        
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
