<template>
  <div id="app">
    <StageBoard
      :stages="stages"
    />
    <ExploreSummary/>
  </div>
</template>

<script>
  import StageBoard from '@/components/StageBoard';
  import exploreData from '@/assets/exploreData';
  import ExploreSummary from '@/components/ExploreSummary';

  export default {
    name: 'app',
    components: { StageBoard, ExploreSummary },
    data () {
      return {
        stages: exploreData.map(e => { return e.stage })
      }
    }
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
