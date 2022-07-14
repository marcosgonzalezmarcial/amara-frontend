import { Article } from "./Article";

export const Main = () => {
  let main = document.createElement("main");
  main.appendChild(Article());

  return main;
};
