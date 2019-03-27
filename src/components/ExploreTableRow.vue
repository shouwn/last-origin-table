<template>
  <div id="exploreTableRow">
    <explore-summary
      :explores="explores"
      class="title"
    />
    <explore-detail
      class="content"
      :explores="explores"
    />
  </div>
</template>

<script>
  import ExploreSummary from '@/components/ExploreSummary';
  import ExploreDetail from '@/components/ExploreDetail';

  export default {
    components: { ExploreSummary, ExploreDetail },
    props: {
      explores: {
        type: Array,
        required: true
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
