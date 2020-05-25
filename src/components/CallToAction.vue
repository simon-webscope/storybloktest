<template>
  

  <b-jumbotron :header="blok.headline" :lead="blok.headline_2">
    <p>{{blok.text}}</p>
    <b-button v-for="button in blok.buttons" :key="button._uid" variant="primary" href="#">{{button.text}}</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  props: ["blok"]
};
</script>