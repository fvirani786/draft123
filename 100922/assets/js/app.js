let tableValue = document.getElementById("tableValue");
let numberOfLines = document.getElementById("numberOfLines");


function displayTable() {

    //writing new code for test:
    console.log(document.getElementById('tableValue').value)
    let tableValue = document.getElementById('tableValue').value
    alert(tableValue)

    console.log(document.getElementById('numberOfLines').value)
    let numberOfLines = document.getElementById('numberOfLines').value
    alert(numberOfLines)


    // // alert(tableValue.value)
    // let tableOutput = document.getElementById("table");
    // tableOutput.innerHTML = "";
    // //tableOutput.innerText = "Web Developer Course";
    // const tableFor = tableValue.value;
    // const lines = numberOfLines.value;
    // for (let counter = 1; counter <= lines; counter++) {
    //     //console.log(tableFor + ' x ' + counter + ' = ' + tableFor * counter)
    //     tableOutput.innerHTML = tableOutput.innerHTML + tableFor + ' x ' + counter + ' = ' + tableFor * counter + '<br>';
    // }
}

function clearDisplay() {
    document.getElementById('tableValue').value = ""
    document.getElementById('numberOfLines').value = ""
    //let tableOutput = document.getElementById("table");
    //tableOutput.innerHTML = "";
}




document.addEventListener("DOMContentLoaded", function () {
    var element = document.createElement("button");
    element.appendChild(document.createTextNode("Click Me!"));
    var page = document.getElementById("btn");
    page.appendChild(element);
    console.log(element);
});

 // Corrected "meta charset="UTF-8"".




