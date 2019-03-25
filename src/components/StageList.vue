<template>
  <div>
    <div
      v-for="(stages, area) in groupedStages"
      :key="area"
    >
        <StageItem
          v-for="stage in stages"
          :key="stage.id"
          :stage="stage"
          :selected="stage.selected"
          @select="selectStage"
        />
    </div>
  </div>
</template>

<script>
import StageItem from '@/components/StageItem';
import data from '@/assets/exploreData';
import Stage from '@/models/Stage';

const allStage = data.map(exploration => exploration.stage);

const groupedStages = allStage.reduce(function (rv, stage) {
  stage.selected = false;
  (rv[stage.area] = rv[stage.area] || []).push(stage);
  return rv;
}, {});

allStage[allStage.length - 1].selected = true;

let selectedStage = allStage[allStage.length - 1];

export default {
  components: {
    StageItem
  },
  data () {
    return {
      groupedStages: groupedStages
    }
  },
  methods: {
    selectStage (stage) {
      selectedStage.selected = false;
      stage.selected = true;
      selectedStage = stage;
      this.$emit('changeSelectedStage', stage)
    }
  }
}
</script>

<style scoped>

</style>
