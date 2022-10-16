//table 
const _table = document.getElementById("_table");
// add row button
const addRowBtn = document.getElementById("addRow"); 
// add column button
const addColumnBtn = document.getElementById("addColumn");
// add row eventListener
addRowBtn.addEventListener("click",()=>{
    // first way
    // const tblrow = _table.tBodies[0].rows[0].cloneNode(true);
    // _table.tBodies[0].appendChild(tblrow);

    //second way
    const row = _table.insertRow(-1);
    let i = 0;
    for(let th of _table.rows[0].children){
        row.insertCell(i).innerText = "data";
        i++;
    }

})
// add column eventListener
addColumnBtn.addEventListener("click",()=>{
    // console.log([..._table.rows].entries());
    for(const [i,row] of [..._table.rows].entries()){
        const cell = document.createElement(i ? "td" : "th");
        if(i == 0){
            cell.innerText = "Heading";
            row.appendChild(cell);
        }else{
            cell.innerText = "data";
            row.appendChild(cell);
        }
    }

})