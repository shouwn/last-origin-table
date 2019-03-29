<template>
  <div id="app">
    <StageBoard
      id="stageBoard"
      :stages="stages"
      @stagesSelectedChange="stagesSelectedChange"
    />
    <ExploreTable
      :explores="selectedExplore"
    />
    <button
      id="scrollToTopButton"
      class="ui icon black basic huge button"
      @click="scrollToTop"
    >
      TOP
    </button>
  </div>
</template>

<script>
  import StageBoard from '@/components/StageBoard';
  import exploreData from '@/assets/exploreData';
  import ExploreTable from "@/components/ExploreTable";

  export default {
    name: 'app',
    components: { ExploreTable, StageBoard },
    data () {
      return {
        selectedExplore: [],
        exploreData: exploreData
      }
    },
    computed: {
      stages: function () {
        return exploreData.map(e => { return e.stage })
      }
    },
    methods: {
      stagesSelectedChange: function (stages, selected) {
        let exploresByStages = this.exploreData.filter(function (explore) {
          return !!stages.find(s => s.id === explore.stage.id);
        });

        if (selected) {
          this.selectedExplore = this.selectedExplore.concat(exploresByStages);
        } else {

          this.selectedExplore = this.selectedExplore.filter(function (explore) {
            return !exploresByStages.find(e => e.id === explore.id);
          });
        }
      },
      scrollToTop: function () {
        window.scrollTo(0,0);
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
  #scrollToTopButton {
    position: fixed;
    z-index: 999;
    bottom: 2em;
    right:1em;
    -webkit-box-shadow: 0 1px 2px 0 #777;
    box-shadow: 0 1px 2px 0 #777;
    background-color:#ccc;
  }
</style>
