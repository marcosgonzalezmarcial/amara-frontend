export const TriangleBorder = () => {
  // const badgeRefPos = document
  //   .querySelector('.header-action__btn-badge')
  //   .getBoundingClientRect().left

  // // setting triangle border position on first load
  // if (badgeRefPos) {
  //   document.documentElement.style.setProperty(
  //     '--triangle-border-left',
  //     `${Math.round(badgeRefPos - 5)}px`
  //   )
  // } else {
  //   return
  // }

  const root = document.querySelector(':root')

  const badgeRef = document.querySelector('.header-action__btn-badge')

  // this block of code fixes a temporary bug when rendering the DOM
  let badgeRefPos
  if (badgeRef) {
    badgeRefPos = badgeRef.getBoundingClientRect().left
  } else {
    badgeRefPos = 0
  }

  root.style.setProperty(
    '--triangle-border-left',
    `${Math.round(badgeRefPos - 5)}px`
  )
  const triangleBorder = '<div class="arrow"></div>'
  const triangleBorderTemplate = document.createElement('div')
  triangleBorderTemplate.innerHTML = `
      ${triangleBorder}
  `

  return triangleBorderTemplate
}
