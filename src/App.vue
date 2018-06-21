<template>
  <div id="app">
    <my-head></my-head>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MyHead from './components/MyHead/MyHead'

  export default {
    name: 'App',
    components: {
      MyHead,
    }
  }
</script>

<style>

</style>
