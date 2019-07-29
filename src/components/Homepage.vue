<template>
  <div class="uk-section uk-container">
    <h2 class="uk-text-center">Find a better word</h2>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <div class="uk-navbar-item">
          <form @submit="queryData" class="uk-search uk-search-navbar">
            <span uk-search-icon></span>
            <input
              v-model="keyword"
              class="uk-search-input"
              type="search"
              placeholder="Start typing..."
            >
          </form>
        </div>
      </div>
    </nav>
    <div class="uk-container">
      <div uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
        <div class="uk-card uk-card-default" style="min-height: 200px;">
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

    <!-- <div class="uk-container">
                <div class="uk-card uk-card-default">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <div class="uk-width-auto">
                                <img class="uk-border-circle" width="40" height="40" src="images/avatar.jpg">
                            </div>
                            <div class="uk-width-expand">
                                <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                                <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                            </div>
                        </div>
                    </div>
                    <div class="uk-card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div class="uk-card-footer">
                        <a href="#" class="uk-button uk-button-text">Read more</a>
                    </div>
                </div>
    </div>-->

    <div class="uk-section uk-section-muted uk-dark uk-padding uk-margin">
      <div class="uk-container">
        <h2 class="uk-text-center">Are you in the mood for some old school Chuck Norris Jokes!?</h2>

        <div class="uk-text-center">
          <div>
            <h1>😂</h1>
            <div class="uk-animation-toggle" tabindex="0">
              <div
                class="uk-card uk-card-default uk-card-body uk-animation-shake uk-animation-reverse"
              >
                <button class="uk-button uk-button-secondary uk-button-large">Click here</button>
              </div>
            </div>
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
      result: null
    };
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
        })
        
        .catch(error => {
          console.log(error, "error");
        });
    },

    updateKeyword: function(word) {
      this.keyword = word;
      this.queryData(null);
    }
  }
};
</script>