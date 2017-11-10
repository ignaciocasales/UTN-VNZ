<template>
  <div>
    <q-toolbar color="secondary" :inverted=true>
      <q-toolbar-title>
        VNZ
      </q-toolbar-title>
    </q-toolbar>
  </div>
</template>

<script>
  import {
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon
  } from 'quasar'

  export default {
    name: 'VnzToolbar',
    components: {
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon
    },
    data () {
      return {}
    }
  }
</script>

<style>
</style>
