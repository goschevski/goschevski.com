<script setup>
const query = { path: '/', sort: [{ createdAt: -1 }] }
</script>

<template>
  <section aria-labelledby="articles-title">
    <h2 id="articles-title" class="u-screenReaders">Articles</h2>

    <ContentList :query="query" v-slot="{ list }">
      <ArticlesList :articles="list" />
    </ContentList>
  </section>
</template>

<style scoped>

</style>
