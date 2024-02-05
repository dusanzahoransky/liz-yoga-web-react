import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import GroupsInPerson from "./components/GroupsInPerson";
import React from "react";
import GroupsOnline from "./components/GroupsOnline";
import PrivateInPerson from "./components/PrivateInPerson";
import WorkshopOnline from "./components/WorkshopOnline";
import PrivateOnline from "./components/PrivateOnline";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DataDeletionInstructions from "./components/DataDeletionInstructions";
import WorkshopInPerson from "./components/WorkshopInPerson";
import SessionEspecial from "./components/SessionEspecial";
import ErrorPage from "./components/ErrorPage";
import './App.css'
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import WomenDay from "./components/WomenDay";
import RetreatBaliSept2024 from "./components/RetreatBaliSept2024";

function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/private-online' element={<PrivateOnline/>}/>
              <Route path='/groups-online' element={<GroupsOnline/>}/>
              <Route path='/workshop-online' element={<WorkshopOnline/>}/>
              <Route path='/private-in-person' element={<PrivateInPerson/>}/>
              <Route path='/groups-in-person' element={<GroupsInPerson/>}/>
              <Route path='/workshop-in-person' element={<WorkshopInPerson/>}/>
              <Route path='/session-especial' element={<SessionEspecial/>}/>
              <Route path='/women-day' element={<WomenDay/>}/>
              <Route path='/retreat-bali-sept-24' element={<RetreatBaliSept2024/>}/>
              <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
              <Route path='/data-deletion-instructions' element={<DataDeletionInstructions/>}/>
              <Route path='/gallery' element={<Gallery/>}/>
              <Route path='/error' element={<ErrorPage/>}/>
          </Routes>
      </>
  );
}

export default App;
