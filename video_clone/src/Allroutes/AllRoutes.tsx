import React from 'react'
import HomePage from '../pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../common/Navbar/Navbar';

const AllRoutes: React.FC = () => {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    );
  };

export default AllRoutes
