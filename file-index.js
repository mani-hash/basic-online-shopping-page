

$(function () {
    $('#dorm1').click(function(){
        $('.content-change').attr("id", "includeContent1");
        $("#includeContent1").load("blank.html");
    })
})

$(function () {
    $('#dorm2').click(function(){
        $('.content-change').attr("id", "includeContent2");
        $("#includeContent2").load("discount.html");
    })
})

$(function () {
    $('#dorm3').click(function(){
        $('.content-change').attr("id", "includeContent3");
        $("#includeContent3").load("special-offers.html");
    })
})

$(function () {
    $('#dorm4').click(function(){
        $('.content-change').attr("id", "includeContent4");
        $("#includeContent4").load("blank.html");
        
    })
})

$(function () {
    $('#dorm5').click(function(){
        $('.content-change').attr("id", "includeContent5");
        $("#includeContent5").load("blank.html");
    })
})

$(function(){
    $("#includeContent1").load("blank.html"); 
});

$(function(){
    $("#includeContent2").load("discount.html"); 
});

$(function(){
    $("#includeContent3").load("special-offers.html"); 
});

$(function(){
    $("#includeContent4").load("blank.html"); 
});

$(function(){
    $("#includeContent5").load("blank.html"); 
});




// $(document).on('click','.add-btn',function(){
//     // alert("Click event works!");
//     var input = $(".add-btn").siblings("input");
//     var stock_no = $(".add-btn").siblings("p").children("span.stock_no").closest();
//     var n1 = parseInt(input.val());
//     alert(stock_no.text());
    
// });

// $(document).on('click','.minus-btn',function(){
//     alert("Click event works!");
// });