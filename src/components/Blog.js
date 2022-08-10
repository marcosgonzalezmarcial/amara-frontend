export const Blog = () => {
  const blog = document.createElement('section')
  blog.classList.add('section')
  blog.classList.add('blog')

  blog.innerHTML = /* html */ `
    <div class="container">
      <h3 class="h2 section-title">Últimas noticias sobre moda</h3>
      <ul class="blog-list">
        <li>
          <div class="blog-card">
            <figure class="card-banner">
              <a href="#">
                <img
                  src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/cyber-monday-blog.jpg"
                  alt="Cyber Monday Fashion en Amara"
                  loading="lazy"
                />
              </a>
            </figure>

            <div class="card-content-blog">
              <ul class="card-meta-list">
                <li class="card-meta-item">
                  <ion-icon name="folder-open-outline"></ion-icon>

                  <a href="#" class="card-meta-link">Fashion</a>
                </li>

                <li class="card-meta-item">
                  <ion-icon name="time-outline"></ion-icon>

                  <a href="#" class="card-meta-link">
                    <time datetime="2021-03-31">31 Mar 2021</time>
                  </a>
                </li>
              </ul>

              <h3 class="h3 card-title">
                <a href="#">Cyber Monday Fashion en Amara</a>
              </h3>
            </div>
          </div>
        </li>

        <li>
          <div class="blog-card">
            <figure class="card-banner">
              <a href="#">
                <img
                  src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/High-End-Furniture.jpg"
                  alt="La decoración de tu casa de verando"
                  loading="lazy"
                />
              </a>
            </figure>

            <div class="card-content-blog">
              <ul class="card-meta-list">
                <li class="card-meta-item">
                  <ion-icon name="folder-open-outline"></ion-icon>

                  <a href="#" class="card-meta-link">Decoración</a>
                </li>

                <li class="card-meta-item">
                  <ion-icon name="time-outline"></ion-icon>

                  <a href="#" class="card-meta-link">
                    <time datetime="2021-03-31">31 Mar 2021</time>
                  </a>
                </li>
              </ul>

              <h3 class="h3 card-title">
                <a href="#">La decoración de tu casa de verando</a>
              </h3>
            </div>
          </div>
        </li>

        <li>
          <div class="blog-card">
            <figure class="card-banner">
              <a href="#">
                <img
                  src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/mujer-comprando-blog.jpg"
                  alt="Ideas únicas de moda que para descubrir"
                  loading="lazy"
                />
              </a>
            </figure>

            <div class="card-content-blog">
              <ul class="card-meta-list">
                <li class="card-meta-item">
                  <ion-icon name="folder-open-outline"></ion-icon>

                  <a href="#" class="card-meta-link">Novedades</a>
                </li>

                <li class="card-meta-item">
                  <ion-icon name="time-outline"></ion-icon>

                  <a href="#" class="card-meta-link">
                    <time datetime="2021-03-31">31 Mar 2021</time>
                  </a>
                </li>
              </ul>

              <h3 class="h3 card-title">
                <a href="#">Ideas únicas sobre moda que te encantarán</a>
              </h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
`
  return blog
}
