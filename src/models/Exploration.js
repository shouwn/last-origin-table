import Stage from '@/models/Stage'
import Resource from '@/models/Resource'

class Exploration {
  constructor (area, section, time, part, nourish, power) {
    this.time = time;
    this.stage = new Stage(area, section);
    this.resource = new Resource(part, nourish, power);
  }
}

export default Exploration
