function getAverageWordLength(tokens) {
  // join all tokens together to create one big string
  // then divide that total length by the number
  // of tokens to get average
  var totalLength = tokens.join("").length;
  return (totalLength / tokens.length).toFixed(2);
}

function countDistinctWords(tokens) {
  // create an empty array of distinct words.
  // then we'll iterate over our tokens and check to see if the token is already
  // in distinct words. if it is we do nothing, if it's not we add it to our
  // list of distinct words
  var distinctWords = [];
  for (var i=0; i<tokens.length; i++) {
    if (distinctWords.indexOf(tokens[i]) === -1) {
      distinctWords.push(tokens[i]);
    }
  }
  return distinctWords.length;
}

// this is a naive implementation of text tokenization
// https://en.wikipedia.org/wiki/Tokenization_(lexical_analysis).
// the goal is to standardize some of the differences between
// words in a text by converting all to lowercase, removing punctuation
// etc., so that, for instance, the "there" in 'high there.' and "high ThErE "
// would both be converted into the same value ("there")
function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

// generate and display analytics on text

function reportOnText(text) {  // COMES FROM watchFormSubmission
  // tokenize our text then compute our data points

  var tokens = tokenizeText(text); // SENDS INFO TO tokenizeText RETURNS TOKENIZED INFO
  var numDistinctWords = countDistinctWords(tokens); // SENDS INFO TO countDistinctWords
  var numTotalWords = tokens.length; //GETS LENGTH FROM ARRAY CREATED BY countDistinctWords
  var averageWordLength = getAverageWordLength(tokens); // SENDS INFO TO getAverageWordLength

  // take our data and display it in the dom
  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(numTotalWords);
  textReport.find('.js-unique-word-count').text(numDistinctWords);
  textReport.find('.js-average-word-length').text(
    averageWordLength + " characters");
  textReport.removeClass('hidden');
}

// Watch for and handle form submissions
function watchFormSubmission() {
  $('.js-text-form').submit(function(event) {
    event.preventDefault();
    // get the text the user submitted
    var userText = $(this).find('#user-text').val();
    reportOnText(removeReturns(userText)); // STARTS HERE GOES TO reportOnText via removeReturns
  });
}

// equivalent to `$(document).ready(function() {...})`
$(function() {
  watchFormSubmission();
})