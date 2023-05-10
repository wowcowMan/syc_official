<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <Nav></Nav>
  <div class="banner">
    <!-- <iframe src="https://www.youtube.com/embed/17w04fTYdjo?controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=17w04fTYdjo" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share" allowfullscreen></iframe> -->
    <!-- <div class="bg-img">
      <img src="https://picsum.photos/900/500/?random=10">
    </div> -->
    <video autoplay muted loop src="../assets/backvideo.mp4"></video>
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

  video {
    pointer-events: none;
    width: 100%;
    // height: auto;
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
