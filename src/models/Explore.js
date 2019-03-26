import Stage from '@/models/Stage'
import Resource from '@/models/Resource'

class Explore {

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

  get resourcePerHour () {

    const t = 60 / this.time;
    let perHour = new Resource(0, 0, 0);

    for (let key in perHour) {
      perHour[key] *= t;
    }

    return perHour;
  }
}

export default Explore
