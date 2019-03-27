<template>
  <div id="exploreTable" class="ui relaxed divided list">
    <explore-table-row
      v-for="exploreList in exploreCombination"
      :key="exploreList.reduce((id, e) => { id += e.id; return id }, '')"
      :explores="exploreList"
      class="item"
    />
  </div>
</template>

<script>
  import { combination } from "@/utils/Functions";
  import ExploreTableRow from "@/components/ExploreTableRow";
  import ExploreSummary from "@/components/ExploreSummary";
  import ExploreDetail from "@/components/ExploreDetail";

  export default {
    components: { ExploreDetail, ExploreSummary, ExploreTableRow },
    props: {
      explores: {
        type: Array,
        required: true
      }
    },
    computed: {
      exploreCombination: function () {
        let exploreCombination = combination(this.explores, 4);
        let adder = function (value, e) {
          return value + e.resource.amount;
        };

        exploreCombination.sort((arr1, arr2) => {
          return arr2.reduce(adder, 0) - arr1.reduce(adder, 0);
        });

        return exploreCombination.slice(0, 10);
      }
    }
  }
</script>

<style scoped>
  #exploreTable {
    width: 50vw;
    margin-right: auto;
    margin-left: auto;
    margin-top: 6em;
  }

</style>
