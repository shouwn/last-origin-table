<template>
  <div class="top ui large labels">
    <div class="ui blue basic horizontal label">{{ title }}</div>
    <div class="ui teal large label" v-for="(value, key) in resource">
      {{ resourceName[key] }}
      <div class="detail">
        {{ Math.round(value) }}
      </div>
    </div>
  </div>
</template>

<script>
  import Resource from "@/models/Resource";

  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      resource: {
        type: Resource,
        required: true
      }
    },
    data () {
      return {
        resourceName: {
          power: '전력',
          nourish: '영양소',
          part: '부품'
        }
      }
    }
  }
</script>

<style scoped>

</style>
