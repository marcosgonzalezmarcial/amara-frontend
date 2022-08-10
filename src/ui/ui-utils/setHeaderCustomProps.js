export const setHeaderCustomProps = () => {
  const root = document.querySelector(':root')
  const header = document.querySelector('header')

  if (header) {
    root.style.setProperty('--header-height', `${header.offsetHeight}px`)
  }
}
