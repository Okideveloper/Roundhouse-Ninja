<template>
  <div>
    <div class="uk-container">
      <div class="uk-section uk-section-muted uk-dark uk-padding">
        <div class="uk-container">
          <h1 class="uk-text-center">Chuck Norris Jokes</h1>

          <div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
        </div>
      </div>
      <h3 class="uk-text-center">Categories</h3>

      <div class="uk-card uk-margin">
        <ul class="uk-tab" data-uk-tab="{connect:'#my-id'}">
          <li>
            <a href>Tab 1</a>
          </li>
          <li>
            <a href>Tab 2</a>
          </li>
          <li>
            <a href>Tab 3</a>
          </li>
        </ul>
        <ul id="my-id" class="uk-switcher uk-margin">
          <li>
            <a href="#" id="autoplayer" data-uk-switcher-item="next"></a>
            This slide contains a hidden link, that selects the next slide when clicked. The click is simulated
            by jacascript to mimic autoplay.
          </li>
          <li>Content 2</li>
          <li>Content 3</li>
        </ul>
      </div>

      <h3 class="uk-text-center">Results</h3>

      <div class="uk-container uk-margin">
        <div class="uk-card uk-card-default">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img class="uk-border-circle" width="40" height="40" src="images/avatar.jpg">
              </div>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                <p class="uk-text-meta uk-margin-remove-top">
                  <time datetime="2016-04-01T19:00">
                    April 01,
                    2016
                  </time>
                </p>
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      jokes: []
    };
  },
  methods: {
    getJokes: function() {
      let url = "https://api.chucknorris.io/jokes/search?query={}";
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
