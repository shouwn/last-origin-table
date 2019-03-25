<template>
  <sui-table-row @click="contentVisible = !contentVisible">
    <sui-table-cell>
      <sui-label
        v-for="stage in exploreSet.stages"
        :key="stage.id"
      >
        {{ stage.area + '-' + stage.section }}
      </sui-label>
    </sui-table-cell>
    <sui-table-cell>{{ exploreSet.partPerHour }}</sui-table-cell>
    <sui-table-cell>{{ exploreSet.nourishPerHour }}</sui-table-cell>
    <sui-table-cell>{{ exploreSet.powerPerHour }}</sui-table-cell>
    <sui-table-cell>{{ exploreSet.resourceSumPerHour }}</sui-table-cell>
  </sui-table-row>
</template>

<script>
import ExploreSet from '@/models/ExploreSet';

export default {
  props: {
    exploreSet: {
      type: ExploreSet,
      required: true
    }
  },
  data () {
    return {
      contentVisible: false
    }
  }
}
</script>

<style scoped>

</style>
