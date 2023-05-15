<template>
  <ul class="project-list" :class="typeList === type ? 'photography' : 'videography'">
    <li v-for="(item, key) in categoryData" :key="key">
      <router-link :to="`/worksboard/${type}/${item.category}/${item.title}`" @click="emitProject(item.title)">
        <div class="pic">
          <img :src="item.preview" alt="preiew-img">
        </div>
        <div class="txt">
          <p>{{ item.title }}</p>
          <span v-if="typeList !== type">{{ item.description }}</span>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'projectList',

  props: {
    categoryData: {
      type: Array
    }
  },
  data() {
    return {
      typeList: 'photography'
    }
  },
  computed: {
    type() {
      return this.$route.params.type
    },
    category() {
      return this.$route.params.category
    }
  },
  watch: {
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
.project-list {
  width: 100%;

  li {
    box-sizing: border-box;

    a {
      width: 100%;
      text-decoration: none;
      .pic {
        img {
          width: 100%;
          object-fit: cover;
          object-position: center;
          vertical-align: middle;
        }
      }
      .txt {
        color: #fff;
      }
    }
  }
}

.photography {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  li {

    a {
      display: block;
      .pic {
        aspect-ratio: 1/1;
        overflow: hidden;

        img {
          aspect-ratio: 1/1;
          transition: all .3s ease;
        }
      }

      .txt {
        // border: 1px solid red;
        p {
          text-decoration: none;
          text-align: center;
          padding: 10px 0;
        }
      }
    }

    a:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
}

.videography {
  li {
    margin-bottom: 50px;
    a {
      display: flex;
      .pic {
        box-sizing: border-box;
        width: 50%;
        margin-right: 25px;
        transition: all .3s;

        img {
          aspect-ratio: 16/9;
        }
      }

      .txt {
        width: 50%;
        p {
          font-size: 32px;
          margin-bottom: 25px;
        }

        span {
          font-size: 12px;
          line-height: 1.5;
        }
      }
    }

    a:hover {
      .pic {
        width: 65%;
      }

      .txt {
        width: 35%;
        span{
          font-size: 16px;
        }
      }
    }

    @media screen and (max-width:768px) {
      a {
        display: block;

        .pic {
          overflow: hidden;
          width: 100%;
          margin-bottom: 5px;

          img {
            transition: all .3s;
          }
        }

        .txt {
          width: 100%;

          p {
            margin-bottom: 10px;
            font-size: 24px;
          }
        }
      }

      a:hover {
        .pic {
          width: 100%;

          img {
            transform: scale(1.1);
          }
        }

        .txt {
          width: 100%;
        }
      }
    }
  }
}</style>
