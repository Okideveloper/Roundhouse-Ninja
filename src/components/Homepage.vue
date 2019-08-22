<template>
  <div class="uk-section uk-container">
    <div class="uk-padding-large">
      <div class="uk-container" style="background-color: #E5E4E2;">
        <div class="uk-background">
          <h1 class="uk-text-center uk-text-uppercase uk-animation-fade uk-text-bold">
            The
            <br>Roundhouse Ninja Dictionary
          </h1>
          <div class="img-container">
            <img class="giphy-img" :src="giphy" alt>
          </div>
        </div>
        <h2 class="uk-text-center">
          <q>Chuck Norris doesn't read books. He stares them down until he gets the information he wants.</q>
        </h2>
      </div>
    </div>

    <form @submit="queryData" class="uk-search uk-search-navbar">
      <span uk-search-icon></span>
      <input
        v-model="keyword"
        class="uk-search-input uk-margin"
        type="search"
        placeholder="Start typing..."
      >
    </form>

    <div class="uk-container uk-margin">
      <div uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
        <div class="uk-card uk-card-default" style="min-height: 400px; background-color: #E5E4E2;">
          <div class="uk-card-body" v-if="result">
            <h3 class="uk-card-title">{{ keyword }}</h3>
            <ul class="uk-list uk-list-bullet uk-list-divider">
              <li v-for="(def, i) in result.shortdef" v-bind:key="i">{{ def }}</li>
            </ul>
            <dl class="uk-description-list">
              <dt>
                <strong class="uk-margin">Related words</strong>
              </dt>
              <dd>
                <p uk-margin v-for="(syns, i) in result.meta.syns" v-bind:key="i">
                  <button
                    @click="updateKeyword(word)"
                    class="uk-button uk-button-default uk-button-small uk-margin-small-left uk-margin-small-top"
                    v-bind:key="i"
                    v-for="(word, i) in syns"
                  >{{ word }}</button>
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div class="uk-section uk-section-muted uk-dark uk-padding uk-margin">
      <div class="uk-container uk-margin">
        <img src="/images/the-facts.jpg" alt="site logo" class="logo">
        <h1
          class="uk-text-center"
          style="font-style: italic; color: red;"
        >Fun facts about Chuck Norris</h1>
      </div>

      <div class="chuck-joke" v-if="joke">
        <img :src="joke.icon_url" alt>
        {{ joke.value }}
      </div>
      <div id="my-id" class="uk-offcanvas"></div>
    </div>

    <div class="uk-text-center">
      <div>
        <div class="uk-animation-toggle" tabindex="0">
          <div class="uk-card uk-card-default uk-card-body uk-animation-shake uk-animation-reverse">
            <router-link
              to="/jokes"
              class="uk-button uk-button-secondary uk-button-large"
            >Click here</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyword: "",
      result: null,
      joke: null,
      giphy: null
    };
  },
  created() {
    this.getGiphy();
  },
  methods: {
    queryData: function(e) {
      if (e) e.preventDefault();
      const self = this;

      console.log(this.keyword, "keyword");
      if (!this.keyword) return false;

      let url =
        "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/" +
        this.keyword +
        "?key=54dfb352-a9db-4150-885c-c21f3cea99ad";

      axios
        .get(url)
        .then(response => {
          console.log(response.data[0]);
          self.result = response.data[0];
          if (this.keyword) {
            this.getJokes(this.keyword);
          }
        })

        .catch(error => {
          console.log(error, "error");
        });
    },

    updateKeyword: function(word) {
      this.keyword = word;
      this.queryData(null);
    },
    getJokes: function(word) {
      let url = `https://api.chucknorris.io/jokes/search?query=${word}`;

      let config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        }
      };
      axios
        .get(url, config)
        .then(response => {
          this.joke = response.data.result[0];
          console.log(response.data.result[0]);
        })
        .catch(error => {
          console.log(error, "error");
        });
    },

    getGiphy: function(word) {
      let url = `http://api.giphy.com/v1/stickers/search?q=chuck+norris+yeah&api_key=7wcB6xYPVXC00I0D58WsoSFD8DLTTLDc&limit=2`;

      let config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        }
      };
      axios
        .get(url)
        .then(response => {
          this.giphy = response.data.data[0].images.original.url;
          console.log(response.data.data[0].images.original.url);
        })
        .catch(error => {
          console.log(error, "error");
        });
    }
  }
};
</script>

<style>
.uk-section {
  background-color: #7e6446;
}

.img-container {
  width: 100%;
  text-align: center;
}
</style>
