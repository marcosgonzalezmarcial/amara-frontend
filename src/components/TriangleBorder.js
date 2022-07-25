export const TriangleBorder = () => {
  const cartBtnEl = document.querySelector("ion-icon[name='cart-outline']");

  // setting triangle border position on first load
  if (!!cartBtnEl) {
    const cartBtnPos = cartBtnEl.getBoundingClientRect().left;
    document.documentElement.style.setProperty(
      "--triangle-border-left",
      `${Math.round(cartBtnPos) + 15}px`
    );
  }

  const triangleBorder = '<div class="arrow"></div>';
  const triangleBorderTemplate = document.createElement("div");
  triangleBorderTemplate.innerHTML = `
      ${triangleBorder}
  `;

  return triangleBorderTemplate;
};
