<template>
  <div id="stageBoard">
    <StageList
      v-for="area in areas"
      :key="area"
      :stages="stageMap[area]"
      @stagesSelectedChange="stagesSelectedChange"
    />
  </div>
</template>

<script>
  import StageList from '@/components/StageList';

  export default {
    components: {
      StageList
    },
    props: {
      stages: {
        type: Array,
        required: true
      }
    },
    computed: {
      stageMap: function () {
        return this.stages.reduce(function (rv, stage) {
          (rv[stage.area] = rv[stage.area] || []).push(stage);
          return rv;
        }, {});
      },
      areas: function () {
        let areas = this.stages.map(s => s.area);
        areas.sort((a1, a2)=> {
          if (typeof a1 === 'number' && typeof a2 === 'number') {
            return a1 - a2;
          } else {
            return a1.localeCompare(a2);
          }
        });
        return areas.reduce(function (arr, area) {
          if (arr.indexOf(area) < 0) {
            arr.push(area);
          }
          return arr;
        }, []);
      }
    },
    methods: {
      stagesSelectedChange: function (stages, selected) {
        this.$emit('stagesSelectedChange', stages, selected);
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
