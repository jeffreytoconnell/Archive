function handleThumbnailClicks() {
    $('.thumbnail').click(function (event) {
        var imgSrc = $(event.currentTarget).find('img').attr('src'); // Changes imgSrc to target image
        $('.hero img').attr('src', imgSrc); // Changes div .hero to target above
    })
}

$(function () {
    handleThumbnailClicks();
});