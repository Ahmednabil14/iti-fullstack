// task 1
$('.container1 p').each(function(){
    let color = $(this).attr("class")
    $(this).css("color", color)
})

$('.container1 div').each(function(){
    let color = $(this).attr("class")
    $(this).css("background-color", color)
})


// task 2
$(".container2 a[href*='google']").text("Google");
$(".container2 a[href$='org']").text("IEEE");
$(".container2 a[href^='https']").text("Facebook");
$(".container2 a[href^='http']").append(" Official Website");


// task 3
$(".container3 figure").each(function(index) {
    if (index === 2) {
        $(this).find("img").attr("src", "img/orange.png");
        $(this).find("figcaption").text('fig.3 - Orange Juice')
    }
})

// task 4
$(".container4 td[class*='my-name']").css("color", "blue")
let rowLength = $(".container4 tr").length
$(".container4 tr").each(function(i) {
    let cellLength = $(this).find('td').length
    $(this).find('td').each(function(index) {
        if ((index + 1) % 2 !== 0) {
            $(this).css("background-color", "pink")
        }
        if (i === rowLength - 1 && index === cellLength - 2) {
            $(this).css("font-weight", "bold")
        }
    })
})

// task 5
$('container5 li').each(function(index) {
    if (index === 1) {
        $(this).css("font-style", "italic")
    }
})

$('.container5 li ol :nth-child(2)+li').css("color", "red");