<template>
  <Nav></Nav>
  <div class="about">
    <h1>This is an about page</h1>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Nav, Footer
  }
}
</script>
<style lang="scss">
  h1{
    color: aliceblue;
  }
</style>
