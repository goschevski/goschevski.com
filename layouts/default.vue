<template>
  <div :class="{ 'menu-opened': menuOpened }">
    <a class="skip-to-content-link" href="#main"> Skip to content </a>

    <MenuButton @click="menuButtonClicked" />

    <aside class="sidebar">
      <PageSidebar @menuButtonClicked="menuButtonClicked" />
    </aside>

    <main id="main" class="main">
      <Nuxt class="view" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data: () => {
    return {
      topPosition: null,
      menuOpened: false,
    }
  },

  methods: {
    menuButtonClicked(state) {
      this.menuOpened = state

      if (state) {
        this.topPosition = window.scrollY
      }

      document.body.classList.toggle('lock-scroll')

      if (!state) {
        window.scrollTo(0, this.topPosition)
      }
    },
  },
}
</script>

<style scoped>
.sidebar {
  width: var(--sidebar-width);
  left: calc(0px - var(--sidebar-width));
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1;
  transition: left 0.2s;

  @media (--large) {
    left: 0;
  }

  @nest .menu-opened & {
    width: 100%;
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
  color: #fff;
  z-index: 3;
  transform: translateY(-1000%);
  transition: transform 0.3s;

  &:focus {
    transform: translateY(0%);
  }
}
</style>
