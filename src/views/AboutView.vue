<template>
  <Nav></Nav>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'HomeView',
  components: {
    Nav
  }
}
</script>
<style lang="scss">
  h1{
    color: aliceblue;
  }
</style>
