
function displayTable() {

    //writing new code for test:
    console.log(document.getElementById('tableValue').value)
    let tableValue = document.getElementById('tableValue').value
    // alert(tableValue)

    console.log(document.getElementById('numberOfLines').value)
    let numberOfLines = document.getElementById('numberOfLines').value
    let test = Number(numberOfLines)
    // alert(numberOfLines)
    let listElement = document.getElementById('listElement')

    console.log(document.querySelector('input[name="editList"]:checked').value)
    let operand = document.querySelector('input[name="editList"]:checked').value


    for (let counter = 1; counter <= Number(numberOfLines); counter++) {
        let list = document.createElement('li')
        list.innerHTML = tableValue + operand + counter + " = " + eval(tableValue + operand + counter)
        listElement.append(list)
    }

}

function clearDisplay() {
    document.getElementById('tableValue').value = ""
    document.getElementById('numberOfLines').value = ""
    //remove li elements
}






