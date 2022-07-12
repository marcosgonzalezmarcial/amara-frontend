/***********Building HTML DOM with javascript*********
 ******************************************************/

import { Main } from "./components/layouts/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  // dynamically adding border to the header on scroll
  const addBorderScroll = () => {
    const header = document.querySelector("header");
    window.innerWidth >= 768 && window.scrollY >= window.innerHeight - 60
      ? header.classList.add("scroll-border")
      : header.classList.remove("scroll-border");
  };
  window.onscroll = addBorderScroll;

  const App = document.getElementById("app");

  App.appendChild(Header());
  App.appendChild(Main());
  App.appendChild(Footer());

  return App;
};
