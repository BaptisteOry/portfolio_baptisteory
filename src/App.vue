<template>
  <div id="app">
    <Nav />
    <main ref="testeu">
      <transition :name="this.$store.getters.getTransitionRoute">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>

  /* hoverEffect */
  import HoverEffect from 'hover-effect'

  import Nav from '@/components/Nav.vue'

  export default {
    name: 'App',
    components: {
      Nav
    },
    methods: {
      /* Create the effect for the background (Home & Contact) */
      createBgEffect (element) {
        const bgEffect = new HoverEffect({
          parent: element,
          intensity1: 0.2,
          intensity2: 0.2,
          angle2: Math.PI / 2,
          speedIn: 1.6,
          speedOut: 1.2,
          imagesRatio: 1080 / 1920,
          image1: '.',
          image2: require('@/assets/bgEffect/background_1.jpg'),
          displacementImage: require('@/assets/bgEffect/displacement/2.jpg'),
          hover: false
        })
        this.changeBg(bgEffect, 9000)
        return bgEffect
      },
      /* Change the background every x milliseconds */
      changeBg (bgEffect, time) {
        const fn = function () { bgEffect.next(); setTimeout(() => { bgEffect.previous() }, time / 2) }
        setTimeout(() => { fn() }, 400)
        setInterval(fn, time)
      }
    }
  }

</script>

<style lang="scss">

/*------------------------------
Import styles
------------------------------*/

  @import './style/normalize.css';
  @import './style/bootstrap-grid.css';
  @import '~simplebar/dist/simplebar.min.css';
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap');

/*------------------------------
General
------------------------------*/

  html {
    font-size: 100%;
    height: 100%;
  }

  body {
    height: 100%;
  }

  #app {
    background-color: #F1B500;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
    overflow: hidden;
    position: relative;
    height: 100%;

    >main {
      margin: 78px 0;
      position: relative;
      height: 100%;
      overflow: hidden;

      >section {
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;

        >div {
          z-index: 1;
        }
      }
    }
  }

  strong {
    font-weight: 600;
  }

  h1 {
    color: #097487;
    font-weight: 900;
    letter-spacing: .05em;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
    -webkit-text-stroke: 2px #FFFFE3;
    text-shadow: none;
    transition: text-shadow .5s cubic-bezier(.18,1.13,.45,1.75);
    transition-delay: .4s;

    &.shadow {
      text-shadow: 0 0 #FFFFE3, 2px 2px 0 #FFFFE3, 3px 3px 0 #FFFFE3, 4px 4px 0 #FFFFE3, 5px 5px 0 #FFFFE3, 6px 6px 0 #FFFFE3, 7px 7px 0 #FFFFE3, 8px 8px 0 #FFFFE3, 9px 9px 0 #FFFFE3, 10px 10px 0 #FFFFE3, 11px 11px 0 #FFFFE3, 12px 12px 0 #FFFFE3, 13px 13px 0 #FFFFE3, 14px 14px 0 #FFFFE3, 15px 15px 0 #FFFFE3, 0 0 rgba(33, 33, 33, 0.5), 15px 15px 0 rgba(33, 33, 33, 0.5), 16px 16px 0 rgba(33, 33, 33, 0.5), 17px 17px 0 rgba(33, 33, 33, 0.5), 18px 18px 0 rgba(33, 33, 33, 0.5), 19px 19px 0 rgba(33, 33, 33, 0.5), 20px 20px 0 rgba(33, 33, 33, 0.5), 21px 21px 0 rgba(33, 33, 33, 0.5), 22px 22px 0 rgba(33, 33, 33, 0.5), 23px 23px 0 rgba(33, 33, 33, 0.5), 24px 24px 0 rgba(33, 33, 33, 0.5), 25px 25px 0 rgba(33, 33, 33, 0.5);
    }
  }

  #about h1,
  #portfolio h1,
  #contact h1 {
    font-size: 4em;
    margin: 15px 0 15px 0;

    &.shadow {
      text-shadow: 0 0 #FFFFE3, 2px 2px 0 #FFFFE3, 3px 3px 0 #FFFFE3, 4px 4px 0 #FFFFE3, 5px 5px 0 #FFFFE3, 6px 6px 0 #FFFFE3, 7px 7px 0 #FFFFE3, 8px 8px 0 #FFFFE3, 0 0 rgba(33, 33, 33, 0.5), 8px 8px 0 rgba(33, 33, 33, 0.5), 9px 9px 0 rgba(33, 33, 33, 0.5), 10px 10px 0 rgba(33, 33, 33, 0.5), 11px 11px 0 rgba(33, 33, 33, 0.5), 12px 12px 0 rgba(33, 33, 33, 0.5);
    }
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }

  .btn-submit {
    margin: 15px 0;
    background-color: #097487;
    border-color: #097487;
    color: #FFFFFF;
    font-weight: 600;
    padding: .55rem 1.5rem;
  }

  .btn-submit:hover {
    background-color: #FFFFFF;
    border-color: #097487;
    color: #097487;
  }

  .flexbox-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-center {
    text-align: center;
  }

