<template>
  <section id="about">
    <simplebar class="simplebar" data-simplebar-auto-hide="false">
      <div class="container">
        <h1 ref="shadowEffect">A propos</h1>
        <div class="row flexbox-center" id="description">
          <div class="col-lg-3 text-center">
            <transition name="fade" appear>
              <img src="@/assets/photo_baptisteOry.jpg" alt="Photo de Baptiste Ory">
            </transition>
          </div>
          <div class="col-lg-9">
            <p>
              Je porte un grand intérêt pour l'art et l'informatique depuis mon enfance. Le multimédia est donc le domaine idéal pour allier mes deux passions :
              j'adore l'intégration, la programmation, le graphisme et la vidéo ! Après un Bac Scientifique option ISN, je m'oriente vers le
              <a href="https://iutmmi.fr/" class="link" target="_blank">DUT Métiers du Multimédia et de l’Internet</a> (MMI) à Laval. Je fais mon quatrième semestre d'études à
              l'étranger, en <a href="http://www.cegep-matane.qc.ca/programmes/integration-multimedia/" class="link" target="_blank">Techniques d'intégration multimédia</a>
              au Cégep de Matane (Québec). Je suis maintenant à l'école d'ingénieur <a href="https://www.ingenieur-imac.fr/" class="link" target="_blank">IMAC</a>
              à Paris : la seule formation publique d'ingénieur alliant arts et sciences.
            </p>
          </div>
        </div>
        <div class="row" id="skills">
          <div class="col-lg-4">
            <font-awesome-icon icon="file-code" />
            <span class="skill_title">Prog. et intégration</span>
            <span>HTML, CSS, Javascript, PHP, SQL<br />Processing, Java, C / C++ / OpenGL<br />Bootstrap, JQuery,
              Three.js, p5.js<br />Vue.js, HyperApp, Wordpress, WebGL</span>
          </div>
          <div class="col-lg-4">
            <font-awesome-icon icon="paint-brush" />
            <span class="skill_title">Design, jeux et 3D</span>
            <span>Unity, Blender, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Figma</span>
          </div>
          <div class="col-lg-4">
            <font-awesome-icon icon="video" />
            <span class="skill_title">Audiovisuel</span>
            <span>Adobe Premiere Pro, Adobe After Effects, Adobe Audition, Pro Tools, MAX/MSP</span>
          </div>
        </div>
        <div class="row" id="cv">
          <div class="col-lg-3 offset-lg-3 text-center">
            <a href="/content/CVGraphique_BaptisteORY.pdf" target="_blank" class="btn btn-submit">Mon CV graphique</a>
          </div>
          <div class="col-lg-3 text-center">
            <a href="/content/CVImprimable_BaptisteORY.pdf" target="_blank" class="btn btn-submit">Mon CV imprimable</a>
          </div>
        </div>
      </div>
    </simplebar>
  </section>
</template>

<script>

  export default {
    name: 'About',
    mounted () {
      this.$refs.shadowEffect.className += ' shadow'
    }
  }

</script>

<style scoped lang="scss">

  #description {
    img {
      border-radius: 50%;
      border: 4px solid #FFFFFF;
      width: 100%;
      margin: 25px 0;
      max-width: 250px;
    }

    .link {
      position: relative;
      font-weight: 600;
      color: #FFFFFF;

      &:hover {
        color: #097487;
      }
    }
  }

  #skills {
    margin: 40px 0;
    text-align: center;

    svg {
      font-size: 2em;
    }

    .skill_title {
      background-color: white;
      border-radius: 5px;
      display: block;
      color: #097487;
      font-size: 1.5em;
      font-weight: 600;
      line-height: 1.2;
      margin: 15px 0;
      padding: 3px 10px;
    }
  }

  #cv {
    margin-bottom: 15px;
  }

/*------------------------------
Responsiveness
------------------------------*/

  @media only screen and (max-width: 992px) {
    #skills>div:not(:first-child) {
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: 576px) {
    #description img {
      max-width: 200px;
    }
  }

</style>
