<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <Nav></Nav>
  <div class="banner">
    <div class="bg-img">
      <img src="https://picsum.photos/900/500/?random=10">
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Nav, Footer
  }
}
</script>
<style scoped lang="scss">
.banner {
  width: 100%;
  .bg-img {
    width: 100%;
    height: 100vh;
    // height: auto;
    filter: grayscale(50%);
    filter: blur(3px);
    filter: brightness(0.3);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      // vertical-align: bottom;
      vertical-align: middle;
    }
  }
}

@media screen and (max-width:820px) {
  .banner {
    aspect-ratio: 9 / 16;
    .bg-img {
      height: 100%;
      img{
        height: 100%;
      }
    }
  }

}
</style>
