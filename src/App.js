import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Spinner from "./components/Spinner";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

const Topic = lazy(() => import('./pages/Topic'));
const Home = lazy(() => import('./pages/Home'));
const Preparation = lazy(() => import('./pages/Preparation'));


const App = () => {
  return (
    <Suspense fallback={loading()}>
      <Router>
        <Routes>
          <Route path="/topic" element={<Topic />} /> 
          <Route path="/prep" element={<Preparation />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

const loading = () =>{
  return ( <Spinner/> )
}

export default App;
