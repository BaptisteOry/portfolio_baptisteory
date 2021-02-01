<template>
  <nav id="nav">
    <div class="menu_scroll menu_scroll_top">
      <ul>
        <template v-for="index in 6">
          <li class="nav-item" :key="'home'+index">
            <router-link to="/">Accueil</router-link>
          </li>
          <li class="nav-item" :key="'about'+index">
            <router-link to="/a-propos">À propos</router-link>
          </li>
          <li class="nav-item" :key="'portfolio'+index">
            <router-link to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item" :key="'contact'+index">
            <router-link to="/contact">Contact</router-link>
          </li>
        </template>
      </ul>
    </div>
    <div class="menu_scroll menu_scroll_bottom">
      <ul>
        <template v-for="index in 3">
          <li class="nav-item" :key="'linkedin'+index">
            <a href="https://www.linkedin.com/in/baptisteory/" target="_blank">LinkedIn</a>
          </li>
          <li class="nav-item" :key="'youtube'+index">
            <a href="https://www.youtube.com/channel/UCs5xt05XSaONh9Xj0eTakoA" target="_blank">YouTube</a>
          </li>
          <li class="nav-item" :key="'github'+index">
            <a href="https://github.com/BaptisteOry" target="_blank">GitHub</a>
          </li>
          <li class="nav-item" :key="'instagram'+index">
            <a href="https://www.instagram.com/baptisteory/" target="_blank">Instagram</a>
          </li>
        </template>
      </ul>
    </div>
    <transition name="slide_arrow">
      <router-link class="menu_arrow menu_arrow_left" v-show="this.$route.meta.id > 0"
        :to="{ path: ($router.options.routes[this.$route.meta.id-1 >= 0 ? this.$route.meta.id-1 : 0]).path}">
        <font-awesome-icon icon="chevron-left" />
      </router-link>
    </transition>
    <transition name="slide_arrow">
      <router-link class="menu_arrow menu_arrow_right" v-show="this.$route.meta.id < 3"
        :to="{ path: ($router.options.routes[this.$route.meta.id+1 <= 3 ? this.$route.meta.id+1 : 3]).path}">
        <font-awesome-icon icon="chevron-right" />
      </router-link>
    </transition>
  </nav>
</template>

<script>
  export default {
    name: 'Nav'
  }
</script>

<style scoped lang="scss">

/*------------------------------
Menu scroll (scrolling menus)
------------------------------*/

  #nav {
    color: white;
    text-transform: uppercase;
    z-index: 2;
  }

  .menu_scroll {
    position: fixed;
    width: 100%;

    &.menu_scroll_top {
      top: 0px;

      li:nth-child(1) {
        animation: bannermove 40s linear infinite;
      }
    }

    &.menu_scroll_bottom {
      bottom: 0px;
      transform: rotate(180deg);

      li {
        transform: rotate(180deg);
      }

      li:nth-child(1) {
        animation: bannermove 20s linear infinite;
      }
    }

    >ul {
      background-color: #F1B500;
      padding: 15px 0 15px 0;
      position: absolute;
      white-space: nowrap;

      >li {
        display: inline-block;
        font-size: 2em;
        font-weight: 900;
        letter-spacing: 2px;
        list-style-type: none;
        padding: 0 20px;
        position: relative;
        text-align: center;

        >a {
          color: white;
          display: inline-block;

          &:hover {
            transition: transform .3s;
            cursor: pointer;
            text-shadow: 1.5px 1.5px 8px rgba(0, 0, 0, 0.3);
            transition: text-shadow .2s;
          }

          &.router-link-exact-active {
            text-shadow: none;
            cursor: default;
            transform: scaleX(-1);
            transition: transform .4s;
          }
        }
      }

      &:hover{
        >li:nth-child(1) {
          animation-play-state: paused;
        }
      }
    }
  }

  @keyframes bannermove {
    0% {
      margin-left: 0px;
    }

    100% {
      margin-left: -33.33%;
    }
  }

  @-webkit-keyframes bannermove {
    0% {
      margin-left: 0px;
    }

    100% {
      margin-left: -33.33%;
    }
  }

/*------------------------------
Menu arrow (sliders horizontal)
------------------------------*/

  .menu_arrow {
    top: 50% !important;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 3em;
    height: 100px;
    line-height: 100px;
    position: fixed;
    z-index: 2;

    >svg {
      color: #FFFFFF;
      position: relative;
      z-index: 2;
    }

    &::after {
      background-color: transparent;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
    }

    &.menu_arrow_right {
      padding: 0 5px 0 15px;
      right: 0px;

      &::after {
        right: -100%;
        border-radius: 50px 0 0 50px;
      }
    }

    &.menu_arrow_left {
      padding: 0 15px 0 5px;
      left: 0px;

      &::after {
        left: -100%;
        border-radius: 0 50px 50px 0;
      }
    }

    &:hover {
      >svg {
        color: #097487;
        transition: color .3s;
      }

      &::after {
        background-color: #FFFFFF;
        box-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.3);
        right: 0px;
        transition: right .3s, left .3s, background-color .3s;
      }

      &.menu_arrow_right::after {
        right: 0px;
      }

      &.menu_arrow_left::after {
        left: 0px;
      }
    }

    &.slide_arrow-enter-active,
    &.slide_arrow-leave-active {
      transition: left .8s, right .8s;
    }

    &.slide_arrow-enter.menu_arrow_left,
    &.slide_arrow-leave-to.menu_arrow_left {
      left: -50px;
    }

    &.slide_arrow-enter.menu_arrow_right,
    &.slide_arrow-leave-to.menu_arrow_right {
      right: -50px;
    }
  }

/*------------------------------
Responsiveness
------------------------------*/

  @media only screen and (max-width: 992px) {
    .menu_scroll>ul>li {
      font-size: 1em;
      padding: 0 10px;
    }

    .menu_arrow {
      font-size: 2.5em;
    }
  }

    @media only screen and (max-width: 576px) {
    .menu_arrow {
      font-size: 2em;
    }
  }

</style>
