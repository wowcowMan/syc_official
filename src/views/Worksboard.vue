<template>
  <Nav></Nav>
  <div class="container">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'works',
  components: {
    Nav, Footer
  },
  data() {
    return {
      photoData: []
    }
  },
  computed: {

  },
  methods: {

  },
  created() {
    // this.getPhotography()
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  background: #000;
}
</style>
