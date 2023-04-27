<template>
  <div class="container-fluid">
    <div class="container profile-wrap">
      <form v-for="(item, key) in profiles" :key="key" class="mb-5" @submit.prevent="updateProfile(item.id)">
        <h3>{{ item.title }}</h3>
        <div class="mb-3" v-if="item.description === 'intro'">
          <h5 for="name" class="form-label">名稱：</h5>
          <label v-if="tempProfile.title !== item.title">{{ item.author }}</label>
          <input v-model="tempProfile.author" type="text" class="form-control" id="name"
            v-if="tempProfile.title === item.title">
        </div>
        <div class="mb-3">
          <h5 for="content" class="form-label">內容：</h5>
          <p v-if="tempProfile.title !== item.title">{{ item.content }}</p>
          <textarea v-model="tempProfile.content" type="text" class="form-control" id="content"
            v-if="tempProfile.title === item.title" style="height:100px;"></textarea>
        </div>
        <div class="row"><button type="button" class="btn btn-primary col mb-3" @click.prevent="editfile(item)">
            edit
          </button></div>
        <div class="row" v-if="tempProfile.title === item.title">
          <button type="submit" class="btn btn-success col">Submit</button>
          <button type="button" class="btn btn-danger col" @click.prevent="tempProfile = {}">cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profiles: [],
      tempProfile: {},
      update: {}
    }
  },
  methods: {
    getProfiles() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles`
      this.$http.get(api).then((res) => {
        // console.log(res.data)
        this.profiles = res.data.articles.reverse()
        this.profiles.forEach(item => {
          this.getArticle(item)
        })
      })
    },
    getArticle(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`
      this.$http.get(api).then((res) => {
        // console.log('aticle:', res.data)
        item.content = res.data.article.content
      })
    },
    // addProfile() {
    //   const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`
    //   this.$http.post(api, { data: this.tempProfile })
    //     .then((res) => {
    //       console.log(res.data)
    //     })
    // },
    editfile(item) {
      this.tempProfile = { ...item }
    },
    updateProfile(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${id}`
      // console.log(api)
      this.$http.put(api, { data: this.tempProfile })
        .then((res) => {
          // console.log(res.data)
          if (res.data.success) {
            this.tempProfile = {}
            // console.log('submit')
            this.getProfiles()
          }
        })
    }
  },
  created() {
    this.getProfiles()
  }
}
</script>

<style scoped lang="scss">
@import "../assets/all.scss";

.container-fluid {
  // background: #000;
  background: #000;
  padding: 50px;
}

.profile-wrap {
  width: 50%;
  color: #fff;
  // color: #000;
}

@media screen and (max-width:820px) {
  .profile-wrap {
    width: auto;
    color: #fff;
    // color: #000;
  }
}

.profile-wrap input,
.profile-wrap textarea {
  border: 1px solid #fff;
}
</style>
