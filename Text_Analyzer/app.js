function avgWordLength(words){
    var total = words.join("").length;
    return (total / words.length).toFixed(2);
}

function countWords(words){ //count distinct words
    var words = []; //creates empty array
    for (var i=0; i<words.length; i++) {
        if (words.indexOf(words[i])=== -1){ //indexOf finds first occurance of specified value, returns -1 if the value to search never occurs
            words.push(words[i]);
        }
    }
    return words.length; //returns length of array
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}


