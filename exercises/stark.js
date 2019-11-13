class Stark {
    constructor(name, location = 'Winterfell') {
        this.name = name;
        this.location = location;
        this.safe = false;
    }

    houseWords() {
        return this.safe === false ? 'Winter is Coming' : 'The North Remembers';
    }
}
module.exports = Stark;