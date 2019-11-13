class Werewolf {
    constructor(name, location, human = true, wolf = false, hungry = false) {
        this.name = name;
        this.location = location;
        this.human = human;
        this.wolf = wolf;
        this.hungry = hungry;
    }

    change() {
        this.human = !this.human;
        this.wolf = !this.wolf;
        this.wolf === true ? this.hungry = true : this.hungry = false;
    }

    eat(victim) {
        if (this.hungry === false) {
            return 'I cannot eat because I am not hungry.';
        }
        else {
            victim.alive = false;
            this.change();
            return 'YUM!';
        }
    }
}
module.exports = Werewolf;