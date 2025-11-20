import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
  Navigate
} from 'react-router-dom';


import { BoredomFighting } from './BoredomFighting'
import { GetInsulted } from './GetInsulted'
import { RecipesSearching } from './RecipesSearching'
import { useTranslation } from 'react-i18next';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP)



function App() {
  
  const { i18n, t } = useTranslation();

  const toggleLang = ()=> {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  useGSAP(()=> {
    gsap.to('.link', {x:-150, duration:4,  stagger:1, ease:'bounce'})
  })

  return <Router> 
    <div className='heading'>
      <h1>{t ('Welcome')}</h1>
      <button onClick={toggleLang}>{i18n.language === 'en' ? 'RU' : 'EN'}</button>
    </div>

    <nav className='nav'> <Link to='/'></Link>
      <Link to = "/BoredomFighting" className="link">{t ('Boredom fighting')}</Link>
      <Link to = "/GetInsulted" className="link">{t ('Get insulted')}</Link>
      <Link to = "/RecipesSearching" className="link">{t ('Recipes searching')}</Link>
    </nav>

    <Routes> <Route path="/" element={<Navigate to='/BoredomFighting' replace/>} />
      <Route path="/BoredomFighting" element={<BoredomFighting lang={toggleLang}/>} />
      <Route path="/GetInsulted" element={<GetInsulted />} />
      <Route path="/RecipesSearching" element={<RecipesSearching />} />
    </Routes>

  </Router>
    
  
}

export default App
