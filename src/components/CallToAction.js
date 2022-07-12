export const CallToActionSummer = () => {
  let callToActionSummer = document.createElement("section");
  callToActionSummer.classList.add("section");
  callToActionSummer.classList.add("call-to-action");

  callToActionSummer.innerHTML = `
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
  return callToActionSummer;
};
