export const Hero = () => {
  let hero = document.createElement("section");
  hero.classList.add("hero");
  hero.setAttribute("id", "home");

  hero.innerHTML = `
    <div class="container">
      <div class="hero-content">
        <p class="hero-subtitle">¡Déjate sorprender!</p>

        <h1 class="h1 hero-title">Amara style Fashion house</h1>

        <button class="btn btn-primary">Compra aquí</button>
      </div>
    </div>
`;
  return hero;
};
