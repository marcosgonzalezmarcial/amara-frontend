// components
import { Main } from "./components/layouts/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TriangleBorder } from "./components/TriangleBorder";
// utils
import { addBorderScroll } from "./ui-utils/addBorderScroll";
import { navbarMenuToggle } from "./ui-utils/navbarMenuToggle";
import { setHeaderCustomProps } from "./ui-utils/setHeaderCustomProps";
import { addFavourites } from "./ui-utils/addFavourites";

export const App = () => {
  const root = document.getElementById("root");

  root.appendChild(Header());
  root.appendChild(Main());
  root.appendChild(Footer());

  // Inserting triangle border to the Header once the App is mounted
  const header = document.querySelector("header");
  header.appendChild(TriangleBorder());

  // dynamically adding border to the header on scroll
  window.addEventListener("scroll", addBorderScroll);
  // setting header custop props dynamically
  window.addEventListener("resize", setHeaderCustomProps);
  // adding side-navbar menu toggle fucntionallity
  navbarMenuToggle();

  // add product to favorites logic
  addFavourites();

  return root;
};
