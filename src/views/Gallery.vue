<template>
  <div class="gallery">
    <router-link class="recent" :to="`/worksboard/${recentData.type}/${recentData.category}/${recentData.title}`">
      <div class="pic">
        <img :src="recentData.preview" alt="preview-img">
      </div>
      <div class="txt">
        <h3>{{ recentData.title }}</h3>
        <p>{{ recentData.description }}</p>
      </div>
      <span>As of recently...</span>
    </router-link>

    <div class="list-wrap video-list">
      <div class="link-wrap">
        <p>videography</p>
        <router-link to="/worksboard/videography/all">查看更多...</router-link>
      </div>
      <ul>
        <li v-for="(i, key) in galleryData[0]" :key="key">
          <router-link :to="`/worksboard/${i.type}/${i.category}/${i.title}`" @click="emitProject(i.title)">
            <div class="pic">
              <img :src="i.preview" alt="">
            </div>
            <p>{{ i.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="list-wrap photo-list">
      <div class="link-wrap">
        <p>photography</p>
        <router-link to="/worksboard/photography/all">查看更多...</router-link>
      </div>
      <ul>
        <li v-for="(i, key) in galleryData[1]" :key="key">
          <router-link :to="`/worksboard/${i.type}/${i.category}/${i.title}`" @click="emitProject(i.title)">
            <div class="pic">
              <img :src="i.preview" alt="">
            </div>
            <p>{{ i.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  props: {
    galleryData: {
      type: Array
    },
    recentData: {
      type: Object
    }
  },
  data() {
    return {
      tempData: {}
    }
  },
  methods: {
    emitProject(project) {
      this.$emit('emit-project', project)
    }
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
.gallery {
  .recent {
    // position: absolute;
    // top: 0;
    // left: 50%;
    // transform: translateX(-50%);
    display: block;
    width: 100%;
    max-width: 1280px;
    position: relative;

    .pic {
      position: relative;

      img {
        filter: grayscale(70%);
        width: 100%;
      }
    }

    .pic:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }

    .txt {
      text-decoration: none;
      position: absolute;
      right: 50px;
      bottom: 50px;
      max-width: 400px;
      color: #fff;

      h3 {
        font-size: 48px;
        margin-bottom: 5px;
      }
    }

    span {
      position: absolute;
      left: 50px;
      bottom: 50px;
      font-weight: 300;
      color: #fff;
    }

    @media screen and (max-width:768px) {
      .pic {
        img {
          aspect-ratio: 3 / 4;
          object-fit: cover;
          margin: auto;
        }
      }

      .txt {
        width: 50%;
        right: 25px;

        h3 {
          text-align: right;
          margin-bottom: 0;
          font-size: 24px;
        }

        p {
          display: none;
        }
      }

      span {
        left: 25px;
        font-size: 14px;
      }
    }
  }

  .list-wrap {
    margin: 75px 0;
    padding: 0 50px;
    .link-wrap{
      display: flex;
      align-items: flex-end;
      p{
        font-size: 18px;
        color: #fff;
      }
      a{
        margin: 0 25px;
        color: #DADADA;
        font-size: 10px;
        text-decoration: none;
      }
    }
    @media screen and (max-width:768px){
      .link-wrap{
        justify-content: space-between;
        a{
          margin: 0 0 0 25px;
        }
      }
    }
    ul {
      display: grid;
      grid-gap: 20px;
      margin-top: 25px;

      a {
        text-decoration: none;

        .pic {
          overflow: hidden;
          margin-bottom: 25px;

          img {
            transition: all .3s ease;
          }
        }

        p {
          text-align: center;
          color: #fff;
        }
      }

      a:hover img {
        transform: scale(1.1);
      }
    }
  }

  .video-list {

    ul {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

      .pic {
        aspect-ratio: 3/4;

        img {
          height: 100%;
        }
      }
    }
  }

  .photo-list {
    ul {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      .pic {
        aspect-ratio: 16/9;

        img {
          width: 100%;
        }
      }
    }
  }
}</style>
