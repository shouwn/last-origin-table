<template>
  <sui-table id="exploreTable" celled>
    <sui-table-header>
      <sui-table-header-cell>탐색지역</sui-table-header-cell>
      <sui-table-header-cell>부품</sui-table-header-cell>
      <sui-table-header-cell>영양소</sui-table-header-cell>
      <sui-table-header-cell>전력</sui-table-header-cell>
      <sui-table-header-cell>효율</sui-table-header-cell>
    </sui-table-header>

    <sui-table-body class="ui accordion">
          <TableRow
            v-for="exploreSet in visibleExploreSetList"
            :explore-set="exploreSet"
            :key="exploreSet.id"
          />
    </sui-table-body>
  </sui-table>
</template>

<script>
import data from '@/assets/exploreData';
import { combination } from '@/utils/Functions'
import ExploreSet from "@/models/ExploreSet";
import TableRow from "@/components/ExploreTableRow";
import Stage from "@/models/Stage";

export default {
  name: "Table",
  components: { TableRow },
  props: {
    selectedStage: {
      type: Stage,
      required: true
    }
  },
  data () {
    return {
      size: 10
    }
  },
  computed: {
    exploreSets: function () {
      let filterData = data.filter(e => {
        if (this.selectedStage.area > e.stage.area) {
          return true;
        } else if (this.selectedStage.area === e.stage.area) {
          return this.selectedStage.section >= e.stage.section;
        }

        return false;
      });

      return combination(filterData, 4)
        .map(exploreArr => new ExploreSet(exploreArr))
    },
    visibleExploreSetList: function () {
      this.exploreSets.sort((e1, e2) => e2.resourceSumPerHour - e1.resourceSumPerHour);
      return this.exploreSets.slice(0, this.size);
    }
  }
}
</script>

<style scoped>
#exploreTable {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
