import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import GroupsInPerson from "./components/GroupsInPerson";
import React from "react";
import GroupsOnline from "./components/GroupsOnline";

function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/private-online' element={<Home/>}/>
              <Route path='/groups-online' element={<GroupsOnline/>}/>
              <Route path='/poses-online' element={<Home/>}/>
              <Route path='/private-in-person' element={<Home/>}/>
              <Route path='/groups-in-person' element={<GroupsInPerson/>}/>
          </Routes>
      </>
  );
}

export default App;
