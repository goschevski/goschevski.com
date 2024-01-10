<script setup>
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} | Aleksandar Goševski - software engineer` : 'Aleksandar Goševski - software engineer'
  },
  meta: [
    { name: 'description', content: 'Thoughts about web development, programming, devops, tools, design, etc.' }
  ],
  link: [
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      title: 'Aleksandar Goševski - software engineer',
      href: 'https://www.goschevski.com/rss.xml'
    },
    {
      rel: 'preload',
      type: 'font/woff2',
      href: '/bitter-300.woff2',
      as: 'font',
      crossorigin: true
    },
    {
      rel: 'preload',
      type: 'font/woff2',
      href: '/bitter-400.woff2',
      as: 'font',
      crossorigin: true
    }
  ]
})
const topPosition = ref(null)
const menuOpened = ref(false)
const menuButtonClicked = (state) => {
  menuOpened.value = state

  if (state) {
    topPosition.value = window.scrollY
  }

  document.body.classList.toggle('lock-scroll')

  if (!state) {
    window.scrollTo(0, topPosition.value)
  }
}
</script>

<template>
  <div :class="{ 'menu-opened': menuOpened }">
    <a class="skip-to-content-link" href="#main">Skip to content</a>

    <MenuButton @click="menuButtonClicked" />

    <aside class="sidebar">
      <PageSidebar />
    </aside>

    <main id="main" class="main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.menu-opened .sidebar {
  width: 100%;
  left: 0;

  @media (--large) {
    width: var(--sidebar-width);
  }
}

.sidebar {
  width: var(--sidebar-width);
  left: calc(0PX - var(--sidebar-width));
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1;
  transition: left 0.2s;

  @media (--large) {
    left: 0;
  }
}

.main {
  max-width: 800px;
  padding: 2em;
  margin: 0 auto;
  color: #333;

  @media (--large) {
    margin-left: calc(var(--sidebar-width) + 2em);
  }
}

.skip-to-content-link {
  display: inline-block;
  position: fixed;
  top: 1em;
  left: 1em;
  z-index: 3;
  transform: translateY(-1000%);
  transition: transform 0.3s;
  background: white;
  padding: 0.5em;
  border-radius: 3px;
  color: var(--main-color);

  &:focus {
    transform: translateY(0%);
  }
}
</style>
