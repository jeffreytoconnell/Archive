function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort(); // REMOVES PUNCTUATION
}
  
function mostFrequentWord(text) { //CREATES FUNCTION 
  var words = getTokens(text);
  var wordFrequencies = {}; // CREATES OBJECT 
  for (var i = 0; i <= words.length; i++) { // INCREMENTS BY LENGTH OF WORDS
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    }
    else {
      wordFrequencies[words[i]]=1;
    }
  }
  var currentMaxKey = Object.keys(wordFrequencies)[0];  // CREATES ARRAY OF ALL WORDS IN OBJECT
  var currentMaxCount = wordFrequencies[currentMaxKey];
  
  for (var word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) { // DETERMINES IF WORD IS LONGEST THAN PAST WORDS
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  return currentMaxKey; // CALLS FUNCTION
}

