//Activated by html.
firstName = "";
lastName = "";
username = "";
password = "";
email = ""
confirmpassword = "";

function screen2() {
    //comment time to try to update it
    element = document.getElementById("screen1")
    element1 = document.getElementById("fadable1")
    element2 = document.getElementById("fadable")
    element.style.opacity = "0%";
    element1.style.opacity = "0%";
    element2.style.opacity = "0%";
    setTimeout(fadeInScreen2(),1000)
}
function fadeInScreen2() {
    element = document.getElementById("screen1")
    element1 = document.getElementById("fadable1")
    element2 = document.getElementById("fadable")
    element.style.visibility = "hidden";
    element1.style.visibility = "hidden";
    element2.style.visibility = "hidden";

    nextDiv = document.getElementById("screen2");
    nextDiv.style.visibility = "visible";
    nextDiv.style.opacity = "100%";
}

//Activated by html
function screen3() {
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value
    document.getElementById("screen2").style.opacity = "0%";
    setTimeout(fadeInScreen3(), 1000)
}
function fadeInScreen3() {
    document.getElementById("screen3").style.visibility = "visible";
    document.getElementById("screen3").style.opacity = "100%";
}

//Activated by html
function screen4() {
    username = document.getElementById("username").value
    email = document.getElementById("email").value
    password = document.getElementById("password").value
    confirmpassword = document.getElementById("confirmpassword").value

    console.log(firstname)
    console.log(lastname)
    console.log(username)
    console.log(email)
    console.log(password)
    console.log(confirmpassword)
    sendData()

    document.getElementById("screen3").style.opacity = "0%";
    setTimeout(fadeInScreen4(), 1000);
}

function fadeInScreen4() {
    document.getElementById("screen4").style.visibility = "visible";
    document.getElementById("screen4").style.opacity = "100";
    setTimeout(fadeInScreen5(), 3200);
}

function fadeInScreen5() {

    document.getElementById("screen4").style.opacity = "0";
    setTimeout(fadeInScreen5Again(), 1000)
}
function fadeInScreen5Again() {
    document.getElementById("screen5").style.opacity = "100";
    document.getElementById("screen5").style.visibility = "visible";
}

function sendData() {
    var dataString = firstname + "," + lastname + "," + username + "," + email + "," + password + "," + confirmpassword;
    $.ajax({
        type: 'POST',
        url: 'databaseconnect.php',
        data: dataString,
        success: function(response) {
            console.log("success")
            //content.html(response);
        }
    });
}