// AllRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../Components/Home';
import MovieDetails from '../Components/MovieDetails';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={<App />} />
      <Route path='/home' element={<Home />} />
      <Route path='/movie/:id' element={<MovieDetails />} />
    </Routes>
  );
}

export default AllRoutes;
