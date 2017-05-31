$(document).ready(function() {
    $("main").css("margin-top", $(".jumbotron").outerHeight());
});

$(window).resize(function() {
    $("main").css("margin-top", $(".jumbotron").outerHeight());
});