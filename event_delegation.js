<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <button>Make a pet!</button>
  <p>Click an animal to remove it.</p>
  <ul>
    <li class="original">tiger</li>  
    <li class="original">lion</li>
    <li class="original">bear</li>
  </ul>
  <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
</body>
</html>




$(function() {
  
  $("button").click(function(event) {
    $("ul").append(
      "<li>" +
      ["cat", "dog", "rock"][Math.floor(Math.random()*3)] + "</li>"
    );
  });
  
  $('li').click(function(event) {
    this.remove();
  });
});

// THIS HAS BEEN DELEGATED

$(function() {
  
  $("button").click(function(event) {
    $("ul").append(
      "<li>" +
      ["cat", "dog", "rock"][Math.floor(Math.random()*3)] + "</li>"
    );
  });
  
  $('ul').on('click', 'li', function(event) { //DELEGATION HERE USING .on
    this.remove();
  });
});