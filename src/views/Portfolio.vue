<template>
  <section id="portfolio">
    <simplebar class="simplebar" data-simplebar-auto-hide="false" ref="scroll">
      <div>
        <h1 ref="shadowEffect">Portfolio</h1>
        <div ref="portfolioChoice" id="portfolio_choice">
          <div ref="portfolioChoiceC" :class="{portfolio_choice_sticky: scrollPosition >= portfolioChoiceTop}">
            <span class="fa-stack" title="Programmation et intégration" :class="{activated : categories['prog']}" @click="toggleCategory('prog')">
              <font-awesome-icon icon="circle" class="fa-stack-2x" />
              <font-awesome-icon icon="file-code" class="fa-stack-1x fa-inverse" />
            </span>
            <span class="fa-stack" title="Design et 3D" :class="{activated : categories['design']}" @click="toggleCategory('design')">
              <font-awesome-icon icon="circle" class="fa-stack-2x" data-type="design" />
              <font-awesome-icon icon="paint-brush" class="fa-stack-1x fa-inverse" />
            </span>
            <span class="fa-stack" title="Audiovisuel" :class="{activated : categories['video']}" @click="toggleCategory('video')">
              <font-awesome-icon icon="circle" class="fa-stack-2x" data-type="video" />
              <font-awesome-icon icon="video" class="fa-stack-1x fa-inverse" />
            </span>
            <span class="fa-stack" title="Divers" :class="{activated : categories['divers']}" @click="toggleCategory('divers')">
              <font-awesome-icon icon="circle" class="fa-stack-2x" data-type="divers" />
              <font-awesome-icon icon="ellipsis-h" class="fa-stack-1x fa-inverse" />
            </span>
          </div>
        </div>
        <div id="portfolio_list" class="container-fluid">
          <template v-for="(project, index) in this.projects">
            <div :key="'year'+index" class="portfolio_year" v-if="projects[index - 1 >= 0 ? index - 1 : index].year != project.year || index == 0">
              <span>{{ project.year }}</span>
            </div>
            <Project :categories="categories" :key="'project'+index"  :types="project.types" :name="project.name" :description="project.description" :links="project.links" :illustration="project.illustration" />
          </template>
        </div>
      </div>
    </simplebar>
  </section>
</template>

