<template>
  <section id="home" ref="bgEffect" class="flexbox-center">
    <transition name="fade" appear>
      <div class="container">
        <div id="home_icons">
          <router-link to="/a-propos">
            <font-awesome-icon icon="user-alt" />
          </router-link>
          <router-link to="/portfolio">
            <font-awesome-icon icon="book-open" />
          </router-link>
          <router-link to="/contact">
            <font-awesome-icon icon="hands-helping" />
          </router-link>
        </div>
        <h1 ref="shadowEffect">Baptiste Ory</h1>
        <p id="copyright">© 2021</p>
        <p id="entitled">Étudiant en multimédia</p>
      </div>
    </transition>
  </section>
</template>

<script>

  export default {
    name: 'Home',
    mounted () {
      this.$parent.createBgEffect(this.$refs.bgEffect)
      this.$refs.shadowEffect.className += ' shadow'
    }
  }

</script>

<style scoped lang="scss">

  #home {
    padding: 0 12px;
  }

  #home_icons {
    font-size: 2em;
    position: relative;
    right: 10px;

    a {
      color: #FFFFFF;
      margin-right: 1em;

      &:hover {
        color: #097487;
        cursor: pointer;
        transition: color .2s;
      }
    }
  }

  h1 {
    font-size: 8em;
    text-align: left;
  }

  #entitled {
    color: white;
    font-size: 2em;
    margin: 25px 0 40px 0;
    text-align: right;
    width: 100%;

    &::before {
      content: '';
      background-color: white;
      display: block;
      margin-left: 60%;
      position: relative;
      top: -16px;
      right: 0;
      height: 4px;
      width: 40%;
    }
  }

  #copyright {
    color: white;
    font-size: 1.2em;
    margin: -3px 0 0 25px;
    text-align: left;
    width: 100%;
  }

  #home_icons,
  h1,
  #copyright,
  #entitled {
    transform: rotate(-12deg);
  }

  .fade-enter-active, .fade-leave-active {
    transition-delay: .2s;
  }

/*------------------------------
Responsiveness
------------------------------*/

  @media only screen and (max-width: 992px) {
    h1 {
      font-size: 5em;

      &.shadow {
        text-shadow: 0 0 #FFFFE3, 2px 2px 0 #FFFFE3, 3px 3px 0 #FFFFE3, 4px 4px 0 #FFFFE3, 5px 5px 0 #FFFFE3, 6px 6px 0 #FFFFE3, 7px 7px 0 #FFFFE3, 8px 8px 0 #FFFFE3, 0 0 rgba(33, 33, 33, 0.5), 8px 8px 0 rgba(33, 33, 33, 0.5), 9px 9px 0 rgba(33, 33, 33, 0.5), 10px 10px 0 rgba(33, 33, 33, 0.5), 11px 11px 0 rgba(33, 33, 33, 0.5), 12px 12px 0 rgba(33, 33, 33, 0.5), 13px 13px 0;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    #home_icons {
      bottom: 10px;

      a {
        margin-right: .5em;
      }
    }

    h1 {
      font-size: 3.5em;
      -webkit-text-stroke: 1.5px #FFFFE3;

      &.shadow {
        text-shadow: 0 0 #FFFFE3, 1.5px 1.5px 0 #FFFFE3, 2.5px 2.5px 0 #FFFFE3, 3.5px 3.5px 0 #FFFFE3, 4.5px 4.5px 0 #FFFFE3, 0 0 rgba(33, 33, 33, 0.5), 4.5px 4.5px 0 rgba(33, 33, 33, 0.5), 5.5px 5.5px 0 rgba(33, 33, 33, 0.5), 6.5px 6.5px 0 rgba(33, 33, 33, 0.5);
      }
    }

    #copyright {
      font-size: 0.8em;
      margin: -1px 0 0 18px;
    }
  }

  @media only screen and (max-width: 400px) {
    #home_icons {
      font-size: 1.5em;
    }

    h1 {
      font-size: 2.5em;
      -webkit-text-stroke: 1px #FFFFE3;

      &.shadow {
        text-shadow: 0 0 #FFFFE3, 1px 1px 0 #FFFFE3, 2px 2px 0 #FFFFE3, 0 0 rgba(33, 33, 33, 0.5), 2x 2px 0 rgba(33, 33, 33, 0.5);
      }
    }

    #entitled {
      font-size: 1.5em;
    }
  }

</style>
