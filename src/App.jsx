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
import { useTranslation } from 'react-i18next';




function App() {
  
  const { i18n, t } = useTranslation();

  const toggleLang = ()=> {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return <Router> 
    <div>
      <h1>{t ('Welcome')}</h1>
      <button onClick={toggleLang}>{i18n.language === 'en' ? 'RU' : 'EN'}</button>
    </div>
    <nav className='nav'>
      <Link to = "/BoredomFighting" className="link">{t ('Boredom fighting')}</Link>
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
