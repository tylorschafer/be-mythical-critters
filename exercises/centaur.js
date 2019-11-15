class Centaur {
  constructor (name) {
    this.name = name
    this.breed = 'Palomino'
    this.standing = true
    this.layingDown = false
    this.stamina = 3
    this.cranky = false
  }

  staminaCheck () {
    this.stamina <= 0 ? this.cranky = true : this.cranky = false
  }

  shoot () {
    if (this.cranky === false && this.layingDown === false) {
      this.stamina -= 1
      this.staminaCheck()
      return 'Twang!!!'
    } else {
      return 'NO!'
    }
  }

  run () {
    if (this.cranky === false && this.layingDown === false) {
      this.stamina -= 1
      this.staminaCheck()
      return 'Clop clop clop clop!!!'
    } else {
      return 'NO!'
    }
  }

  sleep () {
    if (this.standing === true) {
      return 'NO!'
    } else {
      this.cranky = false
      return 'ZZZZ'
    }
  }

  layDown () {
    this.layingDown = true
    this.standing = false
  }

  standUp () {
    this.standing = true
    this.layingDown = false
  }

  drinkPotion () {
    if (this.standing === true) {
      this.cranky === false ? this.cranky = true : this.cranky = false
    } else {
      return "Not while I\'m laying down!"
    }
  }
}
module.exports = Centaur
