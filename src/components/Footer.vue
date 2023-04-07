<template>
  <div class="footer">
    <div class="footer-content">
      <div class="contact-wrap">
        <div class="footer-logo">
          <h3>logo</h3>
          <p>simple, yet cohesive</p>
        </div>
        <div class="contact tel">
          <p>tel |</p>
          <p>{{ tel }}</p>
        </div>
        <div class="contact mail">
          <p>mail |</p>
          <p>{{ email }}</p>
        </div>
      </div>

      <div class="site-map">
        <h3>site map</h3>
        <ul>
          <li class="nav-item"><router-link to="/">home</router-link></li>
          <li class="nav-item"><router-link to="/about">about</router-link></li>
          <li><a href="#">works</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
      <div class="social">
        <h3>follow</h3>
        <ul>
          <li v-for="(item, key) in social" :key="key">
            <a target="_blank" :href="item.link">
              <i class="fa-brands" :class="item.icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-txt">
      <p>Copyright © 2022 SYC. All rights reserved</p>
      <p>developed by WowcowMan</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'syc.gallery@gamil.com',
      tel: '+886 928 135 756',
      social: [
        {
          link: 'https://reurl.cc/rRko4N',
          icon: 'fa-youtube'
        },
        {
          link: 'https://reurl.cc/GEgQ0G',
          icon: 'fa-square-facebook'
        },
        {
          link: 'https://reurl.cc/8pYz8M',
          icon: 'fa-square-instagram'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  box-sizing: border-box;
  background: #1A1A1A;
  width: 100%;
}

.footer-content {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 50px;
  margin: auto;
  max-width: 1280px;

  .contact-wrap {
    .footer-logo {
      width: 150px;
      opacity: .7;
      margin-bottom: 50px;

      h3 {
        width: 70px;
        margin-bottom: 0.1em;
        background-image: url('../assets/syc.png');
        background-repeat: no-repeat;
        background-position: 0px center;
        background-size: contain;
        text-indent: 101%;
        overflow: hidden;
        line-height: 60px;
      }

      p {
        color: aliceblue;
        font-weight: 300;
        font-size: 15px;
      }
    }

    .contact {
      margin-bottom: 10px;

      p {
        display: inline-block;
        color: aliceblue;
        font-weight: 100;
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: 0.08em;
      }
    }
  }
}

.site-map h3,
.social h3 {
  margin: 10px 0 50px;
  color: aliceblue;
  font-weight: 500;
  font-size: 16px;
  opacity: .7;
}

.site-map ul,
.social ul {
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
}

.site-map {
  width: 33%;

  li {
    a {
      color: #DADADA;
      text-decoration: none;
      font-size: 14px;
      font-weight: 300;
    }
  }
}

.social {
  width: 15%;

  h3 {
    margin: 10px 0 45px;
  }

  i {
    color: #b5b5b5;
    font-size: 25px;
  }
}

.footer-txt {
  display: flex;
  justify-content: center;
  background: #0D0D0D;
  padding: 15px 0;

  p {
    color: #DADADA;
    font-weight: 100;
    font-size: 12px;
    margin: 0 10px;
  }
}
</style>
