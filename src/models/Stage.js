class Stage {
  constructor (area, section) {
    this.area = area;
    this.section = section;
  }

  get id () {
    return this.area * 10 + this.section;
  }

  equals (other) {
    return other && this.area === other.area
      && this.section === other.section;
  }

  toString () {
    return this.area + '-' + this.section;
  }
}

export default Stage
