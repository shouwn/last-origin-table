<template>
  <div
    class="ui label"
    :class="{green: selected}"
    @click="selectedChange"
  >
    {{ stage.area + '-' + stage.section }}
  </div>

</template>

<script>
  import Stage from '@/models/Stage'

  export default {
    props: {
      stage: {
        type: Stage,
        required: true
      }
    },
    data () {
      return {
        selected: true
      }
    },
    methods: {
      selectedChange: function () {
        this.selected = !this.selected;
        this.$emit('selectedChange', this.stage, this.selected);
      }
    }
  }
</script>

<style scoped>

</style>
