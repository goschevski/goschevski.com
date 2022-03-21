<template>
  <div class="about">
    <h1 class="name">Aleksandar Goševski</h1>
    <p class="title">Software Developer</p>

    <nav class="nav">
      <h2 class="u-screenReaders">Menu</h2>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About me</NuxtLink></li>
      </ul>
    </nav>

    <ul class="social">
      <li>
        <a
          class="github-icon"
          target="_blank"
          rel="noopener"
          href="https://www.github.com/goschevski/"
          >My github profile</a
        >
      </li>
      <li>
        <a
          class="linkedin-icon"
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/goschevski/"
          >My linkedin profile</a
        >
      </li>
      <li><a class="rss-icon" target="_blank" href="/rss.xml">RSS Feed</a></li>
    </ul>

    <footer class="copy">
      <p>&copy; 2007-2022</p>
    </footer>
  </div>
</template>

<style scoped>
.about {
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  background: linear-gradient(transparent, rgba(0 0 0 / 40%)) bottom center,
    url('~assets/img/background.webp') 10% center / cover no-repeat;
}

.name {
  font-size: 1.4rem;
  margin: 0;
}

.title {
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 300;
  font-size: 0.9rem;
  margin: 0;
}

.nav {
  font-size: 1rem;
  margin: 2em 0;

  & a,
  & a:active,
  & a:visited,
  & a:hover {
    display: inline-block;
    color: #fff;
    text-decoration: none;
  }

  & a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--main-color);
    transform: translate3d(-101%, 0, 0);
    transition: opacity 300ms, transform 300ms;
  }

  & a:hover::after {
    transform: translate3d(0, 0, 0);
  }
}

.social {
  display: flex;

  & li {
    margin-right: 20px;
  }

  & a {
    display: block;
    width: 24px;
    height: 24px;
    text-indent: -9999px;
    overflow: hidden;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
}

.github-icon {
  background: url('~assets/img/github.svg') no-repeat;
}

.linkedin-icon {
  background: url('~/assets/img/linkedin.svg') no-repeat;
}

.rss-icon {
  background: url('~/assets/img/rss.svg') no-repeat;
}

.copy {
  font-size: 0.8rem;
}
</style>
