<template>
  <div id="exploreTableRow">
    <explore-summary
      :explores="sortedExplores"
      @click.native="detailVisible = !detailVisible"
      class="title"
    />
    <transition-expand>
      <explore-detail
        class="content"
        v-if="detailVisible"
        :explores="sortedExplores"
      />
    </transition-expand>
  </div>
</template>

<script>
  import ExploreSummary from '@/components/ExploreSummary';
  import ExploreDetail from '@/components/ExploreDetail';
  import TransitionExpand from '@/components/TransitionExpand';

  export default {
    components: { ExploreSummary, ExploreDetail, TransitionExpand },
    props: {
      explores: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        detailVisible: false
      }
    },
    computed: {
      sortedExplores: function () {
        let copyExplores = this.explores.slice();
        copyExplores.sort((e1, e2) => e1.stage.compareTo(e2.stage));
        return copyExplores;
      }
    }
  }
</script>

<style scoped>
  #exploreTableRow {
    margin-right: auto;
    margin-left: auto;
  }
</style>
