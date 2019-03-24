import Resource from "@/models/Resource";

class ExploreSet {
  constructor (exploreArray) {

    this.stages = exploreArray.map(e => e.stage);

    this.resourcePerHour = exploreArray.reduce(function (o, r) {
      let resourcePerHour = r.resourcePerHour;

      o.part += resourcePerHour.part;
      o.nourish += resourcePerHour.nourish;
      o.power += resourcePerHour.power;

      return o;
    }, new Resource(0, 0, 0));
  }

  get partPerHour () {
    return Math.round(this.resourcePerHour.part);
  }

  get nourishPerHour () {
    return Math.round(this.resourcePerHour.nourish);
  }

  get powerPerHour() {
    return Math.round(this.resourcePerHour.nourish);
  }

  get resourceSumPerHour() {
    return this.partPerHour + this.nourishPerHour + this.powerPerHour;
  }
}

export default ExploreSet
