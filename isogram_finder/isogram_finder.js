const IsogramFinder = function (word) {
    this.word = word;

}

IsogramFinder.prototype.isIsogram = function () {
    const isogram = this.word.split("").every((letter, index) => {
        return this.word.indexOf(letter) === index 
    });
    return isogram
}

module.exports = IsogramFinder;
