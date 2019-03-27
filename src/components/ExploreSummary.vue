<template>
  <div id="exploreSummary">
    <div class="top ui large labels">
      <div class="ui blue basic horizontal label">탐색 목록</div>
      <div class="ui label" v-for="stage in stages">
        {{ stage.area + '-' + stage.section }}
      </div>
    </div>
    <div class="bottom">
      <resource-item
        title="1시간 당 자원"
        :resource="totalResourcePerHour"
      />
      <resource-item
        title="1회 탐색 자원"
        :resource="totalResource"
      />
    </div>
  </div>
</template>

<script>
  import Resource from "@/models/Resource";
  import ResourceItem from '@/components/ResourceItem';

  export default {
    components: {
      ResourceItem
    },
    props: {
      explores: {
        type: Array,
        required: true
      }
    },
    computed: {
      stages: function () {
        let stage = this.explores.map(e => e.stage);
        stage.sort((s1, s2) => {
          let areaCompare = s1.area - s2.area;
          if (areaCompare === 0) {
            return s1.section - s2.section;
          } else {
            return areaCompare;
          }
        });
        return this.explores.map(e => e.stage);
      },
      totalResource: function () {
        return this.explores.map(e => e.resource)
          .reduce((total, resource) => {
            total.part += resource.part;
            total.nourish += resource.nourish;
            total.power += resource.power;

            return total;
          }, new Resource(0, 0, 0));
      },
      totalResourcePerHour: function () {
        return this.explores.map(e => e.resourcePerHour)
          .reduce((total, resource) => {
            total.part += resource.part;
            total.nourish += resource.nourish;
            total.power += resource.power;

            return total;
          }, new Resource(0, 0, 0));
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  #exploreSummary {
    border: 1px solid black;
    text-align: left;
  }
  .top {
    margin-top: 0.2em;
  }
  .bottom {
    margin-top: 1em;
    margin-bottom: 0.3em;
  }
</style>
