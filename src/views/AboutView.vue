<template>
  <Nav></Nav>
  <div class="container">
    <div class="about">
      <Carousel></Carousel>
      <div class="profile">
        <div class="profile-pic">
          <img src="https://picsum.photos/250/250/?random=10" alt="">
        </div>
        <div class="introduction">
          <div class="txt" v-for="(i,key) in introFiles" :key="key">
            <h2>{{ i.author }}</h2>
            <p>{{ i.content }}</p>
          </div>
        </div>
        <div class="experience">
          <div class="txt" v-for="(i,key) in experientFiles" :key="key">
            <h2>{{ i.title }}</h2>
            <p>{{ i.content }}</p>
          </div>
          <!-- <div class="ch-txt">
            <h2>經歷</h2>
            <p>{{ profiles[2].content }}</p>
          </div>
          <div class="eng-txt">
            <h2>Experience</h2>
            <p>{{ profiles[3].content }}</p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Carousel from '../components/Carousel.vue'
export default {
  name: 'AboutView',
  components: {
    Nav, Footer, Carousel
  },
  data() {
    return {
      // profiles: [],
      introFiles: [],
      experientFiles: []
    }
  },
  methods: {
    getProfiles() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles`
      this.$http.get(api).then((res) => {
        // console.log(res.data)
        // this.profiles = res.data.articles.reverse()
        this.introFiles = res.data.articles.filter((item) => {
          return item.description === 'intro'
        }).reverse()
        this.experientFiles = res.data.articles.filter((item) => {
          return item.description !== 'intro'
        }).reverse()
        this.introFiles.forEach(item => {
          this.getArticle(item)
        })
        this.experientFiles.forEach(item => {
          this.getArticle(item)
        })
      })
    },
    getArticle(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${item.id}`
      this.$http.get(api).then((res) => {
        // console.log('aticle:', res.data)
        item.content = res.data.article.content
      })
    }
  },
  mounted() {
    // try {
    //   // 这里是你的代码
    // } catch (error) {
    //   console.error(error)
    // }
  },
  created() {
    this.getProfiles()
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  background: #000;
}

.about {
  padding: 150px 0;
  max-width: 1280px;
  margin: 0 auto;
  // border: 1px solid red;
}

.about-carousel {
  box-sizing: border-box;
  width: 100%;
  padding: 0 50px;
  aspect-ratio: 2.35 / 1;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    vertical-align: bottom;
  }
}

.profile {
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 50px 50px;
  color: aliceblue;

  .profile-pic {
    img {
      width: 150px;
      height: 150px;
      border-radius: 100%;
      vertical-align: bottom;
    }

  }

  .introduction {
    width: 45%;
  }

  .experience {
    width: 30%;
  }

  .introduction .txt,
  .experience .txt {
    height: 110px;
    margin-bottom: 10px;
  }

  .introduction h2,
  .experience h2 {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .introduction p,
  .experience p {
    font-size: 12px;
    font-weight: 300;
    line-height: 1.5;
  }
}

@media screen and (max-width:820px) {
  .about-carousel {
    padding: 0;
    aspect-ratio: 16 / 9;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .profile {
    display: block;
    position: relative;
    padding-top: 100px;

    .profile-pic {
      position: absolute;
      margin-bottom: 50px;
      top: -80px;
    }

    .introduction {
      width: 100%;
      margin-bottom: 35px;
    }

    .experience {
      width: 100%;
    }

    .introduction .txt,
    .experience .txt {
      height: auto;
      margin-bottom: 35px;
    }
  }

}
</style>
