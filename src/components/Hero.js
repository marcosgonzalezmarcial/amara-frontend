export const Hero = () => {
  let hero = document.createElement("section");
  hero.classList.add("hero");
  hero.setAttribute("id", "home");

  hero.innerHTML = `
  <div class="hero-content">
  
  
  <h1 class="h1 hero-title-left">Amara style </h1>
  <button class="btn btn-secondary-bg">DESCÚBRENOS</button>
  <h1 class="h1 hero-title-right">Fashion house</h1>
  
  <div class="hero-left">
  <button class="btn btn-secondary-bg-xxl">MODA MUJER</button>
  </div>
  <div class="hero-right">
  <button class="btn btn-secondary-bg-xxl">MODA HOMBRE</button>
  </div>
</div>
`;
  return hero;
};

// <div class="hero-content">
//   <p class="hero-subtitle">¡Déjate sorprender!</p>

//   <h1 class="h1 hero-title">Amara style Fashion house</h1>

//   <button class="btn btn-primary">Compra aquí</button>
// </div>

{
  /* <div class="container">
  <div class="hero-content">
    <div class="hero-left"></div>
    <div class="hero-right">
      <button class="btn btn-secondary">Compra aquí</button>
    </div>
  </div>
</div>; */
}
