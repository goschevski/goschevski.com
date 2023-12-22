<template>
  <article class="about">
    <h2>About me</h2>
    <p>
      I'm Aleksandar Goševski, a software developer based in Serbia. For me, it all started back in 2007 when I first dipped my toes into the world of HTML and CSS. Since then, my thirst for knowledge has led me to explore a diverse range of technologies, including PHP, JavaScript, Node.js, Go, and many more.
    </p>
    <p>
      I am currently thriving in my role as a Staff Software Engineer at <a href="https://www.vast.com/">Vast</a> (Acquired by <a href="https://vroom.com">Vroom</a>).
    </p>
    <p>
      One thing that truly sets me apart is my relentless pursuit of an optimized machine setup. I'm always fine-tuning my <a href="https://github.com/goschevski/dotfiles">dotfiles</a> to ensure a seamless and efficient coding environment.
    </p>
    <h3>Specialities</h3>
    <ul class="specialties">
      <li><strong>JavaScript</strong> - Throughout my career, I have worked extensively with JavaScript, from older libraries like jQuery and Backbone.js to more recent frameworks like Vue.js, enabling me to tackle diverse projects</li>
      <li><strong>HTML &amp; CSS</strong> - While I'm currently focusing a bit less on CSS, I remain well-versed in semantic markup, accessibility, and the latest best practices in creating engaging web experiences.</li>
      <li><strong>Tools</strong> - (neo)vim ❤️, tmux, zsh, ansible, git, gulp, vite, etc.)</li>
      <li><strong>Other</strong> - design patterns, devops, speed optimisation, etc.</li>
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
