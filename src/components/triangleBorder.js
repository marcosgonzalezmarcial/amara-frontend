export const triangleBorder = () => {
  const triangleBorder = `<div class="arrow arrow-up"></div>`;

  const bagPos = document
    .querySelector("button.header-action-btn ion-icon[name='cart-outline']")
    .getBoundingClientRect().left;

  console.log(bagPos);

  // repositioning the element according to width size
  const repositionTriangleBorder = () => {
    document.documentElement.style.setProperty("--navbar-left", `${bagPos}px`);
  };
  window.onresize = repositionTriangleBorder;

  const triangleBorderTemplate = document.createElement("template");
  triangleBorderTemplate.innerHTML = `
      ${triangleBorder}
  `;
  const triangleBorderTemplateClone = triangleBorderTemplate.content.cloneNode(
    true
  );
  const triangleBorderFragment = document.createDocumentFragment();
  triangleBorderFragment.appendChild(triangleBorderTemplateClone);

  return triangleBorderFragment;
};
