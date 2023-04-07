<template>
  <!-- <h1>hello</h1> -->
  <div class="nav">
    <div class="logo"><router-link to="/">syc.</router-link></div>
    <div class="menu-btn" :class="isActive" @click="closeNav">
      <div class="burger"></div>
    </div>
    <ul ref="navList" class="nav-list" :class="isActive">
      <li class="nav-item"><router-link to="/">home</router-link></li>
      <li class="nav-item"><router-link to="/about">about</router-link></li>
      <li class="nav-item"><a href="#">works</a></li>
      <li class="nav-item"><a href="#">contact</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isShow: false,
      isActive: ''
    }
  },
  methods: {
    closeNav() {
      if (this.isShow === true) {
        this.isShow = false
        this.isActive = ''
      } else {
        this.isShow = true
        this.isActive = 'active'
      }
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
  padding: 50px 50px;
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

  ul::before {
    content: '';
    // border: 1px solid blue;
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
  }

  ul {
    background: rgb(38, 38, 38);
    box-sizing: border-box;
    list-style: none;
    width: 0;
    height: 100vh;
    padding: 50px 0;
    margin-top: 8px;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: -9px;
    transition: all .3s ease;
    // z-index: 5;

    li {
      width: 65%;
      padding: 25px 0px 25px 50px;

      a {
        display: block;
        text-decoration: none;
        text-align: left;
        font-size: 24px;
        font-weight: 300;
        color: aliceblue;
        opacity: .7;
        transition: all .3s;
        width: 100px;
      }

      a:hover {
        text-shadow: 0 0 8px #DADADA;
        opacity: 1;
      }
    }
  }

  ul.active {
    width: 300px;
  }
}
</style>
