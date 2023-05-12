<template>
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"
      ref="carousel">
      <div class="carousel-inner">
        <div v-for="(pic, key) in pics" :key="key" class="carousel-item" :class="{ active: key === 0 }">
          <img :src="pic" class="d-block w-100" :alt="key">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- <div><h5><img src="https://picsum.photos/300/200/?random=10"></h5></div> -->
</template>

<style scoped lang="scss">
@import '~bootstrap/scss/bootstrap';

.container {
  // border: 1px solid red;
  max-width: 1280px;
  padding: 0 50px;
}

.carousel {

  // padding: 0 50px;
  .carousel-inner {
    width: 100%;
    aspect-ratio: 2.35 / 1;
  }

  button {
    // border: 1px solid yellow;
    width: 50px;
  }
}

@media screen and (max-width:820px) {
  .container {
    padding: 0;

    .carousel-inner {
      padding: 0;
      aspect-ratio: 16 / 9;

      .carousel-item {
        img {
          width: auto;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

}
</style>
<script>
import Carousel from 'bootstrap/js/dist/carousel'
export default {
  props: {
    pics: {
      type: Array
    }
  },
  data() {
    return {
      carousel: {}
    }
  },
  mounted() {
    this.carousel = new Carousel(this.$refs.carousel)
  }
}
</script>