<script>
  import Project from '@/components/Project.vue'

  export default {
    name: 'Portfolio',
    components: {
      Project
    },
    data: function () {
      return {
        scrollPosition: null,
        portfolioChoiceTop: null,
        categories: { prog: false, design: false, video: false, divers: false },
        projects: [
          {
            types: ['video'],
            name: 'Ectoplasma',
            description: "Réalisation, en équipe, d'un court-métrage. Créé confiné et en 48h, à l'occasion du 48H du COURT-MÉTRAGE 2020 de l'association 803Z. Au sein de l'équipe de tournage : prise de vue, montage, mixage et étalonnage.",
            links: [{ name: 'Court-métrage', location: 'https://www.youtube.com/watch?v=prYc1FvkfoE' }],
            illustration: { video: 'https://www.youtube.com/embed/prYc1FvkfoE?enablejsapi=1' },
            year: 2020
          },
          {
            types: ['prog', 'design', 'video'],
            name: 'Rencontres Paris/Berlin',
            description: "Réalisation de différents projets au cours d'un stage de 3 mois chez Rencontres Internationales Paris/Berlin, à Paris. Organisation d'un live streaming pour l'édition du festival à Berlin (26-30 août 2020) et montage en direct sur le logiciel Livestream Studio. Travail sur le site web officiel de l'événement (simplification, responsive, base de données).",
            links: [{ name: 'Site web de l\'événement', location: 'http://www.art-action.org/site/fr/index.php' }],
            illustration: { image: 'portfolio/portfolio_ripb.jpg' },
            year: 2020
          },
          {
            types: ['prog'],
            name: 'The Cinema Slot Machine',
            description: "Conception, en binôme, d'un mini-jeu de roulette de casino. Programmation sur Unity (C#), intégration de fonctions mathématiques aléatoires, déploiement sur Windows et Android.",
            links: [{ name: 'Jouer en ligne', location: 'https://baptisteory.github.io/theCinemaSlotMachine/' }, { name: 'Repo Github', location: 'https://github.com/BaptisteOry/theCinemaSlotMachine' }, { name: 'Rapport du projet', location: 'content/portfolio/contenu_portfolio_theCinemaSlotMachine.pdf' }],
            illustration: { image: 'portfolio/portfolio_theCinemaSlotMachine.jpg' },
            year: 2020
          },
          {
            types: ['design'],
            name: 'Redesign Ouest-France.fr',
            description: "Exercice de redesign du site d'actualités Ouest-France.fr, pour cibler un nouveau public. Processus complet : benchmark, persona, charte graphique, zoning, wireframe et maquette. Utilisation de Figma et Whimsical.",
            links: [{ name: 'Maquette en ligne', location: 'https://bit.ly/2Wtqq0b' }, { name: 'Rapport du projet', location: 'content/portfolio/contenu_portfolio_redesignOuestFrance.pdf' }],
            illustration: { image: 'portfolio/portfolio_redesignOuestFrance.jpg' },
            year: 2020
          },
          {
            types: ['prog', 'divers'],
            name: 'Human Song Maker',
            description: "Conception, en binôme, d'un espace intéractif. Maquetisation sur un site web en ligne. Utilisation des langages de web et de la librairie p5.js.",
            links: [{ name: 'Maquette en ligne', location: 'https://baptisteory.github.io/humanSongMaker' }, { name: 'Repo Github', location: 'https://github.com/BaptisteOry/humanSongMaker' }, { name: 'Rapport du projet', location: 'content/portfolio/contenu_portfolio_humanSongMaker.pdf' }],
            illustration: { image: 'portfolio/portfolio_humanSongMaker.jpg' },
            year: 2020
          },
          {
            types: ['design', 'video'],
            name: 'Dent de poule',
            description: "Réalisation, en duo, d'un title sequence pour un film film fictif : « Dent de poule ». Pré-production (scénario, storyboard et découpage technique) et post-production (montage, mixage, étalonnage et motion design). Utilisation de Adobe Premiere, Adobe After Effects et Adobe Illustrator.",
            links: [{ name: 'Title sequence', location: 'https://www.youtube.com/watch?v=Sr8GgPO7NtU' }],
            illustration: { video: 'https://www.youtube.com/embed/Sr8GgPO7NtU?enablejsapi=1' },
            year: 2020
          },
          {
            types: ['prog'],
            name: 'IMAC League',
            description: "Développement, au sein d'une équipe, d'un dashboard pour super-héros. Utilisation du bundler Parcel, du framework HyperApp, des librairies Chart.js et GSAP, et des APIs « SuperHero API » et « OpenWeatherMap ». Au sein de l'équipe : conception (wireframe), programmation et intégration web.",
            links: [{ name: 'Site web', location: 'https://bmangeat.github.io/dashboard-hero/' }, { name: 'Repo Github', location: 'https://github.com/bmangeat/dashboard-hero' }, { name: 'Rapport du projet', location: 'content/portfolio/contenu_portfolio_IMACLeague.pdf' }],
            illustration: { image: 'portfolio/portfolio_IMACLeague.jpg' },
            year: 2020
          },
          {
            types: ['design'],
            name: 'Ingliche',
            description: "Exercice de design d'un site qui promouvoit une application pour apprendre l'anglais. Processus complet : benchmark, persona, charte graphique, zoning, wireframe et maquette. Maquettes au format écran ordinateur et écran smartphone. Utilisation de Figma et Whimsical.",
            links: [{ name: 'Maquette en ligne', location: 'https://www.figma.com/proto/cmpLJE573aVQgfvhA7YCYs/Web-design-Maquette-appli-anglais?node-id=1%3A3&scaling=min-zoom' }, { name: 'Prototypage', location: 'content/portfolio/contenu_portfolio_Ingliche.pdf' }],
            illustration: { image: 'portfolio/portfolio_Ingliche.jpg' },
            year: 2020
          },
          {
            types: ['prog', 'divers'],
            name: 'Retro Farming',
            description: "Projet tuteuré de création d'une borne d'arcade, pour le nouveau cinéma de la Ferme du Buisson à Noisiel (ouvert en février 2020). Borne conçue et fabriquée au Fablab Descartes (Champs-sur-Marne). 2 jeux codés sur Unity (langage C#) et lancés via un Raspberry Pi 2 à l'intérieur de la borne.",
            links: [{ name: 'Rapport du projet', location: 'content/portfolio/contenu_portfolio_retroFarming.pdf' }, { name: 'Plus d\'infos', location: 'https://www.ingenieur-imac.fr/realisations/retro-farming' }],
            illustration: { image: 'portfolio/portfolio_retroFarming.jpg' },
            year: 2020
          },
          {
            types: ['video'],
            name: 'Cœur en fusion',
            description: "Réalisation, en équipe, d'un court-métrage avec casting d'acteurs sur les thèmes de l'amour et du nucléaire. Au sein de l'équipe de tournage : scénario, réalisation et montage.",
            links: [{ name: 'Court-métrage', location: 'https://www.youtube.com/watch?v=4ZpZ0ZgU-dk' }],
            illustration: { video: 'https://www.youtube.com/embed/4ZpZ0ZgU-dk?enablejsapi=1' },
            year: 2020
          },
          {
            types: ['prog'],
            name: 'ImacraftSB',
            description: "Programmation, en binôme, avec le langage C++, OpenGL et SDL d'un éditeur-visualisateur de terrains et scènes 3D. Permet la génération d'un terrain aléatoire avec des fonctions mathématiques, la modification du terrain, l'ajout de textures ou lumières et la sauvegarde des scènes.",
            links: [{ name: 'Repo GitHub', location: 'https://github.com/SolHaine/ProjetProg_ImacraftSB' }, { name: 'Rapport du projet', location: 'content/portfolio/contenu_portfolio_imacraftSB_dossier.pdf' }],
            illustration: { image: 'portfolio/portfolio_imacraftSB.jpg' },
            year: 2020
          },
          {
            types: ['design', 'video'],
            name: 'Bagdad Diner',
            description: "Conception, en binôme, d'un décor modélisé de diner américain dans un désert et réalisation d'une vidéo de présentation. Utilisation de Blender pour la modélisation et de Adobe Premiere pour le montage.",
            links: [{ name: 'Vidéos', location: 'https://www.youtube.com/playlist?list=PL9REC4N8Y-3rlkshrzK4HtwZwdmJmbBVE' }, { name: 'Rapport du projet', location: 'content/portfolio/contenu_portfolio_bagdadDiner_dossier.pdf' }],
            illustration: { video: 'https://www.youtube.com/embed/g7-X48l0Uqk;videoseries?list=PL9REC4N8Y-3rlkshrzK4HtwZwdmJmbBVE&enablejsapi=1' },
            year: 2020
          },
          {
            types: ['video', 'divers'],
            name: 'Sordide',
            description: "Réalisation d'un épisode de podcast « true crime ». Écriture, prise de son, montage et mixage sonore sur Adobe Audition et Pro Tools.",
            links: [{ name: 'Podcast', location: 'https://www.youtube.com/watch?v=RWnKYPwedIg&list=PL9REC4N8Y-3ptu7C-M3qXMdEbAKHqe9Hz&index=4' }],
            illustration: { video: 'https://www.youtube.com/embed/RWnKYPwedIg?enablejsapi=1' },
            year: 2019
          },
          {
            types: ['prog'],
            name: 'Projet Cosmos',
            description: "Programmation et intégration, au sein d'une équipe, d'un site web « jeu » imitant les fictions intéractives des années 80. Utilisation d'une base de données et respect de l'architecture REST. Au sein de l'équipe : écriture d'une partie de l'histoire, mockup et UX, intégration et programmation avec HTML, CSS, JavaScript et PHP.",
            links: [{ name: 'Repo GitHub', location: 'https://github.com/ClawsDevlp/projet_Cosmos' }, { name: 'Rapport du projet', location: 'content/portfolio/contenu_portfolio_projetCosmos_dossier.pdf' }],
            illustration: { image: 'portfolio/portfolio_projetCosmos.jpg' },
            year: 2019
          },
          {
            types: ['design', 'video'],
            name: 'Popicorn',
            description: "Réalisation, en binôme, d'une fausse publicité pour une marque de popcorn. Prise de son, assets sur Adobe Illustrator, animation sur Adobe After Effects et montage sur Adobe Premiere.",
            links: [{ name: 'Vidéo', location: 'https://www.youtube.com/watch?v=rlOPMomhSQM&feature=emb_title' }],
            illustration: { video: 'https://www.youtube.com/embed/rlOPMomhSQM?enablejsapi=1' },
            year: 2019
          },
          {
            types: ['prog', 'design'],
            name: 'Flower Tower',
            description: "Programmation, en binôme, avec le langage C, OpenGL et SDL d'un tower defense sur le thème des hippies. Réalisation des graphismes sur Adobe Photoshop (carte et assets).",
            links: [{ name: 'Repo GitHub', location: 'https://github.com/BaptisteOry/projet_towerDefense' }, { name: 'Rapport du projet', location: 'content/portfolio/contenu_projet_towerDefense_dossier.pdf' }],
            illustration: { image: 'portfolio/portfolio_flowerTower.jpg' },
            year: 2019
          },
          {
            types: ['prog', 'divers'],
            name: 'Borypédia',
            description: "Lors d'un workshop d'écriture, rédaction et mise en forme (avec les langages du web) d'une fausse page wikipédia parodique. S'inspire de « La bio pas possible » de Jean-Charles Massera.",
            links: [{ name: 'Site web', location: 'https://orybaptiste.fr/content/sites/borypedia/' }],
            illustration: { image: 'portfolio/portfolio_borypedia.jpg' },
            year: 2019
          },
          {
            types: ['prog', 'design'],
            name: 'Les chaises dictatoriales',
            description: "Programmation et intégration, en binôme, d'un jeu sur un site web. Utilisation de l'API YouTube et des langages HTML, CSS et JavaScript. Graphismes sur Adobe Photoshop.",
            links: [{ name: 'Site web', location: 'https://orybaptiste.fr/content/sites/lesChaisesDictatoriales/' }, { name: 'Repo GitHub', location: 'https://github.com/BaptisteOry/chaises_musicales' }],
            illustration: { image: 'portfolio/portfolio_chaisesDictatoriales.jpg' },
            year: 2019
          },
          {
            types: ['prog'],
            name: 'Recoding Frieder Nake',
            description: "Utilisation du logiciel Processing pour recoder un algorithme de l'artiste informatique Frieder Nake. Réalisation d'une interface redimensionnable.",
            links: [{ name: 'Dossier du projet', location: 'content/portfolio/contenu_portfolio_recodingFriederNake_dossier.pdf' }, { name: 'Télécharger le fichier Processing', location: 'https://drive.google.com/open?id=1iLuXU0H55Lqz05cCmdwJv6iuXlDBiaOd' }],
            illustration: { image: 'portfolio/portfolio_recodingFriederNake.jpg' },
            year: 2019
          },
          {
            types: ['design', 'video'],
            name: 'Christine Boyer',
            description: 'Réappropriation en vidéo de « Christine Boyer », tableau de Antoine-Jean Gros. Utilisation de Adobe After Effects, Adobe Premiere et Adobe Photoshop.',
            links: [{ name: 'Vidéo', location: 'https://www.youtube.com/watch?time_continue=1&v=oOUqlA2OYy0&' }],
            illustration: { video: 'https://www.youtube.com/embed/oOUqlA2OYy0?enablejsapi=1' },
            year: 2019
          },
          {
            types: ['prog'],
            name: 'MiniGimp',
            description: "Programmation avec le langage C d'un programme de traitement d'images et d'affichage d'histogrammes. Utilisation du format d'image PPM (Portable pixmap) et d'effets LUTs (look-up tables).",
            links: [{ name: 'Repo GitHub', location: 'https://github.com/BaptisteOry/projet_C_miniGimp' }, { name: 'Rapport du projet', location: 'content/portfolio/contenu_portfolio_miniGimp_dossier.pdf' }],
            illustration: { image: 'portfolio/portfolio_miniGimp.jpg' },
            year: 2019
          },
          {
            types: ['video'],
            name: 'Inside',
            description: "Réalisation d'un court-métrage dystopique avec casting d'acteurs. Au sein de l'équipe de tournage : mise en scène, photographie de plateau, clap et montage.",
            links: [{ name: 'Court-métrage', location: 'https://www.youtube.com/watch?v=BGq3GbITUI8' }],
            illustration: { video: 'https://www.youtube.com/embed/BGq3GbITUI8?enablejsapi=1' },
            year: 2019
          },
          {
            types: ['design'],
            name: 'Tsuuk Maaya',
            description: "Conception, en groupe, de l'identité graphique d'un parc d'attraction fictif, ayant pour thème les mayas. Recherches historiques et graphiques. Graphisme de la signalétique et d'une partie de la carte avec Adobe Illustrator et Adobe Photoshop.",
            links: [{ name: 'Dossier du projet', location: 'content/portfolio/contenu_portfolio_tsuukMaaya_dossier.pdf' }, { name: 'Plan du parc', location: 'content/portfolio/contenu_portfolio_tsuukMaaya_plan.png' }],
            illustration: { image: 'portfolio/portfolio_tsuukMaaya.jpg' },
            year: 2019
          },
          {
            types: ['prog', 'design', 'video', 'divers'],
            name: 'Balloune',
            description: "Projet de fin d'études en Techniques d'Intégration Multimédia, au Cégep de Matane. Conception en groupe d'un jeu pour enfant qui se contrôle avec une Leap-motion. Au sein de l'équipe : programmation sur Unity (C#), level design, vidéo, son, graphisme et communication.",
            links: [{ name: 'Site web', location: 'http://tim.cgmatane.qc.ca/projets/2018/eq6/index.html' }, { name: 'Vidéos du projet', location: 'https://www.youtube.com/playlist?list=PL9REC4N8Y-3oiI1EwCc2b26vh3cE_GYCo' }, { name: 'Images du projet', location: 'content/portfolio/contenu_portfolio_balloune.pdf' }],
            illustration: { video: 'https://www.youtube.com/embed/XW-E9XRgmgg;videoseries?list=PL9REC4N8Y-3oiI1EwCc2b26vh3cE_GYCo&enablejsapi=1' },
            year: 2018
          },
          {
            types: ['prog', 'design', 'divers'],
            name: 'Adviz',
            description: "Réalisation de différents projets au cours d'un stage chez Adviz, à Montréal. Promotion de Adviz Media Inc. et de ses clients en créant et améliorant des sites Internet, affiches, newsletters, etc. Utilisation de Wordpress et de la suite Adobe.",
            links: [{ name: 'Site d\'Adviz', location: 'https://adviz.ca/' }, { name: 'Exemple de newsletter', location: 'content/portfolio/contenu_portfolio_adviz_newsletter_1.html' }, { name: 'Bannières', location: 'content/portfolio/contenu_portfolio_adviz_bannieres.pdf' }],
            illustration: { image: 'portfolio/portfolio_adviz.jpg' },
            year: 2018
          },
          {
            types: ['prog'],
            name: 'CV dynamique',
            description: "Intégration et programmation d'un système de création de CV dynamique. Utilisation des langages HTML, CSS et JQuery (dont ajax).",
            links: [{ name: 'Site web', location: 'https://orybaptiste.fr/content/sites/cvDynamique' }],
            illustration: { image: 'portfolio/portfolio_cvDynamique.jpg' },
            year: 2018
          },
          {
            types: ['design', 'divers'],
            name: 'Scroll',
            description: 'Contribution au journal mensuel du département MMI « Scroll ». Au sein de l’équipe de rédaction : écriture d’articles (horoscope) et dessins (bande dessinée « Zazar en MMI »).',
            links: [{ name: 'Journal de novembre 2017', location: 'content/portfolio/contenu_portfolio_scroll_1.pdf' }, { name: 'Journal de décembre 2017', location: 'content/portfolio/contenu_portfolio_scroll_2.pdf' }],
            illustration: { image: 'portfolio/portfolio_scroll.jpg' },
            year: 2018
          },
          {
            types: ['prog'],
            name: 'Pacman',
            description: "Création d'un jeu type Pacman en langage Java orienté objet. Programmation des mouvements du joueur, ennemis, objets, score, vies, évènements et système de niveaux.",
            links: [{ name: 'Télécharger le jeu', location: 'https://drive.google.com/open?id=1Pwn0QN9v7oS1DieM0VHO3fAK4FuzakhI' }, { name: 'Images du jeu', location: 'content/portfolio/contenu_portfolio_pacman.pdf' }],
            illustration: { image: 'portfolio/portfolio_pacman.jpg' },
            year: 2018
          },
          {
            types: ['design', 'divers'],
            name: 'Franciser',
            description: "Écriture et mise en page d'un article sur la francisation, puis réalisation d'un dossier de conception (avec storyboards et maquettes) pour un webdocumentaire sur ce thème. Utilisation de Adobe Photoshop, Adobe Illustrator et Adobe InDesign.",
            links: [{ name: 'Article mis en page', location: 'content/portfolio/contenu_portfolio_franciser_1.jpg' }, { name: 'Dossier du projet', location: 'content/portfolio/contenu_portfolio_franciser_2.pdf' }],
            illustration: { image: 'portfolio/portfolio_franciser.jpg' },
            year: 2018
          },
          {
            types: ['design', 'video'],
            name: 'The Vision Serpen',
            description: 'Réalisation du vidéoclip du groupe de métal « Tonantzin », avec projection d’une animation. Au sein de l’équipe de tournage : travail sur l’animation (storyboard), photographe de plateau, claquiste et montage (sur Adobe Premiere Pro).',
            links: [{ name: 'Vidéoclip', location: 'https://www.youtube.com/watch?v=2OborUc3ghI' }, { name: 'Photos de tournage', location: 'content/portfolio/contenu_portfolio_theVisionSerpent_1.pdf' }, { name: 'Storyboard de l\'animation', location: 'content/portfolio/contenu_portfolio_theVisionSerpent_2.pdf' }],
            illustration: { video: 'https://www.youtube.com/embed/2OborUc3ghI?enablejsapi=1' },
            year: 2018
          },
          {
            types: ['prog', 'design'],
            name: 'The Creative Contest',
            description: "Développement en groupe d’un site web « from scratch », permettant le dépôt d’oeuvres pour un concours à thème. Au sein de l'équipe : programmation web (PHP et SQL), intégration web (HTML, CSS et JS) et infographies.",
            links: [{ name: 'Vidéo de présentation', location: 'https://www.youtube.com/watch?v=wvPDDNXqHaA' }],
            illustration: { video: 'https://www.youtube.com/embed/wvPDDNXqHaA?enablejsapi=1' },
            year: 2017
          },
          {
            types: ['video'],
            name: 'Platine vinyle',
            description: "Réalisation d'un tutoriel sur l'utilisation d'une platine vinyle. Au sein de l'équipe de tournage : réalisation, écriture du scénario, conception du storyboard et montage (sur Adobe Premiere Pro).",
            links: [{ name: 'Vidéo', location: 'https://www.youtube.com/watch?v=3p-e7QIYecI' }, { name: 'Storyboard', location: 'content/portfolio/contenu_portfolio_platineVinyle.pdf' }],
            illustration: { video: 'https://www.youtube.com/embed/3p-e7QIYecI?enablejsapi=1' },
            year: 2017
          },
          {
            types: ['design'],
            name: 'Espéranto',
            description: "Création d'une data visualisation sur le thème de l'Espéranto. Utilisation des logiciels Adobe Photoshop et Adobe Illustrator.",
            links: [{ name: 'Data visualisation', location: 'content/portfolio/contenu_portfolio_dataVisualisation_esperanto.png' }],
            illustration: { image: 'portfolio/portfolio_dataVisualisation_esperanto.jpg' },
            year: 2017
          },
          {
            types: ['divers'],
            name: 'Reflets du cinéma',
            description: "Écriture d'articles pour la gazette du festival « Reflets du cinéma » à Laval (Mayenne), organisé par Atmosphère 53. Participation au festival.",
            links: [{ name: 'Gazette n°1', location: 'content/portfolio/contenu_portfolio_refletsDuCinema_1.pdf' }, { name: 'Gazette n°4', location: 'content/portfolio/contenu_portfolio_refletsDuCinema_2.pdf' }],
            illustration: { image: 'portfolio/portfolio_refletsDuCinema.jpg' },
            year: 2017
          },
          {
            types: ['design', 'divers'],
            name: 'Vie nocturne',
            description: "Conception de l'identité graphique (logo 2D et 3D, couleurs, typographies, normes, etc.) pour la vie nocturne de la ville de Laval (Mayenne). Utilisation des logiciels Adobe Photoshop, Adobe Illustrator, Adobe InDesign et Blender. Réalisation d'une affiche de sensibilisation dans le même temps, sous Adobe Photoshop.",
            links: [{ name: 'Dossier du projet', location: 'content/portfolio/contenu_portfolio_vieNocturne_1.pdf' }, { name: 'Logo en 3D', location: 'content/portfolio/contenu_portfolio_vieNocturne_3.jpg' }, { name: 'Affiche', location: 'content/portfolio/contenu_portfolio_vieNocturne_2.jpg' }],
            illustration: { image: 'portfolio/portfolio_vieNocturne.jpg' },
            year: 2017
          },
          {
            types: ['design', 'divers'],
            name: 'Gicorne',
            description: "Collaboration à l’histoire humoristique « Gicorne - la girafe licorne ». C'est une histoire écrite et dessinée à plusieurs mains, puis postée sur Instagram. Au sein du groupe : écriture, dessins, tenue de la boutique officielle et communication.",
            links: [{ name: 'Histoire sur Instagram', location: 'https://www.instagram.com/gicorne_lagirafelicorne/' }, { name: 'Boutique Spreadshirt', location: 'https://shop.spreadshirt.fr/gicorne/' }],
            illustration: { image: 'portfolio/portfolio_gicorne.jpg' },
            year: 2016
          },
          {
            types: ['prog'],
            name: 'Raspberry Pi',
            description: "Création d'un dispositif permettant le contôle de jeux grâce aux mouvements d'un écran tactile. Utilisation d'un Raspberry Pi 2, d'un écran tactile, d'un accéléomètre et d'une batterie externe. Adaptation de jeux codés en Python.",
            links: [{ name: 'Images du projet', location: 'content/portfolio/contenu_portfolio_raspberry.pdf' }, { name: 'Vidéo', location: 'https://youtu.be/7P97j7T6CXg' }],
            illustration: { image: 'portfolio/portfolio_raspberry.jpg' },
            year: 2016
          }
        ]
      }
    },
    mounted () {
      this.$refs.scroll.scrollElement.addEventListener('scroll', this.initialiseScroll)
      this.portfolioChoiceTop = this.$refs.portfolioChoice.offsetTop
      this.$refs.shadowEffect.className += ' shadow'
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.initialiseScroll)
      this.$refs.portfolioChoiceC.classList.remove('portfolio_choice_sticky')
    },
    methods: {
      /* Initialise the variables for the scroll of the portfolioChoice */
      initialiseScroll (event) {
        this.scrollPosition = event.target.scrollTop
        this.portfolioChoiceTop = this.$refs.portfolioChoice.offsetTop
      },
      /* Toogle a category (projects) */
      toggleCategory (cat) {
        this.$refs.scroll.scrollElement.scrollTop = 0
        this.categories[cat] = !(this.categories[cat])
      }
    }
  }
