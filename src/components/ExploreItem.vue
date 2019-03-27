<template>
  <div id="exploreItem" class="ui segment">
    <div class="itemTop">
      <div class="stage ui blue large label">
        {{ stage.area + '-' + stage.section }}
      </div>
      <div class="time ui blue large label">
        {{ explore.time + '분'}}
      </div>
    </div>
    <div class="itemBottom">
      <resource-item
        title="1시간 당 자원"
        :resource="resourcePerHour"
      />
      <resource-item
        title="1회 탐색 자원"
        :resource="resource"
      />
    </div>
  </div>
</template>

<script>
  import Explore from "@/models/Explore";
  import ResourceItem from "@/components/ResourceItem";

  export default {
    components: { ResourceItem },
    props: {
      explore: {
        type: Explore,
        required: true
      }
    },
    computed: {
      stage: function () {
        return this.explore.stage;
      },
      resource: function () {
        return this.explore.resource;
      },
      resourcePerHour: function () {
        return this.explore.resourcePerHour
      }
    }
  }
</script>

<style scoped>
  #exploreItem {
    background-color: aliceblue;
    margin-right: 1em;
    margin-left: 1em;
  }

  .itemTop {
    margin-bottom: 4em;
  }
  .itemBottom {

  }
  .stage {
    float: left;
  }
  .time {
    float: right;
  }
</style>
