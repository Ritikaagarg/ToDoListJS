
//to input new task
function addfield() {
    //date field
    var dateField = document.createElement("input");
    dateField.setAttribute("type", "date");
    dateField.setAttribute("id", "datefield");

    //description field
    var descriptionfield = document.createElement("input");
    descriptionfield.setAttribute("placeholder", "Description");
    descriptionfield.setAttribute("type", "text");
    descriptionfield.setAttribute("id", "descriptionfield")

    //ok button
    var okBtn = document.createElement("BUTTON");
    okBtn.setAttribute("id", "okbtn");
    okBtn.innerText = "OK";
    okBtn.setAttribute("onclick","addlist()");

    //cancel button
    var cnclBtn = document.createElement("BUTTON");
    cnclBtn.setAttribute("id", "cnclbtn")
    cnclBtn.setAttribute("onclick","cancellist()")
    cnclBtn.innerText = "CANCEL"

    //div containing every field
    var divfield = document.getElementById("take_task");
    divfield.innerHTML = ""
    divfield.appendChild(dateField);
    divfield.appendChild(descriptionfield);
    divfield.appendChild(okBtn);
    divfield.appendChild(cnclBtn);

}

//click on OK button
function addlist() {   
        var addDate = document.getElementById("datefield").value;
        var addDescriptionbox = document.getElementById("descriptionfield").value;
        if(addDate==='' || addDescriptionbox===''){
            alert("Please give the input");
        }
        else{
        createTable(addDate, addDescriptionbox);
        }
}

// click on CANCEL button....
function cancellist() {
        var cancelDate = document.getElementById("datefield");
        var cancelDescriptionbox = document.getElementById("descriptionfield");
        var okbtn = document.getElementById("okbtn");
        var cancelbtn = document.getElementById("cnclbtn");
        cancelDate.remove();
        cancelDescriptionbox.remove();
        okbtn.remove();
        cancelbtn.remove();
}

//create table for showing all the tasks
var table = document.createElement('table');
table.setAttribute('id', 'table');
var tr = document.createElement('tr');
var thdate = document.createElement('th');
var textdate = document.createTextNode('Date');
thdate.appendChild(textdate);
tr.appendChild(thdate);
var thdescription = document.createElement('th');
var textdescription = document.createTextNode('Description');
thdescription.appendChild(textdescription);
tr.appendChild(thdescription);
table.appendChild(tr);

var arrayObject = [];

function createTable(dateParameter, descriptionParameter) {

    //adding notes
    arrayObject.push({ 'date': dateParameter, 'description': descriptionParameter });
    console.log(arrayObject);
    for (let index = 0; index < arrayObject.length; index++) {
        var tr1 = document.createElement('tr');
        tr1.setAttribute('id', "id" + index);
        var th1 = document.createElement('th');
        var text1 = document.createTextNode(arrayObject[index].date);
        th1.appendChild(text1);
        tr1.appendChild(th1);
        var th2 = document.createElement('th');
        var text2 = document.createTextNode(arrayObject[index].description);
        th2.appendChild(text2);
        tr1.appendChild(th2);
        var th3 = document.createElement('th');
        var remove = document.createElement("button");
        remove.innerHTML = "Delete";
        th3.appendChild(remove);
        remove.setAttribute('onclick', "removeClick(id" + index + ")");
        tr1.appendChild(th3);
    }
    table.appendChild(tr1);
    document.body.appendChild(table);

}
function removeClick(row) {
    row.remove();
}


