$(document).ready(function() {
    let colors = ["red", "blue", "green", "orange"]
    let i = 1;
    $.fn.generate = function(color) {
        $(this).append(`<div class='${color}'></div>`);
    }
    
    $("#container").on("click", "div", function (e) {
        if (!($(this).hasClass("clicked"))) {
            $(this).addClass("clicked");
            $("#container").generate(colors[i])
            i++;
            if (i === 4) {
                i = 0;
            }
        }
    })

    $("#container").on("mouseover", "div", function(e) {
        if ($(this).attr("class").split(" ")[0] === "red") {
            $(this).addClass("blue");
        }
        else if ($(this).attr("class").split(" ")[0] === "blue") {
            $(this).addClass("green");
        }
        else if ($(this).attr("class").split(" ")[0] === "green") {
            $(this).addClass("orange");
        }
        else if ($(this).attr("class").split(" ")[0] === "orange") {
            $(this).css("background-color", "red");
        }
    })
    $("#container").on("mouseleave", "div", function() {
        if ($(this).attr("class").split(" ")[0] === "red") {
            $(this).removeClass("blue");
        }
        else if ($(this).attr("class").split(" ")[0] === "blue") {
            $(this).removeClass("green");
        }
        else if ($(this).attr("class").split(" ")[0] === "green") {
            $(this).removeClass("orange");
        }
        else if ($(this).attr("class").split(" ")[0] === "orange") {
            $(this).css("background-color", "orange");
        }
    })
  
})
