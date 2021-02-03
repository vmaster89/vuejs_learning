<template>
  <div id="app">
    <Header msg="Header" />
    <StartView msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import StartView from './components/StartView.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    StartView
  }
}
</script>

<style>
</style>
