<template>
  <div>
    <Navbar />
    <Homepage />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Homepage from '@/components/Homepage.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Homepage
  }
}
</script>
