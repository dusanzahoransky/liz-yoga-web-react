import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import GroupsInPerson from "./components/GroupsInPerson";
import React from "react";
import GroupsOnline from "./components/GroupsOnline";
import PrivateInPerson from "./components/PrivateInPerson";
import PosesOnline from "./components/PosesOnline";

function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/private-online' element={<Home/>}/>
              <Route path='/groups-online' element={<GroupsOnline/>}/>
              <Route path='/poses-online' element={<PosesOnline/>}/>
              <Route path='/private-in-person' element={<PrivateInPerson/>}/>
              <Route path='/groups-in-person' element={<GroupsInPerson/>}/>
          </Routes>
      </>
  );
}

export default App;
