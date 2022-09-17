export default function () {
  const $navbar = document.querySelector('.navbar')
  const $overlay = document.querySelector('.overlay')
  $navbar.addEventListener('click', () => {
    $navbar.classList.toggle('active')
    $overlay.classList.toggle('active')
    document.body.classList.toggle('scroll-control')
  })
}
