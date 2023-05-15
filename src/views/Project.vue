<template>
  <div class="wrap" :class="typeList === type ? 'photography' : 'videography'">
    <iframe v-if="typeList !== type" :src="`https://www.youtube.com/embed/${projectData.video}`" allowfullscreen></iframe>
    <ul class="project">
      <li v-for="(i, key) in projectData.imgList" :key="key">
        <img :src="i" alt="project-img">
      </li>
    </ul>
    <div class="txt" :class="{ active: isActive }">
      <button v-if="typeList === type" type="button" @click.prevent="isActive = !isActive">內文展開</button>
      <h3 v-if="typeList !== type">{{ projectData.title }}</h3>
      <p>{{ projectData.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectData: {
      type: Object
    }
  },
  data() {
    return {
      tempData: {},
      typeList: 'photography',
      isActive: false
    }
  },
  computed: {
    type() {
      return this.$route.params.type
    }
  },
  created() {
    this.tempData = this.projectData
  }
}
</script>

<style scoped lang="scss">
.wrap.photography {
  position: relative;
  display: flex;
  align-items: flex-start;

  ul {
    width: 65%;

    li {
      margin-bottom: 25px;

      img {
        width: 100%;
      }
    }
  }

  .txt {
    box-sizing: border-box;
    position: sticky;
    width: 35%;
    padding: 25px;
    right: 10px;
    top: 0px;

    button {
      display: none;
    }

    p {
      color: #fff;
      font-size: 18px;
    }
  }
}

@media screen and (max-width:768px) {
  .wrap.photography {
    display: block;

    ul {
      width: 100%;
    }

    .txt {
      // border: 1px solid red;
      position: fixed;
      background: rgba($color: #000000, $alpha: .9);
      width: 25px;
      height: 100px;
      top: 235px;
      right: 0;
      overflow: hidden;
      padding-right: 0;

      button {
        cursor: pointer;
        display: block;
        // background: #fff;
        background: rgba(166, 166, 166, .5);
        position: absolute;
        left: 0px;
        top: 0;
        width: 25px;
        height: 100px;
        border: none;
        border-radius: 8px 0 0 8px;
        color: transparent;
      }

      button::after {
        content: '內文展開';
        display: block;
        position: absolute;
        left: 3px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        color: #A6A6A6;
      }
    }

    .txt.active {
      width: 100%;
      height: auto;
      padding: 25px 50px;

      button {
        // border: 1px solid red;
        background: none;
        border-radius: 0 8px 8px 0;
        width: 20px;
        height: 30px;
        top: 25px;
      }

      button::after {
        content: '';
        display: block;
        position: absolute;
        left: 7px;
        top: 50%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 15px 0 15px 7px;
        border-color: transparent transparent transparent #A6A6A6;
      }

      p {
        display: block;
      }
    }
  }
}

.wrap.videography {
iframe{
  border: none;
  width: 100%;
  aspect-ratio: 4/3;
  // height: 100%;
}
  // border: 1px solid red;
  ul {
    li {
      margin-bottom: 25px;

      img {
        width: 100%;
      }
    }
  }

  .txt {
    box-sizing: border-box;

    h3 {
      font-size: 64px;
      color: #fff;
    }

    p {
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>
