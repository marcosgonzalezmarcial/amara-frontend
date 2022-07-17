export const TriangleBorder = () => {
  const cartBtnEl = document.querySelector("ion-icon[name='cart-outline']");
  const cartBtnPos = cartBtnEl.getBoundingClientRect().left;

  // setting triangle border position on first load
  document.documentElement.style.setProperty(
    "--triangle-border-left",
    `${Math.round(cartBtnPos) + 21}px`
  );

  const triangleBorder = '<div class="arrow"></div>';
  const triangleBorderTemplate = document.createElement("div");
  triangleBorderTemplate.innerHTML = `
      ${triangleBorder}
  `;

  return triangleBorderTemplate;
};
