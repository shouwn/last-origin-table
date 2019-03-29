<template>
  <div id="exploreTable" class="ui relaxed divided list">
    <sui-container fluid class="selection">
      <div class="repeat ui toggle checkbox">
        <input type="checkbox" name="public" v-model="isRepeat">
        <label> 탐색 반복 </label>
      </div>
      <sui-dropdown
        placeholder="정렬 기준"
        selection
        :options="sorts"
        v-model="currentSort"
        class="sort"
      />
    </sui-container>
    <div class="body">
      <explore-table-row
        v-for="exploreList in pagedExploreCombination"
        :key="exploreList.reduce((id, e) => { id += e.id; return id }, '')"
        :explores="exploreList"
        class="item"
      />
      <button class="fluid ui twitter button" @click="page++" :disabled="!isAnyMore">
        더보기
      </button>
    </div>
  </div>
</template>

<script>
  import { combination } from "@/utils/Functions";
  import ExploreTableRow from "@/components/ExploreTableRow";
  import ExploreSummary from "@/components/ExploreSummary";
  import ExploreDetail from "@/components/ExploreDetail";
  import SuiDropdown from "semantic-ui-vue/dist/commonjs/modules/Dropdown/Dropdown";
  import SuiContainer from "semantic-ui-vue/dist/commonjs/elements/Container/Container";

  export default {
    components: {SuiContainer, SuiDropdown, ExploreDetail, ExploreSummary, ExploreTableRow },
    props: {
      explores: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        isRepeat: true,
        page: 1,
        sorts: [{
          text: '자원합',
          value: 1
        }, {
          text: '부품',
          value: 2
        }, {
          text: '영양소',
          value: 3
        }, {
          text: '전력',
          value: 4
        }],
        currentSort: null,
        pageSize: 10
      }
    },
    computed: {
      exploreCombination: function () {
        return combination(this.explores, 4);
      },
      sortFunction: function () {
        let sort = null;

        switch (this.currentSort) {
          case 1: sort = this.adderTotal; break;
          case 2: sort = this.adderPart; break;
          case 3: sort = this.adderNourish; break;
          case 4: sort = this.adderPower; break;
          default : sort = this.adderTotal; break;
        }

        return sort;
      },
      reducer: function () {
        let acc = null;

        if (this.isRepeat) {
          acc = this.resourcePerHourAcc;
        } else {
          acc = this.resourceAcc;
        }

        return (value, explore) => {
          return acc(value, explore, this.sortFunction);
        };
      },
      sortedExploreCombination: function () {
        let key = null;

        if (this.isRepeat) {
          key = 'resourcePerHour';
        } else {
          key = 'resource';
        }

        let exploreCombination = this.exploreCombination.slice();

        exploreCombination.sort((arr1, arr2) => {
          return (arr2[key + this.currentSort] = arr2[key + this.currentSort] || arr2.reduce(this.reducer, 0))
            - (arr1[key + this.currentSort] = arr1[key + this.currentSort] || arr1.reduce(this.reducer, 0));
        });

        this.page = 1;

        return exploreCombination;
      },
      pagedExploreCombination: function () {
        return this.sortedExploreCombination.slice(0, this.page * this.pageSize);
      },
      isAnyMore: function () {
        return this.exploreCombination.length > this.page * this.pageSize;
      }
    },
    methods: {
      resourceAcc: function (value, explore, adder) {
        return adder(value, explore.resource);
      },
      resourcePerHourAcc: function (value, explore, adder) {
        return adder(value, explore.resourcePerHour);
      },
      adderPower: function (value, resource) {
        return value + resource.power;
      },
      adderNourish: function (value, resource) {
        return value + resource.nourish;
      },
      adderPart: function (value, resource) {
        return value + resource.part;
      },
      adderTotal: function (value, resource) {
        return value + resource.amount;
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
  .selection {
    margin-bottom: 1em;
  }
  .selection .repeat {
  }
  .selection .sort {
  }
</style>
