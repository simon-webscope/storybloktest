<template>
  <div class="column article overview">
   
   
    <h1>{{blok.headline}}</h1>
    <ul>
      <li>
        <a href="/article/article-1">One</a>
      </li>
      <li>
        <a href="/article/article-2">Two</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ArticleOverview",
  props: ["blok"]
};
</script>