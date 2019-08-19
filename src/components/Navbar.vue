<template>
  <div class="uk-container-center">
    <nav class="uk-navbar uk-margin">
      <ul class="uk-navbar-nav">
        <li>
          <router-link class="uk-navbar-item uk-logo" to="/">Home</router-link>
        </li>
        
        <li>
          <router-link  to="/jokes">
            More chuck
            <br>jokes
          </router-link>
        </li>
      </ul>
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

