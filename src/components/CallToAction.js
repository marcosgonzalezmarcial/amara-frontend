export const CallToAction = () => {
  let CallToAction = document.createElement("section");
  CallToAction.classList.add("section");
  CallToAction.classList.add("call-to-action");

  CallToAction.innerHTML = `
  <div class="container-fluid-cta">
    <div class="call-to-action-content">
      <h1 class="call-to-action-title h2 section-title">
        Hasta un <span>50% de descuento</span> para vestir el verano
      </h1>
      <button class="call-to-action-btn">
        Colección verano
      </button>
    </div>
  </div>
  `;
  return CallToAction;
};
