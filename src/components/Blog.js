export const Blog = () => {
  const blog = document.createElement("section")
  blog.classList.add("section")
  blog.classList.add("blog")

  blog.innerHTML = /* html */ `
    <div class="container">
      <h3 class="h2 section-title">Últimas noticias sobre moda</h3>
      <ul class="blog-list">
        <li>
          <div class="blog-card">
            <figure class="card-banner">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,q_auto:eco,w_550/v1661336046/Amara-ecommerce/blog-section/cyber-monday-blog_dppc9k.webp"
                  alt="Mujer comprando en Cyber Monday"
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
                  src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,q_auto:eco,w_550/v1661336046/Amara-ecommerce/blog-section/High-End-Furniture-blog_dh0iqk.webp"
                  alt="Salón con decoración moderna"
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
                  src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,q_auto:eco,w_540/v1661336046/Amara-ecommerce/blog-section/mujeres-comprando-blog_ojqo9f.webp"
                  alt="Tres mujeres comprando con bolsas de colores"
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
