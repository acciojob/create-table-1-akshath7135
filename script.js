function insert_Row() {
	let table = document.getElementById("sampleTable");
	let row = table.insertRow(0);
	let newrow= row.insertCell(0);
	let newrow1 = row.insertCell(1);
	newrow.textContent="New Cell1";
	newrow1.textContent="New Cell2";
  
  
}
button.addEventlistener("onclick",insert_Row);
