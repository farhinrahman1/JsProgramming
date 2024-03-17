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
