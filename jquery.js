console.log('jquery')

$('.navbar-brand').animate({ opacity: 0.3 }, 2500);
$('.card-body').animate({ opacity: 0.3 }, 3000);
$('.card-body').animate({ opacity: 0.9 }, 5000);


$('.card-body').css('color', 'green')

$('.btn-close').click(function () {
    $('.navbar-brand').animate({ opacity: 1 }, 2500);
});

$('.btn btn-outline-success').hover(function () {
    $(".btn btn-outline-success").css("fontSize", "1000px");

});

$('p.lead').click(function () {
    $('p.lead').hide(10000);

});

$('p.lead').click(function () {
    $('p.lead').show(10000)

});
