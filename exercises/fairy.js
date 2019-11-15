class Fairy {
  constructor (name, disposition = 'Good natured') {
    this.name = name
    this.dust = 10
    this.clothes = { dresses: ['Iris'] }
    this.disposition = disposition
    this.humanWards = []
  }

  receiveBelief () {
    this.dust += 1
  }

  believe () {
    this.dust += 10
  }

  makeDresses (dresses) {
    this.clothes.dresses = this.clothes.dresses.concat(dresses)
  }

  provoke () {
    this.disposition = 'Vengeful'
  }

  replaceInfant (infant) {
    if (this.disposition = 'Vengeful') {
      infant.disposition = 'Malicious'
      this.humanWards.push(infant)
      if (this.humanWards.length >= 3) {
        this.disposition = 'Good natured'
      };
    }
    return infant
  }
}
module.exports = Fairy
