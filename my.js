// hero converter
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
// quote box
const fortunes = [
    "'Believe you can and you're halfway there.' - Theodore Roosevelt",
    "'In the end, it's not the years in your life that count. It's the life in your years.' - Abraham Lincoln",
    "'The only way to do great work is to love what you do.' - Steve Jobs",
    "'The future belongs to those who believe in the beauty of their dreams.' - Eleanor Roosevelt.",
    "'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchill",
    "'Be yourself; everyone else is already taken.' - Oscar Wilde",
    "'The only limit to our realization of tomorrow will be our doubts of today.' - Franklin D. Roosevelt",
    "'In three words I can sum up everything I've learned about life: It goes on.' - Robert Frost",
    "'The greatest glory in living lies not in never falling, but in rising every time we fall.' - Nelson Mandela",
    "'The only impossible journey is the one you never begin.' - Tony Robbins",
    "'Life is what happens when you're busy making other plans.' - John Lennon",
    "'The best way to predict the future is to create it.' - Peter Drucker",
    "'Happiness is not something ready-made. It comes from your own actions.' - Dalai Lama",
    "'The only thing we have to fear is fear itself.' - Franklin D. Roosevelt",
    "'The purpose of our lives is to be happy.' - Dalai Lama",
    "'You only live once, but if you do it right, once is enough.' - Mae West",
    "'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.' - Helen Keller",
];
function getRandomQuote() {
  return fortunes[Math.floor(Math.random() * fortunes.length)];
}
function displayRandomQuote() {
  const quoteContainer = document.getElementById('quote-text');
  quoteContainer.textContent = getRandomQuote();
}
function changeStyles(bgColor, textColor, fontFamily, fontSize) {
var quoteContainer = document.getElementById("quote-container");
var quoteText = document.getElementById("quote-text");
quoteContainer.style.backgroundColor = bgColor;
quoteText.style.color = textColor;
quoteText.style.fontFamily = fontFamily;
quoteText.style.fontSize = fontSize;
}
displayRandomQuote();

// min,max,sum,average,reverse......
document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var numbersInput = document.getElementById('numbers').value.trim();
    var numbersArray = numbersInput.split(',').map(function(item) {
        return parseFloat(item);
    });
    var max = Math.max(...numbersArray);
    var min = Math.min(...numbersArray);
    var sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
    var average = sum / numbersArray.length;
    var reverseOrder = numbersArray.slice().reverse();

    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>Max: ${max}</p>
        <p>Min: ${min}</p>
        <p>Sum: ${sum}</p>
        <p>Average: ${average}</p>
        <p>Reverse Order: ${reverseOrder.join(', ')}</p>
    `;
});

// magic box
function clearText() {
document.getElementById("textInput").value = "";
}

function toggleCase() {
var textInput = document.getElementById("textInput");
var currentText = textInput.value;
if (currentText === "") return;

if (currentText === currentText.toUpperCase()) {
textInput.value = currentText.toLowerCase();
} else {
textInput.value = currentText.toUpperCase();
}
}

function sortLines() {
var textInput = document.getElementById("textInput");
var lines = textInput.value.split('\n');
lines.sort();
textInput.value = lines.join('\n');
}

function reverseLines() {
var textInput = document.getElementById("textInput");
var lines = textInput.value.split('\n');
lines = lines.map(function(line) {
return line.split('').reverse().join('');
});
textInput.value = lines.reverse().join('\n');
}

function stripBlank() {
var textInput = document.getElementById("textInput");
var lines = textInput.value.split('\n');
lines = lines.filter(function(line) {
return line.trim() !== '';
});
textInput.value = lines.join('\n');
}

function addNumbers() {
var textInput = document.getElementById("textInput");
var lines = textInput.value.split('\n');
for (var i = 0; i < lines.length; i++) {
lines[i] = (i + 1) + '. ' + lines[i];
}
textInput.value = lines.join('\n');
}

function shuffleLines() {
var textInput = document.getElementById("textInput");
var lines = textInput.value.split('\n');
for (var i = lines.length - 1; i > 0; i--) {
var j = Math.floor(Math.random() * (i + 1));
var temp = lines[i];
lines[i] = lines[j];
lines[j] = temp;
}
textInput.value = lines.join('\n');
}