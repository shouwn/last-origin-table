<template>
  <div class="ui styled fluid accordion">
    <explore-table-row
      v-for="exploreList in exploreCombination"
      :key="exploreList.reduce((id, e) => { id += e.id; return id }, '')"
      :explores="exploreList"
    />
  </div>
</template>

<script>
  import { combination } from "@/utils/Functions";
  import ExploreTableRow from "@/components/ExploreTableRow";

  export default {
    components: { ExploreTableRow },
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

        return exploreCombination;
      }
    }
  }
</script>

<style scoped>

</style>
