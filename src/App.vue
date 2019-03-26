<template>
  <div id="app">
    <StageList/>
  </div>
</template>

<script>
import StageList from "@/components/StageList";

export default {
  name: 'app',
  components: { StageList }
}
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
