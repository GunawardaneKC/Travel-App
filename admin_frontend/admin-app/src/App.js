import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AddTours from './tourpage/addtours';
import TourData from './tourpage/tours';
import Accomadation from './Accmadation/page'
import Destination from './Destination/page'
import ClientMsg from './ClientMsg/page'
import Addnews from './News and Art/page'
import ArticleList from './News and Art/ArticleList'
import SignIn from './Login/page'

function Main() {
  const token = localStorage.getItem('token');

  if (!token) {
    return (
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    )
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/addtours" element={<AddTours />} />
        <Route path="/tourdata" element={<TourData />} />
        <Route path="/accomadation" element={<Accomadation />} />
        <Route path="/destina" element={<Destination />} />
        <Route path="/clientmsg" element={<ClientMsg />} />
        <Route path="/addnews" element={<Addnews />} />
        <Route path="/news" element={<ArticleList />} />
      </Routes>
    </>
  );
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
  }
}