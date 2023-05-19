<template>
  <!-- <h1>hello</h1> -->
  <div class="nav">
    <div class="logo"><router-link to="/">syc.</router-link></div>

    <div class="menu-btn" :class="{ active: isShow }" @click="isShow = !isShow, isDrop = false">
      <div class="burger"></div>
    </div>

    <div class="list-clip" :class="{ active: isShow }" @click.self="close">
      <ul ref="navList" class="nav-list" :class="{ active: isShow }">
        <li class="nav-item">
          <router-link to="/" @click.self="close">home</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/about" @click.self="close">about</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/worksboard/gallery" @click.self="close">works</router-link>
          <button @click.prevent="isDrop = !isDrop"></button>
          <ul class="work-category" :class="{ active: isDrop }">
            <!-- <li><a href="#">photography</a></li> -->
            <!-- <li><a href="#">videography</a></li> -->
            <li><router-link to="/worksboard/photography/all" @click.self="close">photography</router-link></li>
            <li><router-link to="/worksboard/videography/all" @click.self="close">videography</router-link></li>
          </ul>
        </li>

        <li class="nav-item">
          <router-link to="/contact" @click.self="close">contact</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      isShow: false,
      isActive: '',
      isDrop: false
    }
  },
  methods: {
    close() {
      this.isShow = false
      this.isDrop = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  position: absolute;
  background: linear-gradient(180deg,
      rgba(0, 5, 5, .8) 20%,
      rgba(0, 0, 0, 0));
  box-sizing: border-box;
  width: 100%;
  padding: 50px;
  display: flex;
  height: 138px;
  justify-content: flex-end;
  top: 0;
  z-index: 5;

  // border: 1px solid blue;

  .logo {
    position: absolute;
    // top: 50px;
    right: 80px;
    margin: 0 10px;

    a {
      display: block;
      width: 115px;
      height: 50px;
      background-image: url('../assets/syc.png');
      background-repeat: no-repeat;
      background-position: 0px center;
      background-size: contain;
      text-indent: 101%;
      overflow: hidden;
      line-height: 60px;
    }
  }

  @media screen and (max-width:820px) {
    .logo {
      left: 45px;
      right: 0;
    }
  }

  .menu-btn {
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 38px;
    height: 38px;
    z-index: 20;
    transition: transform .3s;

    .burger {
      pointer-events: none;
      width: 100%;
      height: 3px;
      background: #fff;
      z-index: 4;
      transition: all .3s;
    }

    .burger::before,
    .burger::after {
      pointer-events: none;
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 3px;
      background: #fff;
      transition: transform .3s;
    }

    .burger::before {
      transform: translateY(16px);
    }

    .burger::after {
      transform: translateY(-16px);
    }
  }

  .menu-btn.active {
    position: fixed;
    right: 50px;
    top: 50px;

    .burger {
      transform: translateX(-32px);
      background: transparent;
    }

    .burger::before {
      transform: rotate(45deg) translate(23px, -23px);
    }

    .burger::after {
      transform: rotate(-45deg) translate(23px, 23px);
    }
  }

  .list-clip.active {
    width: 100%;
  }

  .list-clip {
    box-sizing: border-box;
    width: 0;
    height: 100vh;
    margin-top: 8px;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: -9px;
    transition: all .3s ease;

    .nav-list::before {
      content: '';
      display: block;
      width: 115px;
      height: 50px;
      margin-left: 50px;
      background-image: url('../assets/syc.png');
      background-repeat: no-repeat;
      background-position: 0px center;
      background-size: contain;
      text-indent: 101%;
      overflow: hidden;
      line-height: 60px;
      // border: 1px solid blue;
    }

    .nav-list {
      box-sizing: border-box;
      background: rgb(38, 38, 38);
      list-style: none;
      width: 0;
      margin-left: auto;
      margin-right: 0;
      height: 100%;
      padding: 50px 0;
      transition: all .3s ease;

      li {
        position: relative;
        width: 65%;
        padding: 25px 0px 25px 50px;

        a {
          // border: 1px solid red;
          display: block;
          text-decoration: none;
          text-align: left;
          font-size: 24px;
          font-weight: 300;
          color: aliceblue;
          opacity: .7;
          transition: all .3s;
          width: 80px;
        }

        a:hover {
          text-shadow: 0 0 8px #DADADA;
          opacity: 1;
        }

        button {
          cursor: pointer;
          display: block;
          position: absolute;
          top: 30px;
          left: 135px;
          background: none;
          border: none;
          width: 20px;
          height: 20px;
          // border: 1px solid red;
        }

        button::after {
          content: '';
          display: block;
          width: 0;
          height: 0;
          margin: auto;
          border-style: solid;
          border-width: 7px 5px 0 5px;
          border-color: #DADADA transparent transparent transparent;
        }

        .work-category {
          box-sizing: border-box;
          // border: 1px solid red;
          height: 0;
          overflow: hidden;
          transition: height .3s ease;

          li {
            padding: 0;
            margin: 25px 25px 25px 25px;

            a {
              font-size: 20px;
            }
          }
        }

        .work-category.active {
          height: 105px;
        }
      }
    }

    .nav-list.active {
      width: 300px;
    }

    @media screen and (max-width:820px) {
      .nav-list::before {
        margin: 0;
        margin-top: -150px;
      }

      .nav-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        li {
          padding: 25px 0;
          // border: 1px solid blue;

          a {
            margin: 0 auto;
          }

          button {
            // border: 1px solid blue;
            left: 60%;
          }

          .work-category li {
            margin-left: 22%;
          }
        }
      }

      .nav-list.active {
        width: 100%;
      }
    }
  }
}
</style>
