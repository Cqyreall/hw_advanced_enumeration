const AnagramFinder = function (word) {
    this.word = word.split("")

}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

    const words = otherWords.map((letter) => {
        return letter.split("").join("")
    })
    const anagrams = this.word.filter((letter) => {
        return letter.join("") === words
    })
    console.log(anagrams);
    return anagrams;

}

module.exports = AnagramFinder;
