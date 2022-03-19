<template>
  <section aria-labelledby="tag-title">
    <h2 id="tag-title">#{{ $route.params.tag }}</h2>

    <ArticlesList :articles="articles" />
  </section>
</template>

<script>
export default {
  name: 'TagPage',

  async asyncData({ $content, route, params }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .where({ tags: { $contains: route.params.tag } })
      .fetch()

    return {
      articles,
    }
  },
}
</script>
