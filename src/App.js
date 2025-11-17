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
import Profile from "./components/Profile";
import RetreatBaliSept2024 from "./components/RetreatBaliSept2024";
import MiniRetiroOutdoor from "./components/MiniRetiroOutdoor";
import SesionDeRelajacion from "./components/SesionDeRelajacion";
import RetreatBaliMayo2025 from "./components/RetreatBaliMayo2025";
import MiniRetiroNoviembre from "./components/MiniRetiroNoviembre";
import Raffle from "./components/Raffle";
import SesionRelajacionCuencos from "./components/SesionRelajacionCuencos";
import RetreatTailandiaOctubre2025 from "./components/RetreatTailandiaOctubre2025";
import RetreatTailandiaOctubre2025ForPdf from "./components/RetreatTailandiaOctubre2025ForPdf";
import MiniRetiroCamping from "./components/MiniRetiroCamping";
import RetreatTailandiaJunio2026 from "./components/RetreatTailandiaJunio2026";
import MiniRetiroDiciembre from "./components/MiniRetiroDiciembre";

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
              <Route path='/sesion-de-relajacion' element={<SesionDeRelajacion/>}/>
              <Route path='/sesion-relajacion-cuencos' element={<SesionRelajacionCuencos/>}/>
              <Route path='/medicina-al-alma' element={<MiniRetiroOutdoor/>}/>
              <Route path='/mini-retiro-outdoor' element={<MiniRetiroOutdoor/>}/>
              <Route path='/mini-retiro-noviembre' element={<MiniRetiroNoviembre/>}/>
              <Route path='/mini-retiro-camping' element={<MiniRetiroCamping/>}/>
              <Route path='/mini-retiro-diciembre' element={<MiniRetiroDiciembre/>}/>
              {/*<Route path='/retreat-bali-sept-24' element={<RetreatBaliSept2024/>}/>*/}
              {/*<Route path='/retreat-bali-private' element={<RetreatBaliMayo2025/>}/>*/}
              {/*<Route path='/retreat-bali-march-25' element={<RetreatBaliMayo2025/>}/>*/}
              {/*<Route path='/retreat-tailandia-octubre-25' element={<RetreatTailandiaOctubre2025/>}/>*/}
              <Route path='/retreat-tailandia-junio-26' element={<RetreatTailandiaJunio2026/>}/>
              {/*<Route path='/retreat-tailandia-octubre-25-pdf' element={<RetreatTailandiaOctubre2025ForPdf/>}/>*/}
              <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
              <Route path='/data-deletion-instructions' element={<DataDeletionInstructions/>}/>
              <Route path='/error' element={<ErrorPage/>}/>
              <Route path='/raffle' element={<Raffle/>}/>
          </Routes>
      </>
  );
}

export default App;
