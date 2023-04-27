<template>
  <div class="container">
    <div class="link-wrap">
      <router-link to="/worksboard/gallery">gallery</router-link>
      <router-link to="/worksboard/photography/all/list" class="active">photography</router-link>
      <router-link to="/worksboard/videography/all/list">videography</router-link>
    </div>
    <BreadCrumbs></BreadCrumbs>
    <router-view :showData="showData" :showProject="showProject" @emit-project="filtreProject">
    </router-view>
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
      photoData: [],
      showData: [],
      showProject: {}
    }
  },
  computed: {
    // 監聽url的route.params.category
    category() {
      return this.$route.params.category
    }
  },
  watch: {
    // 當route.params.category變動時更新分類列表
    category(newCategory, oldCategory) {
      if (newCategory === 'all') {
        this.showData = this.photoData
      } else {
        this.showData = this.photoData.filter((i) => i.category === newCategory)
      }
    }
  },
  methods: {
    // 獲取google sheets資料
    getProjectData() {
      const sheetId = '1gMXfxr7Zu8gVS_JdSYEPIBu7BadTy-BFdC5_S_O44_0'
      // const asd = projectData
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1`
      this.$http.get(url, { params: { key: `${process.env.VUE_APP_SHEET_KEY}` } })
        .then((res) => {
          const data = []
          // console.log(res.data.values)
          res.data.values.forEach((i) => {
            data.push({
              category: i[0],
              title: i[1],
              imgList: JSON.parse(i[2]),
              description: i[3],
              preview: i[4]
            })
          })
          this.photoData = data
          this.filterList()
        })
    },
    filterList() {
      // 篩選分類列表
      this.showData = this.photoData.filter((i) => {
        if (this.category === "all") {
          return i.category
        } else {
          return i.category === this.category
        }
      })
      // 根據route.params.project篩選當前顯示專案（專案頁面重整時需要）
      this.showProject = this.showData.filter((i) => i.title === this.$route.params.project)[0]
    },
    // 接收emit篩選當前顯示專案
    filtreProject(title) {
      this.showProject = this.showData.filter((i) => i.title === title)[0]
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
