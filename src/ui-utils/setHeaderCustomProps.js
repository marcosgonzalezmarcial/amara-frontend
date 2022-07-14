export const setHeaderCustomProps = () => {
  const root = document.querySelector(":root");
  const header = document.querySelector("header");

  if (!!header) {
    root.style.setProperty(
      "--triangle-border-top",
      `${header.offsetHeight - 4}px`
    );

    root.style.setProperty("--header-height", `${header.offsetHeight}px`);
  }

  // if (window.innerWidth > 991) {
  //   root.style.setProperty("--header-height", `61px`);
  // } else {
  //   root.style.setProperty("--header-height", `50px`);
  // }
};
