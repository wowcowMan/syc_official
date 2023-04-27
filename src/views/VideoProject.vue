<template>
  <div class="container">
    <div class="link-wrap">
      <router-link to="/worksboard/gallery">gallery</router-link>
      <router-link to="/worksboard/photography/all/list">photography</router-link>
      <router-link to="/worksboard/videography/all/list" class="active">videography</router-link>
    </div>
    <BreadCrumbs @emit-category="showList"></BreadCrumbs>
    <router-view :data="categoryData"></router-view>
  </div>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs.vue'
export default {
  components: {
    BreadCrumbs
  },
  data() {
    return {
      videoData: []
    }
  },
  computed: {
    // 篩選資料
    categoryData() {
      if (this.$route.params.category === 'all') {
        return this.videoData
      } else {
        return this.videoData.filter(i => i.category === this.$route.params.category)
      }
    }
  },
  methods: {
    showList(category) {
      this.$router.push(`/worksboard/videography/${category}/list`)
    }
    // getProjectData() {
    //   const sheetId = '12EITfEG3X6A8OAT146zAaayNE_wAhewpuFlb0wJL0Cs'
    //   // const asd = projectData
    //   const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1`
    //   this.$http.get(url, { params: { key: 'AIzaSyBdjPypTptcwPIhBI34Tt4-4YqXci_ayFk' } })
    //     .then((res) => {
    //       const data = []
    //       // console.log(res.data.values)
    //       res.data.values.forEach((i) => {
    //         data.push({
    //           category: i[0],
    //           title: i[1],
    //           imgList: JSON.parse(i[2]),
    //           description: i[3],
    //           preview: i[4]
    //         })
    //       })
    //       this.videoData = data
    //     })
    // }
  },

  created() {
    // this.getProjectData()
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
}
</style>
