<template>
  <div id="app">
    <StageList @changeSelectedStage="selectStage"/>
    <ExploreTable :selected-stage="selectedStage"/>
  </div>
</template>

<script>
import StageList from '@/components/StageList';
import ExploreTable from "@/components/ExploreTable";
import Stage from "@/models/Stage";

export default {
  name: 'App',
  components: { ExploreTable, StageList },
  data () {
    return {
      selectedStage: new Stage(4, 8)
    }
  },
  methods: {
    selectStage: function (stage) {
      this.selectedStage = stage;
    }
  }
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
