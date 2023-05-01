<template>
  <ul class="category-list">
    <li v-for="(i, key) in categoryList" :key="key">
      <!-- <router-link :to="`/worksboard/${type}/${i}`" :class="{ active: category === i }">{{ i }}</router-link> -->
      <router-link :to="`/worksboard/${type}/${i}`" :class="{ 'active': category === i }" @click="click(i)">{{ i
      }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  // props: ['type'],
  data() {
    return {
      categoryList: [
        'all', 'landscape', 'commercial', 'documentary'
      ]
      // isActive: 'all'
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

  methods: {
    click(category) {
      this.$emit('emit-category', category)
      // this.isActive = this.category
    }
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
.category-list {
  display: flex;
  margin-bottom: 15px;

  li {
    position: relative;
    margin-right: 20px;

    a {
      cursor: pointer;
      background: none;
      border: none;
      color: #A6A6A6;
      font-weight: 300;
      text-decoration: none;
    }

    a.active {
      color: #fff;
      font-weight: 500;
    }
  }

  li:not(:last-child):after {
    content: '/';
    position: absolute;
    right: -15px;
    bottom: 0;
    color: #A6A6A6;
    font-size: 18px;
  }
}

;
</style>
