<template>
  <sui-button
    :active="selected"
    @click="$emit('select', stage)"
  >
    {{ stage.area + '-' + stage.section }}
  </sui-button>
</template>

<script>
import Stage from '@/models/Stage'

export default {
  props: {
    stage: {
      type: Stage,
      required: true
    },
    selected: {
      required: true
    }
  }
}
</script>

<style scoped>

</style>
