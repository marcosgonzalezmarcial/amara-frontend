export const addBorderScroll = () => {
  const header = document.querySelector('header')

  if (header) {
    if (
      window.innerWidth >= 768 &&
      window.scrollY >= window.innerHeight - 125
    ) {
      header.classList.add('scroll-border')
    } else {
      if (header.classList.contains('scroll-border')) {
        header.classList.remove('scroll-border')
      } else {
        return null
      }
    }
  } else {
    return null
  }
}
