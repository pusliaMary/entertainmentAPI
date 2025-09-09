import { useState } from 'react'
import './App.css'
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


import { BoredomFighting } from './BoredomFighting'
import { GetInsulted } from './GetInsulted'
import { RecipesSearching } from './RecipesSearching'




function App() {
  

  return <Router> 

    <nav className='nav'>
      <Link to = "/BoredomFighting" className="link">Boredom fighting</Link>
      <Link to = "/GetInsulted" className="link">Get insulted</Link>
      <Link to = "/RecipesSearching" className="link">Recipes searching</Link>
    </nav>

    <Routes>
      <Route path="/BoredomFighting" element={<BoredomFighting />} />
      <Route path="/GetInsulted" element={<GetInsulted />} />
      <Route path="/RecipesSearching" element={<RecipesSearching />} />
    </Routes>

  </Router>
    
  
}

export default App
