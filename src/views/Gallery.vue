<template>
  <div class="gallery">
    <div class="recent">
      <div class="pic">
        <img :src="recentData.preview" alt="preview-img">
      </div>
      <div class="txt">
        <h3>{{ recentData.title }}</h3>
        <p>{{ recentData.description }},Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eveniet at,
          cumque nam et odit incidunt placeat voluptatum corporis magnam, repudiandae ipsa? Ullam atque placeat animi
          delectus at eum accusamus.</p>
      </div>
      <span>As of recently...</span>
    </div>

    <p>videography</p>

    <p>photography</p>

  </div>
</template>

<script>
export default {
  name: 'gallery',
  props: {
    data: {
      type: Array
    },
    recentData: {
      type: Object
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.gallery {
  width: 100%;
  max-width: 1280px;
  margin: auto;

  .recent {
    width: 100%;
    position: relative;

    .pic {
      position: relative;

      img {
        filter: grayscale(70%);
        width: 100%;
      }

    }

    .pic:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: #000;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }

    .txt {
      position: absolute;
      right: 50px;
      bottom: 50px;
      width: 400px;
      color: #fff;

      h3 {
        font-size: 48px;
        margin-bottom: 5px;
      }
    }
    span {
      position: absolute;
      left: 50px;
      bottom: 50px;
      font-weight: 300;
      color: #fff;
    }
  }
}</style>
