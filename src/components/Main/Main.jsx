import React, { useState, useEffect, useContext } from "react";
import AboutProject from "../AboutProject/AboutProject";
import Header from "../Header/Header";
import HeaderBurger from "../HeaderBurger/HeaderBurger";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import { Link } from "react-router-dom";
import "./Main.css";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

export default function Main({ isOpen }) {
  return (
    <>
      <main className="main">
        <Preloader/>
        {/* <HeaderAuth />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer /> */}
      </main>
    </>
  );
}
