import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import React from "react";

function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/private-online' element={<Home/>}/>
              <Route path='/groups-online' element={<Home/>}/>
              <Route path='/poses-online' element={<Home/>}/>
              <Route path='/private-in-person' element={<Home/>}/>
              <Route path='/groups-in-person' element={<Home/>}/>
          </Routes>
      </>
  );
}

export default App;
