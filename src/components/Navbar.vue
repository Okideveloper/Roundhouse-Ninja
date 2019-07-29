<template>
  <div class="uk-container">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-center">
        <div class="uk-navbar-center-left">
          <div>
            <ul class="uk-navbar-nav">
              <li class>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="jokes.html">Chucks Jokes</a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li class="uk-active">
                      <a href="#">Catagory List</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <a class="uk-navbar-item uk-logo" href="#">Logo</a>
      </div>
    </nav>

    <div class="uk-section uk-section-muted uk-dark uk-padding">
      <div class="uk-container">
        <h3>Section Primary</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

