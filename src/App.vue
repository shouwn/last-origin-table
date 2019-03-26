<template>
  <div id="app">
    <StageList
      :stages="stages"
    />
  </div>
</template>

<script>
  import StageList from '@/components/StageList';
  import exploreData from '@/assets/exploreData';

  export default {
    name: 'app',
    components: { StageList },
    data () {
      return {
        stages: exploreData.map(e => { return e.stage })
          .filter(s => { return s.area === 1 })
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
