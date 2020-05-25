<template>
  <div class="column feature">
    This is a feature
    {{ blok.name }}
  </div>
</template>

<script>
export default {
  name:'Feature',
  props: ['blok']
}
</script>