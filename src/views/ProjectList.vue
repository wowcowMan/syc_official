<template>
  <ul class="project-list">
    <li v-for="(item, key) in showData" :key="key">
      <router-link :to="`/worksboard/photography/${item.category}/${item.title}`" @click="emitShow(item.title)">
        <div class="pic">
          <img :src="item.preview" alt="preiew-img">
        </div>
        <p>{{ item.title }}</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'projectList',
  props: {
    showData: {
      // type: Object
    }
  },
  data() {
    return {

    }
  },

  methods: {
    emitShow(title) {
      this.$emit('emit-project', title)
    }
  }
}
</script>

<style scoped lang="scss">
.project-list {
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  li {
    width: 100%;
    // border: 1px solid #fff;
    box-sizing: border-box;

    a {
      display: block;
      width: 100%;
      text-decoration: none;

      .pic {
        aspect-ratio: 1/1;
        overflow: hidden;

        img {
          object-fit: cover;
          width: 100%;
          aspect-ratio: 1/1;
          object-position: center;
          transition: all .3s ease;
        }
      }

      p {
        text-decoration: none;
        text-align: center;
        color: #fff;
        padding: 10px 0;
      }
    }

    a:hover {
      img {
        transform: scale(1.1);
      }
    }

  }
}
</style>
