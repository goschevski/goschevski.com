<template>
  <section>
    <h2 class="u-screenReaders">Articles</h2>

    <ArticlesList :articles="articles" />
  </section>
</template>

<script>
export default {
  name: 'IndexPage',

  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .without(['body'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
