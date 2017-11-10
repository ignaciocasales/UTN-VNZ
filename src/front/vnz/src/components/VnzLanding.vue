<template>
  <div class="background">
    <vnz-toolbar></vnz-toolbar>
  </div>
</template>

<script>
  import VnzToolbar from './VnzToolbar.vue'

  export default {
    name: 'VnzLanding',
    components: {
      VnzToolbar
    },
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .background {
    background: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.2)
    ),
    url('/statics/bg-home.jpg') no-repeat;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
</style>
