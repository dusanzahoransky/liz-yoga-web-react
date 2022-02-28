import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import GroupsInPerson from "./components/GroupsInPerson";
import React from "react";
import GroupsOnline from "./components/GroupsOnline";
import PrivateInPerson from "./components/PrivateInPerson";
import PosesOnline from "./components/PosesOnline";
import PrivateOnline from "./components/PrivateOnline";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DataDeletionInstructions from "./components/DataDeletionInstructions";

function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/private-online' element={<PrivateOnline/>}/>
              <Route path='/groups-online' element={<GroupsOnline/>}/>
              <Route path='/poses-online' element={<PosesOnline/>}/>
              <Route path='/private-in-person' element={<PrivateInPerson/>}/>
              <Route path='/groups-in-person' element={<GroupsInPerson/>}/>
              <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
              <Route path='/data-deletion-instructions' element={<DataDeletionInstructions/>}/>
          </Routes>
      </>
  );
}

export default App;
