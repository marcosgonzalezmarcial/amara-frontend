export const repositionTriangleBorder = () => {
  const root = document.querySelector(":root");

  const badgeRef = document.querySelector(".btn-badge");

  //this block of code fixes a temporary bug when rendering the DOM
  let badgeRefPos;
  if (badgeRef) {
    badgeRefPos = badgeRef.getBoundingClientRect().left;
  }

  root.style.setProperty(
    "--triangle-border-left",
    `${Math.round(badgeRefPos - 6.8)}px`
  );
};
