<template>
  <sui-table celled>
    <sui-table-header>
      <sui-table-header-cell>탐색지역</sui-table-header-cell>
      <sui-table-header-cell>부품</sui-table-header-cell>
      <sui-table-header-cell>영양소</sui-table-header-cell>
      <sui-table-header-cell>전력</sui-table-header-cell>
      <sui-table-header-cell>효율</sui-table-header-cell>
    </sui-table-header>
    <sui-table-body>
      <TableRow
        v-for="exploreSet in exploreSets"
        :explore-set="exploreSet"
      />
    </sui-table-body>
  </sui-table>
</template>

<script>
import data from '@/assets/exploreData';
import { combination } from '@/utils/Functions'
import ExploreSet from "@/models/ExploreSet";
import TableRow from "@/components/ExploreTableRow";

let exploreSets = combination(data, 4).map(exploreArr => new ExploreSet(exploreArr));
exploreSets.sort((e1, e2) => e1.resourceSumPerHour - e2.resourceSumPerHour);

export default {
  name: "Table",
  components: {TableRow},
  data () {
    return {
      exploreSets: exploreSets
    }
  }
}
</script>

<style scoped>

</style>
