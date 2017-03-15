// equivalent to `$(document).ready(function() {...})`
$(function () {
  watchFormSubmission();
});

// Watch for and handle form submissions
function watchFormSubmission() {
  $('.js-text-form').submit(function (event) {
    event.preventDefault();
    var text = $('#user-text').val();
    console.log(text);
    reportOnText(removeReturns(text));
  });
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
  console.log(text);
}

function reportOnText(text) {
  var tokenedText = tokenizeText(text);
  var numDistinctWords = countDistinctWords(tokenedText);
  var numTotalWords = tokenedText.length;
  var averageWordLength = getAverageWordLength(tokenedText);
  $('.wordCount').text(numTotalWords);
  $('.uniqueWordCount').text(numDistinctWords);
  $('.avgWordLength').text(
    averageWordLength + " characters");
  $('.js-text-report').removeClass('hidden');
}

function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function countDistinctWords(tokenedText) {
  var distinctWords = [];
  for (var i = 0; i < tokenedText.length; i++) {
 if (distinctWords.indexOf(tokenedText[i]) === -1) {
      distinctWords.push(tokenedText[i]);
    }
  }
  return distinctWords.length;
}

function getAverageWordLength(tokenedText) {
 var totalLength = tokenedText.join("").length;
  return (totalLength / tokenedText.length).toFixed(2);
}