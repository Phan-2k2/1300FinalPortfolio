import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './MainPage/MainPage';
import FooterArea from "./MainPage/FooterArea/FooterArea";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ResponsiveRedesign from "./ResponsiveRedesign/ResponsiveRedesign";
import Development from "./Development/Development";
import PersonasStoryboarding from "./PersonasStoryboarding/PersonasStoryboarding";
import IterativeDesign from "./IterativeDesign/IterativeDesign";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/1300FinalPortfolio" element={<MainPage/>}/>
              <Route path="/personas-storyboarding" element={<PersonasStoryboarding/>}/>
              <Route path="/responsive-redesign" element={<ResponsiveRedesign/>}/>
              <Route path="/iterative-design" element={<IterativeDesign/>}/>
              <Route path="/development" element={<Development/>}/>
          </Routes>
          <FooterArea/>
      </BrowserRouter>
  </React.StrictMode>
);
