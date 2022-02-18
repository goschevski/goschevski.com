<template>
  <div>
    <article
      v-for="article in articles"
      :key="article.slug"
      itemscope
      itemtype="http://schema.org/BlogPosting"
    >
      <h3 class="article-title" itemprop="name headline">
        <NuxtLink :to="`/${article.slug}`">
          {{ article.title }}
        </NuxtLink>
      </h3>

      <ArticleMeta :article="article" />

      <p>{{ article.description }}</p>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.article-title {
  margin-bottom: 0;
}
</style>
