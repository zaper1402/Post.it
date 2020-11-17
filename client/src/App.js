import React from 'react'
import Navbar from './components/NavBar'
import './App.css'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route path="/">
        
      </Route>
    </BrowserRouter>
  );
}

export default App;
