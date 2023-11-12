
$(document).on('click', '.card-img-top', function () {
    var modelName = $(this).data('model');
    var description = $(this).data('description');

    $('#modelName').text(modelName);
    $('#modelDescription').text(description);
});


function scrollToModels() {
    $('html, body').animate({
        scrollTop: $('#models').offset().top
    }, 800);
}


$(document).ready(function () {
    $('#modelCarousel').carousel();
	$(document).on({
        mouseenter: function () {
            $(this).css('opacity', '0.8');
        },
        mouseleave: function () {
            $(this).css('opacity', '1');
        }
    }, '.card-img-top');
});
