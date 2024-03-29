<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <main>
    <h3><span class="js-click-counter">0</span> clicks</h3>
    <button class="js-clicker">Click me</button>
  </main>
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
</main>
</body>
</html>




// this function does two things.
// First it creates a variable
// called `clickCount`. This variable
// is meant to keep track of
// the number of times the user
// has clicked the "click me"
// button. Initially we set its value
// to zero.
function handleClicks() {
  var clickCount = 0;
  
  // this line sets the inner text
  // of the `.js-click-counter`
  // element the current value
  // of `clickCount` (which is 0)
  $('.js-click-counter').text(clickCount);
  
  // this line says when the
  // `.js-clicker` element is
  // clicked, run the instructions
  // inside the anonymous function
  // (that is, the instructions 
  // between the {...} brackets).
  $('.js-clicker').click(function(event) {
    
    // any time the user clicks, 
    // we add 1 to the value of 
    // `clickCount ...
    clickCount += 1;
    
    // ...and display the updated
    // click count in the
    // `.js-click-count` element.
    $('.js-click-counter').text(clickCount);
  });
}

// this code just says that when
// the browser is done loading the
// page, it should run the
// `handleClicks` function
// we've defined above.
$(handleClicks);
