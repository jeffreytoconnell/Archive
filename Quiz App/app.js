var correct_answers = 0;



$( ".wrong" ).click(function() {
  alert( ".wrong" );
});

$( ".correct" ).click(function() {
  alert( ".correct" );
  correct_answers++;
  console.log(correct_answers);
});