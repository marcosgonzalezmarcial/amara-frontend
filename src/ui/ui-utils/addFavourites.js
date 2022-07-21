export const addFavourites = () => {
  const heartIconWrappers = [
    ...document.querySelectorAll(".heart-icon-wrapper")
  ];
  console.log(heartIconWrappers);

  heartIconWrappers.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.children[0].classList.contains("heart-icon")) {
        e.target.children[0].classList.toggle("heart-icon-hide");
        e.target.children[1].classList.toggle("heart-icon-filled-show");
      }
    });
  });
};
