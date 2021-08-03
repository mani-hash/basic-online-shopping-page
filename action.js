//navigation bar color change

function actADD(btn) {
    var prev_element = document.getElementsByClassName("active");

    var id_name = btn.id
    
    if (id_name == "dorm1") {
        var element = document.getElementById(id_name);
        

        if (typeof(prev_element) != "undefined") {
            prev_element[0].classList.remove("active");
        }
        
        element.classList.add("active");
        

    } else if (id_name == "dorm2") {
        var element = document.getElementById(id_name);
        

        if (typeof(prev_element) != "undefined") {
            prev_element[0].classList.remove("active");
        }

        element.classList.add("active");
        

    } else if (id_name == "dorm3") {
        var element = document.getElementById(id_name);
        

        if (typeof(prev_element) != "undefined") {
            prev_element[0].classList.remove("active");
        }

        element.classList.add("active");
        

    } else if (id_name == "dorm4") {
        var element = document.getElementById(id_name);
        

        if (typeof(prev_element) != "undefined") {
            prev_element[0].classList.remove("active");
        }

        element.classList.add("active");
        
        
    } else if (id_name == "dorm5") {
        var element = document.getElementById(id_name);
        

        if (typeof(prev_element) != "undefined") {
            prev_element[0].classList.remove("active");
        }

        element.classList.add("active");
        
       
        
    }
}




