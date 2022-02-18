<template>
  <article>
    <h2>{{ article.title }}</h2>
    <ArticleMeta :article="article" />

    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  name: 'ArticlePage',

  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>
