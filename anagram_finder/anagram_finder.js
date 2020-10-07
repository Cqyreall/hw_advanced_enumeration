const AnagramFinder = function (word) {
    this.word = word.toLowerCase()

}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

    const anagrams = otherWords.filter((letter) => {
        return letter.toLowerCase().replace(/[\W_]+/g, "").split("").sort().join("") === this.word.replace(/[\W_]+/g, "").split("").sort().join("")
    })

    console.log(otherWords[0].toLowerCase().replace(/[\W_]+/g, "").split("").sort())
    return anagrams;

}

module.exports = AnagramFinder;
