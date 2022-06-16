export const triangleBorder = () => {
  const cartBtnEl = document.querySelector(
    "button.header-action-btn ion-icon[name='cart-outline']"
  );
  const cartBtnPos = cartBtnEl.getBoundingClientRect().left;

  const triangleBorder = '<div class="arrow"></div>';

  let triangleBorderEl = document.querySelector(
    "button.header-action-btn ion-icon[name='cart-outline']"
  );

  // repositioning the element according to width size
  const repositionTriangleBorder = () => {
    document.documentElement.style.setProperty(
      "--triangle-border-left",
      `${triangleBorderEl.getBoundingClientRect().left + 7}px`
    );
  };
  window.onresize = repositionTriangleBorder;

  // const triangleBorderTemplate = document.createElement("template");
  // triangleBorderTemplate.innerHTML = `
  //     ${triangleBorder}
  // `;
  // const triangleBorderTemplateClone = triangleBorderTemplate.content.cloneNode(
  //   true
  // );
  // const triangleBorderFragment = document.createDocumentFragment();
  // triangleBorderFragment.appendChild(triangleBorderTemplateClone);

  const triangleBorderTemplate = document.createElement("div");
  triangleBorderTemplate.innerHTML = `
      ${triangleBorder}
  `;

  // setting triangle border position on first load
  document.documentElement.style.setProperty(
    "--triangle-border-left",
    `${cartBtnPos + 15}px`
  );

  return triangleBorderTemplate;
};