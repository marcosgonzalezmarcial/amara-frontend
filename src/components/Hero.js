export const Hero = () => {
  const hero = document.createElement('section')
  hero.classList.add('hero')
  hero.setAttribute('id', 'home')

  hero.innerHTML = /* html */`
  <div class="hero-content">
    <h1 class="h1 hero-title-left">Amara style </h1>
      <button class="btn-mobile">Descúbrenos</button>
    <h1 class="h1 hero-title-right">Fashion house</h1>
    
    <div class="hero-left">
      <button class="btn btn-secondary-bg-xxl">MODA MUJER</button>
    </div>
    <div class="hero-right">
      <button class="btn btn-secondary-bg-xxl">MODA HOMBRE</button>
    </div>
  </div>
`
  return hero
}
