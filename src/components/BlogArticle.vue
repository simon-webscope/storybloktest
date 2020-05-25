<template>
  <div class="column article">
    <h1 v-editable="blok">{{blok.title}}</h1>
    <img v-editable="blok" width="600" :src="blok.teaser_image"/>
    <p v-editable="blok">{{blok.long_text}}</p>

  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>