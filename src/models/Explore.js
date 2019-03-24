import Stage from '@/models/Stage'
import Resource from '@/models/Resource'

class Explore {

  constructor (area, section, time, part, nourish, power) {
    this.time = time;
    this.stage = new Stage(area, section);
    this.resource = new Resource(part, nourish, power);
    const t = 60 / time;
    this._resourcePerHour = new Resource(part * t, nourish * t, power * t);
  }

  get resourcePerHour () {
    return this._resourcePerHour;
  }
}

export default Explore
