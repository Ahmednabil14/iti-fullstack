$('div').animate({
    left: '+=500px',
    width: '200px',
    height: '200px',
}, 1000, function () {
    $(this).css("background-color", "blue")
})

$('div').animate({
    top: '+=500px',
    width: '100px',
    height: '100px',
}, 1000, function() {
    $(this).css("background-color", "green")
})


$('div').animate({
    left: '-=500px',
    width: '200px',
    height: '200px',
}, 1000, function() {
    $(this).css("background-color", "orange")
})



$('div').animate({
    top: '-=500px',
    width: '100px',
    height: '100px',
}, 1000, function() {
    $(this).css("background-color", "red")
})

