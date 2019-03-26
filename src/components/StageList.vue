<template>
  <div id="stageList">
    <div
      v-for="(stages, area) in areas"
      :key="area"
    >
      <StageListItem
        v-for="stage in stages"
        :key="stage.id"
        :stage="stage"
        @selectedChange="selectedChange"
      />
    </div>
  </div>
</template>

<script>
  import StageListItem from '@/components/StageListItem';
  import exploreData from '@/assets/exploreData'

  const stages = exploreData.map(e => e.stage);

  const areas = stages.reduce(function (rv, stage) {
    (rv[stage.area] = rv[stage.area] || []).push(stage);
    return rv;
  }, {});

  export default {
    components: {
      StageListItem
    },
    data () {
      return {
        areas: areas,
        selectedStage: stages.slice()
      }
    },
    methods: {
      selectedChange: function (stage, selected) {
        if (selected) {
          this.selectedStage.push(stage);
        } else {
          this.selectedStage = this.selectedStage
            .filter(s => {
              return !s.equals(stage)
            })
        }
        console.log(this.selectedStage);
      }
    }
  }
</script>

<style scoped>
  #stageList {
    margin-right: auto;
    margin-left: auto;
  }
</style>
