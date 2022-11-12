import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// importing pages
import Home from './components/pages/Home'
import Trending from './components/pages/Trending'
import New from './components/pages/New'
import Popular from './components/pages/Popular'
import Categorie from './components/pages/Categorie'
// end importing pages

import './App.css';
import Nav from './components/header/Navbar'
function App() {
  return (
    <Router>
        <div className='container g-0'>
            <Nav />
            <div className='mt-3'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/New' element={<New/>} />
              <Route path='/Popular' element={<Popular/>} />
              <Route path='/Trending' element={<Trending/>} />
              <Route path='/Categorie' element={<Categorie/>} />
            </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;
