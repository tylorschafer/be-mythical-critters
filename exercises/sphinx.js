class Sphinx {
  constructor () {
    this.name = null
    this.riddles = []
    this.heroesEaten = 0
  }

  collectRiddle (riddle) {
    this.riddles.push(riddle)
    if (this.riddles.length > 3) {
      this.riddles.shift()
    }
  }

  attemptAnswer (attempt) {
    const result = this.riddles.find(o => o.answer === attempt)
    const position = this.riddles.indexOf(result)
    if (result) {
      this.riddles.splice(position, 1)
      if (this.riddles.length === 0) {
        return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS ' + '"' + attempt + '"' + '???'
      } else {
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    } else {
      this.heroesEaten += 1
    }
  }
}
module.exports = Sphinx
