$(document).ready(function () {


  //adding a new item
 $('button[type="submit"]').click(function() {
    var groceryItem = $('input#shopping-list-entry').val();
    $('ul.shopping-list').prepend('<li><span class="shopping-item">'+groceryItem+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div>');
  });

  //modifying / checking off
  $('body').on('click', 'button.shopping-item-toggle', function () {
    $(this).parent('.shopping-item-controls').siblings('span.shopping-item').toggleClass('lineThrough');
  });

  // deleting an item
  $('body').on('click', 'button.shopping-item-delete', function () {
    $(this).closest('li').remove();
  });

})