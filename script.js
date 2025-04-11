function insert_Row() {
    let table = document.getElementById("sampleTable");
    let row = table.insertRow(0); // Insert a new row at the top
    let newCell1 = row.insertCell(0); // Insert a new cell in the row
    let newCell2 = row.insertCell(1); // Insert another new cell in the row
    newCell1.textContent = "New Cell1"; // Set the text content of the first cell
    newCell2.textContent = "New Cell2"; // Set the text content of the second cell
}