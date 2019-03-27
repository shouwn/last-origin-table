<template>
  <div class="ui four column doubling stackable grid container">
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

</style>
