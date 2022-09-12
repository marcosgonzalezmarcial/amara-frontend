export const Hero = () => {
  const hero = document.createElement('section')
  hero.classList.add('hero')
  hero.setAttribute('id', 'home')

  hero.innerHTML = /* html */ `
    <div class="hero__content">
      <h1 class="hero__title hero__title--left">Amara style</h1>
        <button class="hero__btn-mobile">Descúbrenos</button>
      <h2 class="hero__title hero__title--right">Fashion house</h2>
      
      <div class="hero__content--left">
        <button class="hero__btn">MODA MUJER</button>
      </div>
      <div class="hero__content--right">
        <button class="hero__btn">MODA HOMBRE</button>
      </div>
    </div>
  `
  return hero
}
