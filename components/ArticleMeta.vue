<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="wrapper">
    <time :datetime="article.createdAt" itemprop="datePublished">
      {{ formatDate(article.createdAt) }}
    </time>
    in
    <ul class="tags">
      <li v-for="tag in article.tags" :key="tag">
        <NuxtLink :to="`/tags/${tag}`"> #{{ tag }} </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  font-size: 0.9rem;
}

ul {
  display: inline-block;
}

li {
  display: inline-block;

  &::after {
    content: '•';
    display: inline-block;
    margin: 0 5px;
  }

  &:last-child::after {
    content: '';
  }
}
</style>
