export const navbarMenuToggle = () => {
  const navElemArr = document.querySelectorAll('[data-navbar-btn]')
  const navbar = document.querySelector('nav.navbar')
  const overlay = document.querySelector('.overlay')

  navElemArr.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation()
      navbar.classList.toggle('active')
      overlay.classList.toggle('active')
      document.body.classList.toggle('scroll-control')
    })
  })
}
