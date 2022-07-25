// components
import { Main } from "./components/layouts/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TriangleBorder } from "./components/TriangleBorder";
// utils
import { addBorderScroll } from "./ui/ui-utils/addBorderScroll";
import { navbarMenuToggle } from "./ui/ui-utils/navbarMenuToggle";
import { setHeaderCustomProps } from "./ui/ui-utils/setHeaderCustomProps";
// import { addFavourites } from "./ui/ui-utils/addFavourites";
import { repositionTriangleBorder } from "./ui/ui-utils/repositionTriangleBorder";
import { paintProducts } from "./ui/ui-utils/paintProducts";

export const App = () => {
  const root = document.getElementById("root");

  root.appendChild(Header());
  root.appendChild(Main());
  root.appendChild(Footer());

  // paint products from api on first load
  paintProducts();

  // Inserting triangle border to the Header once the App is mounted
  document.querySelector("header").appendChild(TriangleBorder());

  // dynamically adding border to the header on scroll
  window.addEventListener("scroll", addBorderScroll);
  // setting header custop props dynamically
  window.addEventListener("resize", setHeaderCustomProps);
  // repositioning the element according to window width size
  window.addEventListener("resize", repositionTriangleBorder);
  // adding side-navbar menu toggle functionallity
  navbarMenuToggle();

  return root;
};
