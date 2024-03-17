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
    var quotes=["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. -John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "The only impossible journey is the one you never begin. -Tony Robbins",
    "When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson"];
    var random_quote = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote_text").innerHTML = '"' + quotes[random_quote] + '"';

    document.getElementById("quote").style.backgroundColor="white";
    document.getElementById("quotes").style.borderColor="black";
    document.getElementById("quote_text").style.color="#fff";
    document.getElementById("quote_text").style.fontFamily="Arial";
    document.getElementById("quote_text").style.textAlign="center";
    document.getElementById("quote_text").style.fontWeight = "serif"; 

}
fetchQuote();

function orange(){
    console.log("Clicked orange")
    document.getElementById("quotes").style.backgroundColor="#EF6C35";
    document.getElementById("quotes").style.borderColor="black";
    document.getElementById("quote_text").style.fontFamily="Arial";
    document.getElementById("quote_text").style.color="black";
    document.getElementById("quote_text").style.fontFamily = "Arial";
    document.getElementById("quote_text").style.fontWeight = "cursive";
}

function purple(){
    console.log("Clicked purple")
    document.getElementById("quotes").style.backgroundColor="#7952B3";
    document.getElementById("quotes").style.borderColor="black";
    document.getElementById("quote_text").style.color="black";
    document.getElementById("quote_text").style.fontFamily = "Lobster";
    document.getElementById("quote_text").style.fontWeight = "sans-serif";
}

function yellow(){
    console.log("Clicked yellow")
    document.getElementById("quotes").style.backgroundColor="#FFC107";
    document.getElementById("quotes").style.borderColor="black";
    document.getElementById("quote_text").style.color="black";
    document.getElementById("quote_text").style.fontFamily = "ubuntu";
    document.getElementById("quote_text").style.fontWeight = "sans-serif";
}

function red(){
    document.getElementById("quotes").style.backgroundColor="#7952B3";
    document.getElementById("quotes").style.borderColor="black";
    document.getElementById("quote_text").style.color="black";
    document.getElementById("quote_text").style.fontFamily = "ubuntu";
    document.getElementById("quote_text").style.fontWeight = "sans-serif";
}


// function fetchQuote() {
//     var qoutes = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
//         "The way to get started is to quit talking and begin doing. -Walt Disney",
//         "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
//         "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
//         "Life is what happens when you're busy making other plans. -John Lennon",
//         "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
//         "The only impossible journey is the one you never begin. -Tony Robbins",
//         "When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
//         "The only way to do great work is to love what you do. -Steve Jobs",
//         "Don't watch the clock; do what it does. Keep going. -Sam Levenson"];
//     var quotes_author = ["Epictetus", "Maya Angelou", "Maya Angelou", "Mike Ditka", "Laozi", "Wayne Dyer", "Bodhidharma","Elizabeth Kenny", "Napoleon", "Publilius Syrus"];

//     var random_quote = Math.floor(Math.random() * quotes.length);
//     document.getElementById("quote_text").innerHTML = '"' + qoutes[random_quote] + '"';
//     document.getElementById("quote_author").innerHTML = quotes_author[random_quote];

//     document.getElementById("quotes").style.backgroundColor = "#aebab1";
//     document.getElementById("quotes").style.borderColor = "#5d767b";
//     document.getElementById("quote_text").style.color = "#fff";
//     document.getElementById("quote_author").style.color = "#fff";
//     document.getElementById("quote_icon").style.color = "#fff";
//     document.getElementById("quote_text").style.fontFamily = "Amiri";
//     document.getElementById("quote_text").style.fontWeight = "serif";        
// }
// fetchQuote();

// // Creating buttons to change color

// function red() {
//     console.log("Clicked Red")
//     document.getElementById("quotes").style.backgroundColor = "#EE6D78";
//     document.getElementById("quotes").style.borderColor = "#1d3557";
//     document.getElementById("quote_text").style.color = "#ffe3e0";
//     document.getElementById("quote_author").style.color = "#ffe3e0";
//     document.getElementById("quote_icon").style.color = "#ffe3e0";
//     document.getElementById("quote_text").style.fontFamily = "Lobster";
//     document.getElementById("quote_text").style.fontWeight = "cursive";
// }
// function blue() {
//     console.log("Clicked Blue")
//     document.getElementById("quotes").style.backgroundColor = "#778DA9";
//     document.getElementById("quotes").style.borderColor = "#7400b8";
//     document.getElementById("quote_text").style.color = "#80ffdb";
//     document.getElementById("quote_author").style.color = "#80ffdb";
//     document.getElementById("quote_icon").style.color = "#80ffdb";
//     document.getElementById("quote_text").style.fontFamily = "Montserrat";
//     document.getElementById("quote_text").style.fontWeight = "sans-serif";
// }
// function yellow() {
//     console.log("Clicked Blue")
//     document.getElementById("quotes").style.backgroundColor = "#f9dc5c";
//     document.getElementById("quotes").style.borderColor = "#003566";
//     document.getElementById("quote_text").style.color = "#001d3d";
//     document.getElementById("quote_author").style.color = "#001d3d";
//     document.getElementById("quote_icon").style.color = "#001d3d";
//     document.getElementById("quote_text").style.fontFamily = "Tiro Tamil";
//     document.getElementById("quote_text").style.fontWeight = "serif";
// }
// function pink() {
//     console.log("Clicked Blue")
//     document.getElementById("quotes").style.backgroundColor = "#ea9ab2";
//     document.getElementById("quotes").style.borderColor = "#47126b";
//     document.getElementById("quote_text").style.color = "#9e0059";
//     document.getElementById("quote_author").style.color = "#9e0059";
//     document.getElementById("quote_icon").style.color = "#9e0059";
//     document.getElementById("quote_text").style.fontFamily = "Ubuntu";
//     document.getElementById("quote_text").style.fontWeight = "sans-serif";
// }