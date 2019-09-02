<template>
  <div class="uk-section uk-section-primary uk-light">
    <div class="uk-container">
      <h1 class="uk-text-center uk-text-uppercase uk-animation-fade uk-text-bold">
        The
        <br>Roundhouse Word Search
      </h1>
      <br>
      <p
        class="uk-text-center uk-text-large uk-animation-fade uk-text-lowercase"
      >The only word search that delivers you a Chuck Norris Joke with your word entry</p>

      <div class="img-container">
        <img class="giphy-img" :src="giphy" alt>

        <h2 class="uk-text-center uk-padding">
          <span uk-icon="icon: check"></span>
          <q>
            Chuck Norris doesn't read books.
            <br>He stares them down until he gets the information he wants.
          </q>
        </h2>

        <a class="uk-button start-button" href="#search-area">Let's get Started</a>
      </div>

      <form @submit="queryData" class="uk-search-default uk-margin uk-padding">
        <div class="uk-search uk-search-large uk-padding">
          <input
            v-model="keyword"
            class="norris-search"
            type="search"
            placeholder="Start typing..."
          >
        </div>
      </form>
    </div>

    <div class="uk-container uk-margin" v-if="result !== null">
      <div uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
        <div class="uk-card uk-card-default bg-results">
          <div class="uk-card-body">
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

    <div class="uk-section uk-section-muted uk-dark uk-padding" v-if="result !== null">
      <div class="uk-container">
        <h2
          class="uk-text-center"
          style="font-style: italic; font-weight: 600; color: #292B32"
        >Chuck Norris Jokes</h2>
        <div class="uk-flex uk-flex-center">
          <div>
            <img src="/images/the-facts.jpg" alt="site logo" class="logo" height="240">
          </div>

          <div class="chuck-joke uk-padding uk-text-center" v-if="joke">
            <img :src="joke.icon_url" alt="norris head" width="50">
            <h5>{{ joke.value }}</h5>
            <div class="uk-animation-toggle" tabindex="0">
              <div class="uk-card uk-card-default uk-card-body">
                <h2
                  class="uk-text-center"
                  style="font-style: italic; font-weight: 400; color: #152C85"
                >Continue the fun by entering more words</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="my-id" class="uk-offcanvas"></div>
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
      giphy: null,
      jokeSet: null
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
.uk-section-primary {
  background: rgba(9, 109, 155, 0.801) !important;
}

h5 {
  color: black !important;
  font-family: tangerine;
}

.bg-results {
  height: auto;
  background-color: rgba(156, 236, 173, 0.418) !important;
}

.img-container {
  width: 100%;
  text-align: center;
}

.uk-animation-toggle {
  margin: 0 auto;
}

.uk-search-default {
  color: black;
}

.norris-search {
  font-size: 25px;
  background-color: rgb(252, 237, 109);
}

.chuck-joke {
  display: inline-block;
}
.start-button {
  background-color: rgb(218, 53, 53) !important;
  color: rgb(245, 226, 226) !important;
  margin-bottom: 100px !important;
}

.body-bg {
  background-color: blue;
}
</style>
