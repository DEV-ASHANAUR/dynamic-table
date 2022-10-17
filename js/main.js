//table 
const _table = document.getElementById("_table");
//add row function
function addRow() {
    const row = _table.insertRow(-1);
    const cellLength = _table.rows[0].children.length;
    for (let i = 0; i < cellLength; i++) {
        row.insertCell(i).innerText = "data";
    }
}
//add Column function
function addColumn() {
    for (const [i, row] of [..._table.rows].entries()) {
        const cell = document.createElement(i ? "td" : "th");
        if (i == 0) {
            cell.innerText = "Heading";
            row.appendChild(cell);
        } else {
            cell.innerText = "data";
            row.appendChild(cell);
        }
    }
}

