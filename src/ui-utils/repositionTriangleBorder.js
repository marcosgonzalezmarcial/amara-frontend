export const repositionTriangleBorder = () => {
  let root = document.querySelector(":root");

  let triangleBorderEl = document.querySelector(
    "button.header-action-btn ion-icon[name='cart-outline']"
  );

  root.style.setProperty(
    "--triangle-border-left",
    `${Math.round(triangleBorderEl.getBoundingClientRect().left) + 4}px`
  );
};
