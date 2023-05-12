<template>
  <Nav></Nav>
  <div class="banner">
    <video autoplay muted loop playsinline>
      <source src="../assets/backvideo.mp4">
    </video>
  </div>
  <Footer></Footer>
</template>

<script>
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

  video {
    pointer-events: none;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    vertical-align: bottom;
    filter: grayscale(50%);
    filter: blur(3px);
    filter: brightness(0.3);
  }

  .bg-img {
    width: 100%;
    height: 100vh;
    filter: grayscale(50%);
    filter: blur(3px);
    filter: brightness(0.3);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: middle;
    }
  }
}

@media screen and (max-width:820px) {
  .banner {
    aspect-ratio: 9 / 16;
    video {
        height: 100%;
    }

    .bg-img {
      height: 100%;

      img {
        height: 100%;
      }
    }
  }

}</style>
