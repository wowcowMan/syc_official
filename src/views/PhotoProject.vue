<template>
  <div class="container">
    <div class="link-wrap">
      <router-link to="/worksboard/gallery">gallery</router-link>
      <router-link to="/worksboard/photography/all/list">photography</router-link>
      <router-link to="/worksboard/videography/all/list">videography</router-link>
    </div>
    <BreadCrumbs></BreadCrumbs>
    <!-- <router-view :type="type" :showData="showData" :showProject="showProject" @emit-project="filtreProject">
    </router-view> -->
    <ul class="project-list">
      <li v-for="(item, key) in showData" :key="key">
        <router-link :to="`/worksboard/${type}/${item.category}/${item.title}`" @click="emitShow(item.title)">
          <div class="pic">
            <img :src="item.preview" alt="preiew-img">
          </div>
          <p>{{ item.title }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // props: {
  //   showData: {
  //     // type: Object
  //   },
  //   type: {
  //     type: String
  //   }
  // },

  data() {
    return {
      type: 'photography',
      photoData: [],
      showData: [],
      showProject: {}
    }
  },

  // watch: {
  //   // 當route.params.category變動時更新分類列表
  //   category(newCategory, oldCategory) {
  //     if (newCategory === 'all') {
  //       this.showData = this.photoData
  //     } else {
  //       this.showData = this.photoData.filter((i) => i.category === newCategory)
  //     }
  //   }
  // },

  methods: {
    emitShow(title) {
      this.$emit('emit-project', title)
    }
  },

  created() {
  }
}
</script>

<style scoped lang="scss">
.container {
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 150px 50px 50px 50px;
  color: #fff;

  .link-wrap {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #A6A6A6;

    a {
      margin-right: 15px;
      text-decoration: none;
      color: #A6A6A6;
      font-weight: 500;
    }

    a.active {
      color: #fff;
    }
  }

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
}
</style>
