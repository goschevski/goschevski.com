<template>
  <article class="about">
    <h2>About me</h2>
    <p>
      I'm Aleksandar Goševski, software developer based in Serbia. I focus on combining modern technologies to build stable and sophisticated web applications and APIs. I started my journey with HTML &amp; CSS back in 2007, but I didn't stopped there. In the meanwhile I worked with variety of other technologies including PHP, JavaScript, Node.js, Go, etc.
    </p>
    <p>
      Currently working as a Staff Software Engineer at
      <a href="https://www.vast.com/">Vast</a> (Acquired by
      <a href="https://vroom.com">Vroom</a>).
    </p>
    <p>
      I'm passionate about my machine setup, always tweaking my
      <a href="https://github.com/goschevski/dotfiles">dotfiles</a>.
    </p>

    <h3>Specialities</h3>
    <ul class="specialties">
      <li>JavaScript (Node.js, express, koa, Nuxt.js, Vue, React)</li>
      <li>HTML &amp; CSS (postcss, sass, accessibility, semantics)</li>
      <li>Tools ((n)vim ❤️, tmux, zsh, ansible, git, gulp, vite, etc.)</li>
      <li>
        Other (design patterns, single-page apps, speed optimisation, etc.)
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style scoped>
.specialties {
  padding: 0 2em;

  & li {
    list-style-type: disc;
  }
}
</style>