</script>

<style scoped lang="scss">

  #portfolio_list {

    .project:nth-of-type(odd) {
      flex-direction: row-reverse;
    }

    >.portfolio_year {
      background-color: white;
      box-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.3);
      color: #f1b500;
      font-weight: 900;
      font-size: 1.5em;
      padding: 10px;
      text-align: center;
    }
  }

  #portfolio_choice {
    position: relative;
    height: 100px;
    min-height: 100px;
    width: 100%;
    color: #FFFFFF;
    font-size: 2em;
    font-weight: 900;
    text-align: center;

    >.portfolio_choice_sticky {
      position: fixed;
      top: 90px;
    }

    >div {
      position: absolute;
      width: 100%;
      top: 10px;
      right: 0px;
      text-align: center;
      z-index: 2;

      >span {
        position: relative;
        top: 0px;

        >svg:nth-child(1) {
          filter: drop-shadow(1.5px 1.5px 8px rgba(0, 0, 0, 0.3))
        }

        >svg:nth-child(2) {
          color: #F1B500;
        }

        &:hover,
        &.activated {
          color: #097487;
          cursor: pointer;
          top: 3px;
          transition: all 0.2s;

          >svg {
            transition: color 0.2s;
          }

          >svg:nth-child(1) {
            color: #097487;
          }

          >svg:nth-child(2) {
            color: #FFFFFF;
          }
        }
      }
    }

    #portfolio .projet-reverse {
      display: flex;
      flex-direction: row-reverse;
    }
  }

/*------------------------------
Responsiveness
------------------------------*/

  @media only screen and (max-width: 992px) {
    #portfolio_choice {
      font-size: 1.8em;
    }

    #portfolio_choice >.portfolio_choice_sticky {
      top: 65px;
    }

    .portfolio_year:not(:first-child) {
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 400px) {
    #portfolio_choice {
      font-size: 1.5em;
    }
  }

</style>
