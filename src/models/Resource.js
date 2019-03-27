class Resource {
  constructor (part, nourish, power) {
    this.part = part;
    this.nourish = nourish;
    this.power = power;
  }

  equals (other) {
    return other && this.part === other.part
      && this.nourish === other.nourish
      && this.power === other.power;
  }

  get amount () {
    return this.part + this.nourish + this.power;
  }
}

export default Resource
