var feilds, emptyFields;

function rightClick() {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();

        alert("Right clicks are disabled for security reasons");
    }, false);
}

function firstImg() {
    document.getElementById("first-rad").checked = true;

    if (document.getElementById("first-rad").checked) {
        document.getElementById("first_img").style.display = "block";
        document.getElementById("second_img").style.display = "none";
        document.getElementById("third_img").style.display = "none";

    } else {
        document.getElementById("first_img").style.display = "none";
    }
}

function secondImg() {
    if (document.getElementById("second-rad").checked) {
        document.getElementById("second_img").style.display = "block";
        document.getElementById("first_img").style.display = "none";
        document.getElementById("third_img").style.display = "none";
    } else {
        document.getElementById("second_img").style.display = "none";
    }
}

function thirdImg() {
    if (document.getElementById("third-rad").checked) {
        document.getElementById("third_img").style.display = "block";
        document.getElementById("first_img").style.display = "none";
        document.getElementById("second_img").style.display = "none";
    } else {
        document.getElementById("third_img").style.display = "none";
    }
}

function format(n) {
    if (n.value.indexOf("-") > -1 && !n.value.match(/[a-z]/)) {
        n.style.border = "none";
        }
     else {
         alert("Please enter a valid phone number");
        n.style.border = "2px solid red";
    }
    return n;
}

function validateEmail(e) {
    if(e.value.indexOf(".") > -1 && e.value.indexOf('@') > -1) {
        e.style.border = "none";
    }
    else {
        console.log(e.value);
        alert("E-mail format is incorrect!");
        e.style.border = "2px solid red";
    }
}

function Submit() {
    fields = document.getElementsByName("inputValue");
    emptyFields = 0;

    for (i = 0; i < fields.length; i++) {
        if (fields[i].value === "") {
            fields[i].style.border = "2px solid red";
            emptyFields += 1;
        } else {
            fields[i].style.border = "none";
        }
    }

    if (emptyFields > 0) {
        alert("Please fill in empty fields!");
    } else {
        alert("Message Submitted!");
    }
}
