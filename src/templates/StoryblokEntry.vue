<template>
  <Layout>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      v-bind:is="componentName"
    />
  </Layout>
</template>

<script>
export default {
  name: 'StoryblokEntryTemplate',
  computed: {
    story () {
      return this.$page.storyblokEntry
    },
    componentName () {
      if(this.story.content.component == 'article') {
        return "BlogArticle";
      }else{
        return this.story.content.component;
      }
    }
  }
}
</script>

<page-query>
query StoryblokEntry ($id: ID) {
  storyblokEntry (id: $id) {
    id
    slug
    content
  }
}
</page-query>