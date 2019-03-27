<template>
  <div>
    <StageItem
      v-for="stage in stages"
      :key="stage.id"
      :itemId="stage.id"
      :text="stage.area + '-' + stage.section"
      :selected="stageMap[stage.id].selected"
      @selectedChange="itemSelectedChange"
    />
    <StageItem
      :itemId="stages[0].area"
      :text="stages[0].area + '지역'"
      :selected="isAllStageSelected"
      @selectedChange="lineSelectedChange"
    />
  </div>

</template>

<script>
  import StageItem from '@/components/SelectableItem';

  export default {
    components: {
      StageItem
    },
    props: {
      stages: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        selectedCount: 0
      }
    },
    computed: {
      stageMap: function () {
        return this.stages.reduce((map, stage) => {
          map[stage.id] = { stage: stage, selected: false };
          return map;
        }, {});
      },
      isAllStageSelected: {
        get: function () {
          return this.selectedCount === this.stages.length;
        },
        set: function (selected) {
          if (selected) {
            this.selectedCount = this.stages.length;
          } else {
            this.selectedCount = 0;
          }
        }
      }
    },
    methods: {
      itemSelectedChange: function (stageId) {
        let stageItem = this.stageMap[stageId];
        stageItem.selected = !stageItem.selected;

        if (stageItem.selected) {
          this.selectedCount++;
        } else {
          this.selectedCount--;
        }

        this.$emit('stagesSelectedChange', [stageItem.stage], stageItem.selected);
      },
      lineSelectedChange: function () {

        let changedStageList = [];

        this.isAllStageSelected = !this.isAllStageSelected;

        for (let stageId in this.stageMap) {
          let stageItem = this.stageMap[stageId];

          if (stageItem.selected !== this.isAllStageSelected) {
            stageItem.selected = this.isAllStageSelected;
            changedStageList.push(stageItem.stage);
          }
        }

        this.$emit('stagesSelectedChange', changedStageList, this.isAllStageSelected);
      }
    }
  }
</script>

<style scoped>

</style>
