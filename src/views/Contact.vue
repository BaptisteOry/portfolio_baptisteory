<template>
  <section id="contact" ref="bgEffect">
    <simplebar class="simplebar" data-simplebar-auto-hide="false">
      <div class="container">
        <h1 ref="shadowEffect">Contactez-moi !</h1>
        <div>
          <h2>Mes coordonnées</h2>
          <div id="contact_infos">
            <div>
              <font-awesome-icon icon="envelope" />
              <span>
                <a class="contact_infos_email" href="mailto:orybaptiste@gmail.com">orybaptiste@gmail.com</a>
              </span>
            </div>
            <div>
              <font-awesome-icon icon="phone" />
              <span>+33 6 12 61 55 50</span>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2>Me contacter</h2>
          <form id="contact_form" name="contact_form" @submit="onSubmit">
            <div id="contact_alert">
              <div v-if="sent" class="alert_success">
                <p>Votre message a bien été envoyé !</p>
              </div>
              <div v-if="error" class="alert_error">
                <p>Une erreur est survenue pendant l'envoi. Merci de recommencer plus tard.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 form_group">
                <label for="prenom" class="form_label">Prénom</label>
                <input
                  type="text"
                  class="form_control"
                  id="prenom"
                  name="prenom"
                  v-model="form.prenom"
                  required
                />
              </div>
              <div class="col-md-6 form_group">
                <label for="nom" class="form_label">Nom</label>
                <input
                  type="text"
                  class="form_control"
                  id="nom"
                  name="nom"
                  v-model="form.nom"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 form_group">
                <label for="email" class="form_label">Email</label>
                <input
                  type="email"
                  class="form_control"
                  id="email"
                  name="email"
                  v-model="form.email"
                  required
                />
              </div>
              <div class="col-md-6 form_group">
                <label for="sujet" class="form_label">Sujet</label>
                <input
                  type="text"
                  class="form_control"
                  id="sujet"
                  name="sujet"
                  v-model="form.sujet"
                />
              </div>
            </div>
            <div class="form_group">
              <label for="message" class="form_label">Message</label>
              <textarea
                class="form_control"
                id="message"
                name="message"
                rows="10"
                v-model="form.message"
                required
              ></textarea>
            </div>
            <div class="form_group_submit">
              <input type="submit" class="btn btn_submit" value="Envoyer" />
              <font-awesome-icon v-if="load" icon="spinner" class="fa-spin fa-lg" />
            </div>
          </form>
        </div>
      </div>
    </simplebar>
  </section>
</template>

<script>
/* Axios and querystring */
import axios from 'axios'
const querystring = require('querystring')

export default {
  name: 'Contact',
  data () {
    return {
      sent: false,
      error: false,
      load: false,
      form: {
        prenom: '',
        nom: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  mounted () {
    this.$parent.createBgEffect(this.$refs.bgEffect)
    this.$refs.shadowEffect.className += ' shadow'
  },
  methods: {
    /* Submit the form */
    onSubmit (e) {
      e.preventDefault()
      this.onReset()
      this.load = true
      axios
        .post('https://orybaptiste.fr/php/mail.php', querystring.stringify(this.form))
        .then((res) => {
          this.sent = true
          this.error = false
          this.load = false
        })
        .catch((error) => {
          console.log(error)
          this.sent = false
          this.error = true
          this.load = false
        })
    },
    /* Reset the form */
    onReset () {
      this.form.prenom = ''
      this.form.nom = ''
      this.form.email = ''
      this.form.subject = ''
      this.form.message = ''
    }
  }
}
</script>

<style scoped lang="scss">

#contact {
  text-align: center;
}

h2 {
  font-size: 1.75em;
  font-weight: 600;
  margin-top: 1em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

#contact_infos {
  > div {
    display: inline-block;
    margin: 0 10px;

    > span {
      margin-left: 5px;
    }

    .contact_infos_email {
      color: #ffffff;
      width: 195px;
      display: inline-block;

      &:hover {
        font-weight: 600;
      }
    }
  }
}

hr {
  display: block;
  background-color: white;
  margin-top: 2.5em;
  position: relative;
  right: 0;
  height: 3px;
  width: 85%;
}

#contact_form {
  width: 75%;
  margin: 0 auto;

  .form_group {
    margin-bottom: 0.5rem;
    text-align: left;

    > .form_label {
      color: white;
      font-weight: 600;
      padding-top: calc(0.375rem + 1px);
      padding-bottom: calc(0.188rem + 0.5px);
      margin-bottom: 0;
      font-size: inherit;
      line-height: 1.5;
    }

    > .form_control {
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #ffffff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
  }

  .form_group_submit {
    text-align: center;
    position: relative;

    .btn_submit {
      margin: 15px 0;
      background-color: #097487;
      border-color: #097487;
      color: white;
      font-weight: 600;
      padding: 0.55rem 1.5rem;

      &:hover {
        background-color: white;
        border-color: #097487;
        color: #097487;
        cursor: pointer;
      }
    }

    svg {
      position: absolute;
      top: 35%;
      margin-left: 10px;
    }
  }
}

#contact_alert{

  >div {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;

    &.alert_success {
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    }

    &.alert_error {
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    }
  }
}

/*------------------------------
Responsiveness
------------------------------*/

@media only screen and (max-width: 992px) {
  #contact_form {
    width: 100%;
  }
}

</style>
