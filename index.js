function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for(var i = 0; i < instruments.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i])
  }
  return empty
}

<<<<<<< HEAD
function johnLennonFacts(facts) {
  var results = [];
  var i = 0;
  while (i < facts.length) {
    results.push(facts[i] + "!!!");
    i++;
  }
  return results;
}

function iLoveTheBeatles(number) {
  var empty = []
  do {
    empty.push("I love the Beatles!") 
    number++
  } while (number <= 14)
  return empty
}
=======
function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newFacts = [];
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
}
>>>>>>> 2990f2771f56b5d973ce9fd2ec012b075c6b1bed
