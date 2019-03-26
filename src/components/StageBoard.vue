<template>
  <div id="stageBoard">
    <div
      v-for="(stages, area) in areas"
      :key="area"
    >
      <StageListItem
        v-for="stage in stages"
        :key="stage.id"
        :text="stage.area + '-' + stage.section"
        :selected="stage.selected"
        @selectedChange="selectedChange"
      />
      <stageListItem
        :text="stages[0].area + '지역'"
        :selected="false"
      />
    </div>
  </div>
</template>

<script>
  import StageListItem from '@/components/SelectableItem';
  import exploreData from '@/assets/exploreData'

  const stages = exploreData.map(e => e.stage);

  for (let stage of stages) {

  }

  const areas = stages.reduce(function (rv, stage) {
    stage.selected = false;
    (rv[stage.area] = rv[stage.area] || []).push(stage);
    return rv;
  }, {});

  export default {
    components: {
      StageListItem
    },
    data () {
      return {
        areas: areas
      }
    },
    methods: {
      selectedChange: function (text, selected) {
        console.log('test');
        this.selected = !this.selected;
      }
    }
  }
</script>

<style scoped>
  #stageBoard {
    margin-right: auto;
    margin-left: auto;
  }
</style>