/*------------------------------
Transitions
------------------------------*/

  .slide_left-enter-active,
  .slide_left-leave-active,
  .slide_right-enter-active,
  .slide_right-leave-active {
    transition: 0.8s;
  }

  .slide_left-enter {
    transform: translate(-100%, 0);
  }

  .slide_left-leave-to {
    transform: translate(100%, 0);
  }

  .slide_right-enter {
    transform: translate(100%, 0);
  }

  .slide_right-leave-to {
    transform: translate(-100%, 0);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

/*------------------------------
Simplebar
------------------------------*/

  .simplebar {
    height: 100%;
    overflow-x: hidden;
  }

  .simplebar-content {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    > div {
      max-height: 100%;
    }
  }

  .simplebar-scrollbar::before {
    background-color: #FFFFFF;
  }

  .simplebar-scrollbar.simplebar-visible::before {
    opacity: 0.75;
  }

  .simplebar-dragging .simplebar-scrollbar.simplebar-visible::before {
    opacity: 1;
  }

  .simplebar-track.simplebar-vertical {
    width: 15px;
  }

/*------------------------------
Animated background
------------------------------*/

  section>canvas {
    position: absolute;
    top: 0;
    left: 0;
  }

/*
  #home,
  #contact {
    background: url("style/images/fond_photo_1.jpg"), radial-gradient(circle at 2.01% 1.95%, rgba(241, 181, 0, 0.9), transparent 100%), radial-gradient(circle at 97.99% 81.05%, rgba(241, 181, 0, 0.7), transparent 100%);
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-position: center 60%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #home::before,
  #contact::before {
    animation-name: gradOpacity;
    animation-duration: 9s;
    animation-iteration-count: infinite;
    background-color: #F1B500;
    content: '';
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  #home>div,
  #contact>div {
    z-index: 1;
  }

  @keyframes gradOpacity {
    0% {
      opacity: 1;
    }

    20% {
      opacity: 1;
    }

    40% {
      opacity: 0;
    }

    60% {
      opacity: 0;
    }

    80% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
*/

/*------------------------------
Responsiveness
------------------------------*/

  @media only screen and (max-width: 992px) {
    #app > main {
      margin: 54px 0;
    }
  }

  @media only screen and (max-width: 576px) {
    .simplebar-content {
      margin: 0 12px;
    }

    #about h1,
    #portfolio h1,
    #portfolio h2,
    #contact h1 {
      font-size: 2em;
      -webkit-text-stroke: 1px #FFFFE3;

      &.shadow {
        text-shadow: 0 0 #FFFFE3, 1.5px 1.5px 0 #FFFFE3, 2.5px 2.5px 0 #FFFFE3, 3.5px 3.5px 0 #FFFFE3, 4.5px 4.5px 0 #FFFFE3, 0 0 rgba(33, 33, 33, 0.5), 4.5px 4.5px 0 rgba(33, 33, 33, 0.5), 5.5px 5.5px 0 rgba(33, 33, 33, 0.5), 6.5px 6.5px 0 rgba(33, 33, 33, 0.5);
      }
    }
  }

</style>
