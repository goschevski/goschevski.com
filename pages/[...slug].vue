<template>
  <ContentDoc v-slot="{ doc }">
    <article>
      <h2>{{ doc.title }}</h2>
      <ArticleMeta :article="doc" />
      <ContentRenderer :value="doc" />
    </article>
  </ContentDoc>
</template>
