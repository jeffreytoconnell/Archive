// **WATCH FOR FORM SUBMISSION**//
$(function () {
  addNewItem();
});

function addNewItem() {
  $('#js-shopping-list-form').submit(function (event) { //ID NOT CLASS
    event.preventDefault();
    var text = $('#shopping-list-entry').val(); //CLASS
    console.log(text);
  });
}