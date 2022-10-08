let id = 0;
var individualCosts = [];

document.getElementById('add').addEventListener('click', () => {
    let createdDate =  new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-service').value;
    row.insertCell(1).innerHTML = document.getElementById('new-cost').value;
    row.insertCell(2).innerHTML = document.getElementById('new-date').value;

    individualCosts.push(document.getElementById('new-cost').value);
    console.log(individualCosts);

    let actions =  row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-service').value = '';
    document.getElementById('new-cost').value = '';
    document.getElementById('new-date').value = '';
});

function createDeleteButton (id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.addEventListener('click', () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete =  document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
        //individualCosts.splice(elementToDelete);
    });
    return btn
}


// function calculateBudget () {
//     let individualCosts = [];
//     individualCosts.push(document.getElementById('new-cost').value);
//     console.log(individualCosts);
// }