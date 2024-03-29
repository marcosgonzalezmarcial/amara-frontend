// components
import { Main } from './components/layouts/Main'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TriangleBorder } from './components/TriangleBorder'
// utils
import { navbarMenuToggle } from './ui/ui-utils/navbarMenuToggle'
import { repositionTriangleBorder } from './ui/ui-utils/repositionTriangleBorder'
import { paintProducts } from './ui/ui-utils/paintProducts'

export const App = () => {
  const root = document.getElementById('root')

  root.appendChild(Header())
  root.appendChild(Main())
  root.appendChild(Footer())

  // paint products from api on first load category "Más vendidos"
  paintProducts('Más vendidos')

  // Inserting triangle border to the Header once the App is mounted
  document.querySelector('header').appendChild(TriangleBorder())

  // repositioning the element according to window width size
  window.addEventListener('resize', repositionTriangleBorder)
  // adding side-navbar menu toggle functionallity
  navbarMenuToggle()

  return root
}
