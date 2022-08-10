export const repositionTriangleBorder = () => {
  const root = document.querySelector(':root')

  const badgeRefPos = document
    .querySelector('.btn-badge')
    .getBoundingClientRect().left

  root.style.setProperty(
    '--triangle-border-left',
    `${Math.round(badgeRefPos - 6.8)}px`
  )
}
