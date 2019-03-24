class Stage {
  constructor (area, section) {
    this.area = area;
    this.section = section;
  }

  get id () {
    return this.area * 10 + this.section;
  }
}

export default Stage
