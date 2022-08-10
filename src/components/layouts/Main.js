import { Article } from './Article'

export const Main = () => {
  const main = document.createElement('main')
  main.appendChild(Article())

  return main
}
