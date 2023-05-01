import BreadCrumbs from '../components/BreadCrumbs.vue'
export default {
  components: {
    BreadCrumbs
  },
  computed: {
    // 監聽url的route.params.category
    category() {
      return this.$route.params.category
    }
  },
  methods: {
    // 獲取google sheets資料
    getProjectData(Data, sheetName) {
      const sheetId = '1Qvk6q6zxcVPyCg7hz782qem1zADCnIr_7JtCCBMslw8'
      // const asd = projectData
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}`
      this.$http.get(url, { params: { key: `${process.env.VUE_APP_SHEET_KEY}` } })
        .then((res) => {
          const data = []
          console.log(res.data.values)
          res.data.values.forEach((i) => {
            data.push({
              category: i[0],
              title: i[1],
              imgList: JSON.parse(i[2]),
              video: i[3],
              description: i[4],
              preview: i[5],
              date: new Date(i[6])
            })
          })
          Data = data
          this.filterList(Data)
        })
    },
    filterList(data) {
      // 篩選分類列表
      this.showData = data.filter((i) => {
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
  }
}
