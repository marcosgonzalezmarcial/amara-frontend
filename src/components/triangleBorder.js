export const triangleBorder = () => {
  const triangleBorder = `<div class="arrow"></div>`;

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
