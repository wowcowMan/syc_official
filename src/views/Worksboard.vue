<template>
  <Nav></Nav>
  <div class="container">
    <div class="row">
      <div class="link-wrap" v-if="$route.params.type">
        <router-link to="/worksboard/gallery"
          :class="{ 'active': $route.params.type === 'gallery' }">gallery</router-link>

        <router-link to="/worksboard/photography/all"
          :class="{ 'active': $route.params.type === 'photography' }">photography</router-link>

        <router-link to="/worksboard/videography/all"
          :class="{ 'active': $route.params.type === 'videography' }">videography</router-link>
      </div>

      <BreadCrumbs v-if="$route.params.type"></BreadCrumbs>

      <router-view @emit-project="filterProject" :data="allData" :recentData="recentData" :categoryData="categoryData"
        :projectData="projectData"></router-view>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import BreadCrumbs from '../components/BreadCrumbs.vue'
export default {
  name: 'works',
  components: {
    Nav, Footer, BreadCrumbs
  },
  data() {
    return {
      typeLinks: ['gallery', 'photography', 'videography'],
      allData: [],
      projectData: {},
      recentData: {}
    }
  },
  computed: {
    typeData() {
      return this.allData.filter((i) => {
        return i.type === this.$route.params.type
      })
    },
    categoryData() {
      return this.typeData.filter((i) => {
        if (this.$route.params.category === 'all') {
          return i.category
        } else {
          return i.category === this.$route.params.category
        }
      })
    },
    project() {
      return this.$route.params.project
    }
  },
  watch: {
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
          console.log(res.data.values)
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
          if (this.$route.params.project) {
            this.projectData = this.categoryData.filter((i) => {
              return i.title === this.$route.params.project
            })[0]
          }
          this.filterRencent()
        })
    },
    filterProject(project) {
      this.projectData = this.categoryData.filter((i) => {
        return i.title === project
      })[0]
    },
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
  box-sizing: border-box;
  width: 100%;
  background: #000;
  padding: 150px 0 50px;

  .row {
    box-sizing: border-box;
    width: 100%;
    max-width: 1280px;
    padding: 0 50px;
    margin: auto;
  }

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
}
</style>
