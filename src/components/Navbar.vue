<template>
  <div class="uk-container">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-center">
        <ul class="uk-navbar-nav"></ul>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          
          <li>
            <router-link class="uk-navbar-item uk-logo" to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/jokes">We got Jokes</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

