<template>
  <div class="container">
    <div class="link-wrap">
      <router-link to="/worksboard/gallery">gallery</router-link>
      <router-link to="/worksboard/photography/all/list">photography</router-link>
      <router-link to="/worksboard/videography/all/list" class="active">videography</router-link>
    </div>
    <BreadCrumbs :type="type"></BreadCrumbs>
    <router-view :type=type :showData="showData" :showProject="showProject" @emit-project="filtreProject">
    </router-view>
  </div>
</template>

<script>
import getData from '../mixins/getData'
export default {
  data() {
    return {
      type: 'videography',
      videoData: [],
      showData: [],
      showProject: {}
    }
  },
  mixins: [getData],
  watch: {
    // 當route.params.category變動時更新分類列表
    category(newCategory, oldCategory) {
      if (newCategory === 'all') {
        this.showData = this.videoData
      } else {
        this.showData = this.videoData.filter((i) => i.category === newCategory)
      }
    }
  },

  created() {
    this.getProjectData(this.videoData, 'video')
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
