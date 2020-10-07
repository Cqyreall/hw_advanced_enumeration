const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () {

  const pangram = this.alphabet.every((letter) => {
    return this.phrase.toLowerCase().includes(letter)
  })
  return pangram

}

module.exports = PangramFinder;
