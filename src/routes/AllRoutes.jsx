import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Gym from '../pages/Gym'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/'element={<Gym/>} />
    </Routes>
  )
}

export default AllRoutes