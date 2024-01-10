<script setup>
const props = defineProps({
  articles: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <article
      v-for="article in articles"
      :key="article._path"
      itemscope
      itemtype="http://schema.org/BlogPosting"
    >
      <h3 class="article-title" itemprop="name headline">
        <NuxtLink :to="article._path">
          {{ article.title }}
        </NuxtLink>
      </h3>

      <ArticleMeta :article="article" />

      <p>{{ article.description }}</p>
    </article>
  </div>
</template>

<style scoped>
article {
  margin-bottom: 3em;
}

.article-title {
  margin-bottom: 0;
}
</style>
