<template>
  <div id="app">
    <StageList/>
    <Table/>
  </div>
</template>

<script>
import StageList from '@/components/StageList';
import Table from "@/components/ExploreTable";

export default {
  name: 'App',
  components: {Table, StageList }
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
