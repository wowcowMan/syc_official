<template>
  <Nav></Nav>
  <div class="container">
    <div class="link-wrap" v-if="$route.params.type">
      <router-link to="/worksboard/gallery" :class="{ 'active': $route.params.type === 'gallery' }">gallery</router-link>

      <router-link to="/worksboard/photography/all"
        :class="{ 'active': $route.params.type === 'photography' }">photography</router-link>

      <router-link to="/worksboard/videography/all"
        :class="{ 'active': $route.params.type === 'videography' }">videography</router-link>
    </div>

    <ul v-if="$route.params.type" class="category-list">
      <li v-for="(i, key) in categoryList" :key="key">
        <router-link :to="`/worksboard/${type}/${i}`" :class="{ 'active': category === i }">{{ i
        }}</router-link>
      </li>
    </ul>

    <router-view @emit-project="filterProject" :galleryData="galleryData" :recentData="recentData"
      :categoryData="categoryData" :projectData="projectData"></router-view>
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
      categoryList: [
        'all', 'landscape', 'commercial', 'documentary'
      ],
      allData: [],
      galleryData: [[], []],
      projectData: {},
      recentData: {}
    }
  },
  computed: {
    // 根據params篩選出照片或影片的專案列表
    typeData() {
      return this.allData.filter((i) => {
        return i.type === this.$route.params.type
      })
    },
    // 根據params從typeData篩選出專案分類列表
    categoryData() {
      return this.typeData.filter((i) => {
        if (this.$route.params.category === 'all') {
          return i.category
        } else {
          return i.category === this.$route.params.category
        }
      })
    },
    type() {
      return this.$route.params.type
    },
    category() {
      return this.$route.params.category
    },
    project() {
      return this.$route.params.project
    }
  },
  watch: {
    // 當params.project有變動時，更新projectData，返回時才會跟著更動
    project() {
      this.filterProject(this.project)
    }
  },
  methods: {
    // 獲取google sheets資料
    getProjectData() {
      const sheetId = '1Qvk6q6zxcVPyCg7hz782qem1zADCnIr_7JtCCBMslw8'
      // const asd = projectData
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/test`
      this.$http.get(url, { params: { key: `${process.env.VUE_APP_SHEET_KEY}` } })
        .then((res) => {
          const data = []
          // console.log(res.data.values)
          res.data.values.forEach((i) => {
            data.push({
              type: i[0],
              category: i[1],
              title: i[2],
              imgList: JSON.parse(i[3]),
              video: i[4],
              description: i[5],
              preview: i[6],
              date: new Date(i[7])
            })
          })
          this.allData = data
          this.filterGallery()
          this.filterRencent()
          // 在專案頁面重整時，根據params篩選projectData
          if (this.$route.params.project) {
            this.filterProject(this.$route.params.project)
          }
        })
    },
    filterGallery() {
      this.galleryData[0] = this.allData.filter((i) => {
        return i.type === 'videography'
      })
      this.galleryData[1] = this.allData.filter((i) => {
        return i.type === 'photography' && ['ZIGZAG', '嘉義市東公有零售市場', '合歡山'].includes(i.title)
      })
    },
    // 點擊專案時觸發(emit)
    filterProject(project) {
      this.projectData = this.categoryData.filter((i) => {
        return i.title === project
      })[0]
    },
    // 篩選最新專案
    filterRencent() {
      this.recentData = this.allData.reduce((prev, current) => {
        return (prev.date > current.date) ? prev : current
      })
    }
  },
  created() {
    this.getProjectData()
  }
}
</script>

<style scoped lang="scss">
.container {
  // border: 1px solid red;
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  background: #000;
  margin: auto;
  padding: 150px 0 50px;

  .link-wrap {
    position: relative;
    padding: 0 50px 15px;
    margin-bottom: 15px;

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

  .link-wrap:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50px;
    right: 50px;
    display: block;
    height: 1px;
    background: #A6A6A6;
  }

  .category-list {
    padding: 0 50px;
  }
}
.category-list {
  display: flex;
  margin-bottom: 15px;

  li {
    position: relative;
    margin-right: 20px;

    a {
      cursor: pointer;
      background: none;
      border: none;
      color: #A6A6A6;
      font-size: 12px;
      font-weight: 300;
      text-decoration: none;
    }

    a.active {
      color: #fff;
      font-weight: 500;
    }
  }

  li:not(:last-child):after {
    content: '/';
    position: absolute;
    right: -15px;
    bottom: 0;
    color: #A6A6A6;
    font-size: 18px;
  }
}
</style>
