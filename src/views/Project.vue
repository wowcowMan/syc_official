<template>
  <div class="wrap">
    <ul class="project">
      <li v-for="(i, key) in showProject.imgList" :key="key">
        <img :src="i" alt="project-img">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    showProject: {

    },
    showData: {}
  },
  data() {
    return {
      tempData: {}
    }
  },

  created() {

  }
}
</script>

<style scoped lang="scss">
.wrap .txt {
  box-sizing: border-box;
  // width: 40%;
  border: 1px solid red;
  position: fixed;
  right: 165px;
  top: 265px;

  p {
    border: 1px solid blue;
  }
}

li {
  width: 65%;
  margin-bottom: 25px;

  img {
    width: 100%;
  }
}
</style>
