<template>
  <transition name="fade" appear>
    <section class="row no-gutters project" @click="isProjectActive()" v-if="isProjectActive()">
      <div class="project_desc col-lg-6">
        <div class="content">
          <font-awesome-icon icon="file-code" v-if="types.includes('prog')" />
          <font-awesome-icon icon="paint-brush" v-if="types.includes('design')" />
          <font-awesome-icon icon="video" v-if="types.includes('video')" />
          <font-awesome-icon icon="ellipsis-h" v-if="types.includes('divers')" />
          <h2>{{ name }}</h2>
          <p class="project_desc_resume">{{ description }}</p>
          <a v-for="link in links" :key="link.name" :href="link.location" target="_blank">{{ link.name }}</a>
        </div>
      </div>
      <div class="project_illustration col-lg-6">
        <div class="project_video" v-if="illustration.video">
          <iframe width="560" height="315" :src="illustration.video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div class="project_image" v-else-if="illustration.image">
          <img :src="require('@/assets/' + illustration.image + '')" :alt="name">
        </div>
      </div>
    </section>
   </transition>
</template>

<script>

  export default {
    name: 'Project',
    props: {
      types: Array,
      name: String,
      description: String,
      links: Array,
      illustration: Object,
      categories: Object
    },
    methods: {
      /* Return if this project is active (selected category) */
      isProjectActive () {
        const categories = this.categories
        const catActivated = (e) => categories[e] === true
        const allDisactivate = (e) => e === false
        return this.types.some(catActivated) || Object.values(categories).every(allDisactivate)
      }
    }
  }

</script>

<style scoped lang="scss">

  h2 {
    color: #097487;
    font-weight: 900;
    letter-spacing: .05em;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
    -webkit-text-stroke: 2px #FFFFE3;
    transition: text-shadow 500ms;
    transition-delay: 400ms;
    font-size: 3em;
    margin: 12px 0 16px 0;
    -webkit-text-stroke: 1.5px #FFFFE3;
    text-shadow: 0 0 #FFFFE3, 1.5px 1.5px 0 #FFFFE3, 2.5px 2.5px 0 #FFFFE3, 3.5px 3.5px 0 #FFFFE3, 4.5px 4.5px 0 #FFFFE3, 0 0 rgba(33, 33, 33, 0.5), 4.5px 4.5px 0 rgba(33, 33, 33, 0.5), 5.5px 5.5px 0 rgba(33, 33, 33, 0.5), 6.5px 6.5px 0 rgba(33, 33, 33, 0.5);
  }

  .project_desc {
    display: flex;
    align-items: center;
    justify-content: center;

    >.content {
      margin: 30px auto;
      text-align: center;
      width: 70%;

      >a {
        color: #FFFFFF;
        display: inline-block;
        font-weight: 600;
        padding: 4px 8px;

        &:hover {
          color: #FFFFFF;
          text-decoration: none;
          border-radius: 4px;
          background-color: #097487;
          transition: all .2s;
        }
      }

      svg {
        font-size: 2em;
        margin: 0 5px;
      }

      .project_desc_resume {
        margin-bottom: 12px;
      }
    }
  }

  .project_illustration {
    .project_image>img {
      display: block;
      width: 100%;
    }

    .project_video {
      position: relative;
      padding-bottom: 56.25%;
      padding-top: 0px;
      height: 0;
      overflow: hidden;

      >iframe,
      >object,
      >embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    #portfolio .content {
      width: 80%;
    }
  }

</style>
