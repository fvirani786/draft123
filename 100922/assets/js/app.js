let tableValue = document.getElementById("tableValue");
let numberOfLines = document.getElementById("numberOfLines");


function displayTable() {
   
    // alert(tableValue.value)
    let tableOutput = document.getElementById("table");
    tableOutput.innerHTML = "";
    //tableOutput.innerText = "Web Developer Course";
    const tableFor = tableValue.value;
    const lines = numberOfLines.value;
    for (let counter = 1; counter <= lines; counter ++) {
        //console.log(tableFor + ' x ' + counter + ' = ' + tableFor * counter)
        tableOutput.innerHTML = tableOutput.innerHTML + tableFor + ' x ' + counter + ' = ' + tableFor * counter + '<br>';
    }
}

function clearDisplay() {
    let tableOutput = document.getElementById("table");
    tableOutput.innerHTML = "";
}




document.addEventListener("DOMContentLoaded", function() {
     var element = document.createElement("button");
     element.appendChild(document.createTextNode("Click Me!"));
     var page = document.getElementById("btn");
     page.appendChild(element);
     console.log(element);
 });

 // Corrected "meta charset="UTF-8"".




