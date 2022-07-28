import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
    return (
        <div className="App">

            <BrowserRouter>

                <header>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/countries">Countries</Link>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/countries" element={<Countries />} />
                    <Route path="/country/:name" element={<Country />} />
                </Routes>

            </BrowserRouter>

        </div>

    );
}

export default App;
