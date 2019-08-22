<template>
  <nav class="navbar">
    <ul class="link-styles">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/jokes">
          More chuck
          jokes
        </router-link>
      </li>
    </ul>
  </nav>
</template>
      
    
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.navbar {
  width: 100%;
  height: 100px;
  background-color: rgb(252, 237, 109);
}

ul li {
  list-style: none;
  font-size: 22px;
  font-family: Verdana,Tahoma, sans-serif;
}
.link-styles li {
  
  display: inline;
  font-size: 22px;
  font-family: Verdana,Tahoma, sans-serif;
  line-height: 100px;
  padding: 300px;
}
</style>

