<template>
  <Nav></Nav>
  <div class="about">
    <Carousel></Carousel>
    <div class="profile">
      <div class="profile-pic">
        <img src="https://picsum.photos/250/250/?random=10" alt="">
      </div>

      <div class="introduction">
        <div class="ch-txt">
          <h2>施友筌</h2>
          <p>攝影師、影音工作者。2022年畢業於明志科技大學視覺傳達設計系，大三時，曾於策展公司「築點設計」擔任設計助理一職，現為自由工作者。熱愛台灣山林，經常從事戶外運動，</p>
        </div>
        <div class="eng-txt">
          <h2>SYC (Shih Yu Chuan)</h2>
          <p>Photographer, Videographer. Graduated from Ming Chi University of Technology Visual Communication Design
            Department in 2022, assigned as design assistant at “archicake design” in the 3rd grade, freelancing
            currently. Obsessed with the nature beauty of Taiwan, commonly go for outdoor activities.</p>
        </div>

      </div>

      <div class="experience">
        <div class="ch-txt">
          <h2>經歷</h2>
          <p>築點設計/設計助理</p>
        </div>
        <div class="eng-txt">
          <h2>Experience</h2>
          <p>archicake design assistant</p>
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
  name: 'HomeView',
  components: {
    Nav, Footer, Carousel
  },
  mounted() {
    try {
      // 这里是你的代码
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped lang="scss">
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

  .introduction .ch-txt,
  .experience .ch-txt {
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

    .introduction .ch-txt,
    .experience .ch-txt {
      height: auto;
      margin-bottom: 35px;
    }
  }

}</style>
