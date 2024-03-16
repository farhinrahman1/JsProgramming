function convert(){
    var input = document.getElementById("converter_input").value;
    var unit = document.getElementById("converter_unit").value;
    if (unit == "lbtokg"){
        var output = input * 0.45359;
        document.getElementById("converter_result").innerHTML = output + " KG";
    }
    else{
        var output = input * 2.20462;
        document.getElementById("converter_result").innerHTML = output + " LB";
    }
}

function fetchQuote(){
    var qoutes=["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. -John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "The only impossible journey is the one you never begin. -Tony Robbins",
    "When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson"];
    var random = Math.floor(Math.random() * qoutes.length);
    document.getElementById("quote").innerHTML = qoutes[random];

    document.getElementById("quotes").style.color="purple";
    document.getElementById("quotes").style.fontSize="20px";
    document.getElementById("quotes").style.fontFamily="Arial";
    document.getElementById("quotes").style.textAlign="center";
    document.getElementById("quotes").style.padding="10px";
    document.getElementById("quotes").style.border="2px solid purple";
    document.getElementById("quotes").style.borderRadius="10px";

}
function orange(){
    document.getElementById("quotes").style.color="#EF6C35";
    document.getElementById("quotes").style.fontSize="20px";
    document.getElementById("quotes").style.fontFamily="Arial";
    document.getElementById("quotes").style.textAlign="center";
    document.getElementById("quotes").style.padding="10px";
    document.getElementById("quotes").style.border="2px solid black";
    document.getElementById("quotes").style.borderRadius="10px";
}

function purple(){
    document.getElementById("quotes").style.color="#7952B3";
    document.getElementById("quotes").style.fontSize="20px";
    document.getElementById("quotes").style.fontFamily="Arial";
    document.getElementById("quotes").style.textAlign="center";
    document.getElementById("quotes").style.padding="10px";
    document.getElementById("quotes").style.border="2px solid purple";
    document.getElementById("quotes").style.borderRadius="10px";
}

function yellow(){
    document.getElementById("quotes").style.color="#FFC107";
    document.getElementById("quotes").style.fontSize="20px";
    document.getElementById("quotes").style.fontFamily="Arial";
    document.getElementById("quotes").style.textAlign="center";
    document.getElementById("quotes").style.padding="10px";
    document.getElementById("quotes").style.border="2px solid black";
    document.getElementById("quotes").style.borderRadius="10px";
}

function red(){
    document.getElementById("quotes").style.color="#BB3939";
    document.getElementById("quotes").style.fontSize="20px";
    document.getElementById("quotes").style.fontFamily="Arial";
    document.getElementById("quotes").style.textAlign="center";
    document.getElementById("quotes").style.padding="10px";
    document.getElementById("quotes").style.border="2px solid red";
    document.getElementById("quotes").style.borderRadius="10px";
}