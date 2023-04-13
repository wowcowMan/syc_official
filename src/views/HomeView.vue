<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <Nav></Nav>
  <div class="banner">
    <div class="bg-img">
      <img src="https://picsum.photos/1280/1080/?random=10">
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
<style lang="scss">
.banner {
  width: 100%;

  .bg-img {
    width: 100%;
    height: auto;
    filter: grayscale(50%);
    filter: blur(3px);
    filter: brightness(0.3);

    img {
      object-fit: cover;
      vertical-align: bottom;
      width: 100%;
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
