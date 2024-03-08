import React from 'react'
import HomePage from '../pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';

const AllRoutes: React.FC = () => {
    return (
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    );
  };

export default AllRoutes
