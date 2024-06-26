import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MyBrand</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/addtours">Add Tours</Link>
        <Link to="/tourdata">Tours</Link>
        <Link to="/accomadation">Accomadation</Link>
        <Link to="/destina">Destination</Link>
        <Link to="/clientmsg">Client Messages</Link>
        <Link to="/addnews">Add News</Link>
        <Link to="/news">News</Link>
      
      </div>
      <button onClick={() => { localStorage.removeItem('token'); window.location.reload(); }}
        className='bg-red-600 btn-sm mt-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
        >Logout</button>
    </nav>
  );
};

export default Navbar;



