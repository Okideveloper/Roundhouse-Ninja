<template>
  <div>
    <Navbar />
    <nav class="uk-navbar-container uk-navbar-transparent uk-padding-small" uk-navbar>
      <div class="uk-navbar-left">
         <ul class="uk-navbar-nav">
              <li class>
                <a class="uk-navbar-item uk-logo" href="/">< Back to Result</a>
              </li>
            </ul>
      </div>
    </nav>
    <Jokespage />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Jokespage from '../components/Jokespage.vue'
export default {
  name: 'Jokes',
  components: {
    Navbar,
    Jokespage
  }
}
</script>
