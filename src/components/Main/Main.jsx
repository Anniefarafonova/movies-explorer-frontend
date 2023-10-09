import React, { useState, useEffect, useContext } from "react";
import AboutProject from "../AboutProject/AboutProject";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import { Link } from "react-router-dom";
import "./Main.css";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

export default function Main({}) {
  return (
    <>
      <main className="main">
        {/* <Header /> */}
        <HeaderAuth />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}
