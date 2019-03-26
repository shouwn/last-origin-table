import Stage from '@/models/Stage'
import Resource from '@/models/Resource'

class Explore {

  static getResourcePerHour(explore) {

    const t = 60 / explore.time;
    let perHour = new Resource(0, 0, 0);

    for (let key in perHour) {
      perHour[key] *= t;
    }

    return perHour;
  }

  constructor (area, section, time, part, nourish, power) {
    this.time = time;
    this.stage = new Stage(area, section);
    this.resource = new Resource(part, nourish, power);
  }

  equals (other) {
    return other && this.time === other.time
      && this.stage.equals(other.stage)
      && this.resource.equals(other.resource)
  }
}

export default Explore
