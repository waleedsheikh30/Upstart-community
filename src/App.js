import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Logo from './components/logo';
import './App.css';
import Aboutpage from './pages/aboutpage';
import Communitypage from './pages/communitypage';
import Blogpage from './pages/blogpage';
import Contactpage from './pages/contactpage';
import Error from './pages/error';

const App = () => {
  return (
    <Router>
    <div>
      <Logo/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/about" element={<Aboutpage />}/>
    <Route path="/community" element={<Communitypage />}/>
    <Route path="/blog" element={<Blogpage />}/>
    <Route path="/contact" element={<Contactpage />}/>
    <Route path="*" element={<Error />}/>
    </Routes>
    </div>
    </Router>
  )
}

export default App