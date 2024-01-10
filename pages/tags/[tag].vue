<script setup>
const route = useRoute()
const query = { path: '/', where: [{ 'tags': { $contains: route.params.tag } }], sort: [{ createdAt: -1 }] }
</script>

<template>
  <section aria-labelledby="tag-title">
    <h2 id="tag-title">#{{ route.params.tag }}</h2>

    <ContentList :query="query" v-slot="{ list }">
      <ArticlesList :articles="list" />
    </ContentList>
  </section>
</template>

<style scoped>

</style>
