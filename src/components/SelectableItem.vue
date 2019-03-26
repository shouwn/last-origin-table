<template>
  <div
    id="selectableItem"
    class="ui big label"
    :class="{green: selected}"
    @click="selectedChange"
  >
    {{ text }}
  </div>
</template>

<script>

  export default {
    props: {
      itemId: {
        required: true
      },
      text: {
        type: String,
        required: true
      },
      selected: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      selectedChange: function () {
        this.$emit('selectedChange', this.itemId);
      }
    }
  }
</script>

<style scoped>
  #selectableItem {
    margin-bottom: 0.1em;
  }
  #selectableItem:hover {
    cursor: pointer;
  }
</style>
