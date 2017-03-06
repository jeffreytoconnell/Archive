<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <h2>this is how <code>event.currentTarget</code> works</h2>
  <div class="foo">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <ul>
      <li>fee</li>
      <li>fie</li>
      <li>foh</li>
      <li>fum</li>
    </ul>
  </div>
  <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
</body>
</html>



$(function () {
    $(".foo, p, ul, li").click(function (event) {
        event.stopPropagation();
        $("h2").text("event.currentTarget's text is: " + $(event.currentTarget).text());
    });
});