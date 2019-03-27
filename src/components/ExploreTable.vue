<template>
  <div id="exploreTable" class="ui relaxed divided list">
    <div id="repeatButton" class="ui toggle checkbox">
      <input type="checkbox" name="public" v-model="isRepeat">
      <label> 탐색 반복 </label>
    </div>
    <explore-table-row
      v-for="exploreList in sortedExploreCombination"
      :key="exploreList.reduce((id, e) => { id += e.id; return id }, '')"
      :explores="exploreList"
      class="item"
    />
  </div>
</template>

<script>
  import {combination} from "@/utils/Functions";
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
    data () {
      return {
        isRepeat: true
      }
    },
    computed: {
      exploreCombination: function () {
        return combination(this.explores, 4);
      },
      sortedExploreCombination: function () {
        let adder = null;
        let key = null;

        if (this.isRepeat) {
          adder = this.adderAmountPerHour;
          key = 'amountPerHour';
        } else {
          adder = this.adderAmount;
          key = 'amount';
        }

        let exploreCombination = this.exploreCombination.slice();

        exploreCombination.sort((arr1, arr2) => {
          return (arr2[key] = arr2[key] || arr2.reduce(adder, 0))
            - (arr1[key] = arr1[key] || arr1.reduce(adder, 0));
        });

        return exploreCombination.slice(0, 10);
      }
    },
    methods: {
      adderAmount: function (value, e) {
        return value + e.resource.amount;
      },
      adderAmountPerHour: function (value, e) {
        return value + e.resourcePerHour.amount;
      }
    }
  }
</script>

<style scoped>
  #exploreTable {
    text-align: left;
    width: 50vw;
    margin-right: auto;
    margin-left: auto;
    margin-top: 6em;
  }
  #repeatButton {
    margin-bottom: 1em;
  }
</style>
