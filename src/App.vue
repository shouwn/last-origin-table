<template>
  <div id="app">
    <StageList/>
  </div>
</template>

<script>
import StageList from '@/components/StageList';

export default {
  name: 'App',
  components: {StageList}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
