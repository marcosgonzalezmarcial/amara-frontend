import { Hero } from '../Hero'
import { Services } from '../Services'
import { Category } from '../Category'
import { Products } from '../Products'
import { CallToAction } from '../CallToAction'
import { Blog } from '../Blog'
import { Newsletter } from '../Newsletter'

export const Article = () => {
  const article = document.createElement('article')

  // //Hero section
  article.appendChild(Hero())
  // //Services section
  article.appendChild(Services())
  // //Category section
  article.appendChild(Category())
  // //Products section
  article.appendChild(Products())
  // //Call-to-action section
  article.appendChild(CallToAction())
  // // Blog Section
  article.appendChild(Blog())
  // // Newsletter section
  article.appendChild(Newsletter())
  // // Footer section

  return article
}
