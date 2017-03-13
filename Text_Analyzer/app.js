function avgWordLength(words) {
    var total = words.join("").length;
    return (total / words.length).toFixed(2);
}

function countWords(words) { //count distinct words
    var words = []; //creates empty array
    for (var i = 0; i < words.length; i++) {
        if (words.indexOf(words[i]) === -1) { //indexOf finds first occurance of specified value, returns -1 if the value to search never occurs
            words.push(words[i]);
        }
    }
    return words.length; //returns length of array
}

function lowerCaseText(text) {
    return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
    return text.replace(/\r?\n|\r/g, "");
}

function report(text) {
    var words = lowerCaseText(text);  //from function above
    var numDistinctWords = countWords(words); //from function above
    var numTotalWords = words.length; //from array created above
    var averageWordLength = avgWordLength(words); //from function above

    // DISPLAY DATA
    var textReport = $('.js-text-report');
    textReport.find('.js-word-count').text(numTotalWords);
    textReport.find('.js-unique-word-count').text(numDistinctWords);
    textReport.find('.js-average-word-length').text(
        averageWordLength + " characters");
    textReport.removeClass('hidden');
}

// Watch for and handle form submissions
function watchFormSubmission() {
    $('.js-text-form').submit(function (event) {
        event.preventDefault();
        // get the text the user submitted
        var userText = $(this).find('#user-text').val();
        report(removeReturns(userText));
    });
}

// equivalent to `$(document).ready(function() {...})`
$(function () {
    watchFormSubmission();
});
}