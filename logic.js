function about() {
    document.getElementById("about").style.display = "block";
    document.getElementById("aboutfengshui").style.display = "none";
    document.getElementById("yingyang").style.display = "none";
    document.getElementById("chi").style.display = "none";
    document.getElementById("fiveelements").style.display = "none";
    document.getElementById("applied").style.display = "none";
    document.getElementById("casestudy").style.display = "none";
    document.getElementById("bibliography").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("about1").className += " active";

}

function aboutfengshui() {
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutfengshui").style.display = "block";
    document.getElementById("yingyang").style.display = "none";
    document.getElementById("chi").style.display = "none";
    document.getElementById("fiveelements").style.display = "none";
    document.getElementById("applied").style.display = "none";
    document.getElementById("casestudy").style.display = "none";
    document.getElementById("bibliography").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("aboutfengshui1").className += " active";
}

function yingyang() {
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutfengshui").style.display = "none";
    document.getElementById("yingyang").style.display = "block";
    document.getElementById("chi").style.display = "none";
    document.getElementById("fiveelements").style.display = "none";
    document.getElementById("applied").style.display = "none";
    document.getElementById("casestudy").style.display = "none";
    document.getElementById("bibliography").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("yingyang1").className += " active";
}

function chi() {
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutfengshui").style.display = "none";
    document.getElementById("yingyang").style.display = "none";
    document.getElementById("chi").style.display = "block";
    document.getElementById("fiveelements").style.display = "none";
    document.getElementById("applied").style.display = "none";
    document.getElementById("casestudy").style.display = "none";
    document.getElementById("bibliography").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("chi1").className += " active";
}

function fiveelements() {
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutfengshui").style.display = "none";
    document.getElementById("yingyang").style.display = "none";
    document.getElementById("chi").style.display = "none";
    document.getElementById("fiveelements").style.display = "block";
    document.getElementById("applied").style.display = "none";
    document.getElementById("casestudy").style.display = "none";
    document.getElementById("bibliography").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("fiveelements1").className += " active";
}

function applied() {
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutfengshui").style.display = "none";
    document.getElementById("yingyang").style.display = "none";
    document.getElementById("chi").style.display = "none";
    document.getElementById("fiveelements").style.display = "none";
    document.getElementById("applied").style.display = "block";
    document.getElementById("casestudy").style.display = "none";
    document.getElementById("bibliography").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("applied1").className += " active";
}

function casestudy() {
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutfengshui").style.display = "none";
    document.getElementById("yingyang").style.display = "none";
    document.getElementById("chi").style.display = "none";
    document.getElementById("fiveelements").style.display = "none";
    document.getElementById("applied").style.display = "none";
    document.getElementById("casestudy").style.display = "block";
    document.getElementById("bibliography").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("casestudy1").className += " active";
}

function bibliography() {
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutfengshui").style.display = "none";
    document.getElementById("yingyang").style.display = "none";
    document.getElementById("chi").style.display = "none";
    document.getElementById("fiveelements").style.display = "none";
    document.getElementById("applied").style.display = "none";
    document.getElementById("casestudy").style.display = "none";
    document.getElementById("bibliography").style.display = "block";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("bibliography1").className += " active";
}