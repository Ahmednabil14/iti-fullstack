$(document).ready(function(){
    // task 1
    $('.container1').append('<div class="black"></div>');
    $('.container1').prepend('<div class="white"></div>');
    $('.container1 p[class*="pink"]').before('<p class="yellow"></p>');

    // task 2
    $(".container2 p").each(function() {
        var textContent = $(this).text();
        $(this).replaceWith('<a href="http://' + textContent + '">' + textContent + '</a>');
    });

    // task 3
    $(".container3 img").wrap('<figure></figure>');
    $(".container3 img").after('<figcaption>Coffee</figcaption>');

    // task 4
    $(".container4 td.col-age").empty();
    $(".container4 td").filter(function() {
        return $(this).text() === 'Mohsen';
    }).addClass('man');
    $(".container4 td").toggleClass('your-email');

    // task 5
    $(".container5 li").filter(function(index) {
        return index % 3 !== 0;
    }).hide();

    // task 6
    $("input[name='username']").val("yourname");
    $("#my-form input[type='checkbox']").prop("checked", true);
});