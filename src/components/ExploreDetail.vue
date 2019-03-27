<template>
  <div id="exploreDetail" class="ui four column stackable">
    <explore-item
      v-for="explore in explores"
      :key="explore.id"
      :explore="explore"
    />
  </div>
</template>

<script>
  import ExploreItem from "@/components/ExploreItem";

  export default {
    components: { ExploreItem },
    props: {
      explores: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  #exploreDetail {
    text-align: left;
  }
</style>
