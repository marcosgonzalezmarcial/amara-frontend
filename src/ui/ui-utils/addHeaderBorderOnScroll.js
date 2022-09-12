export default function () {
  const $heroSection = document.querySelector('section.hero')
  const $header = document.querySelector('header')
  const cb = (entries) => {
    if (!entries[0].isIntersecting) {
      $header.classList.add('scroll-border')
    } else {
      $header.classList.remove('scroll-border')
    }
  }
  let options = {
    rootMargin: '-80px'
  }
  const observer = new IntersectionObserver(cb, options)

  observer.observe($heroSection)
}
