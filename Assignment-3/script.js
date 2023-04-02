//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var btn = document.getElementById("button");
btn.disabled = true;

// Function to Toggle Rows
function toggle(id) {
  row = document.getElementById(id); // id passed
  if (row) row.style.display = (row.style.display == 'none') ? '' : 'none';
  return false;
}


//Functioncall to hide all the existing second rows
hiderowbyclass("dropDownTextArea");

var sucalertvar = false;
////To Add rows dynamically
//Adds a click listener to the add-row button
document.querySelector("#add").addEventListener("click", () => {
  //calls the addRow() method on clicking the button
  try {
    addRow();
  } catch (e) {
    alert(" Error occured !! \n Probable Reason : " + e);
  }

  if (sucalertvar) {
    alert("New Record Successfully Added!");
  }
});

//initializing the row counter
let x = 4;

const addRow = () => {

  //creates a new row element

  let row = document.createElement("tr");
  row.id = `mainrow${x}`;

  let col1 = document.createElement("td");
  letcheckboxcolumn = document.createElement("input");
  checkboxcolumn.type = 'checkbox';
  checkboxcolumn.className = 'checkboxcolumn';
  checkboxcolumn.id = `cbxid${x}`
  checkboxcolumn.setAttribute("onclick", `jschkclk("cbxid${x}","mainrow${x}","ddta${x}","btnDltId${x}","btnEditId${x}")`);


  let br = document.createElement("br");
  let brr = document.createElement("br");

  let im = document.createElement("img");
  im.src = 'down.png';
  im.width = '25';
  im.setAttribute("onclick", `toggle("ddta${x}")`);

  col1.appendChild(checkboxcolumn);
  col1.appendChild(br);
  col1.appendChild(brr);
  col1.appendChild(im);

  let col2 = document.createElement("td");
  const col2text = document.createTextNode(`Student ${x}`);
  col2.appendChild(col2text);

  let col3 = document.createElement("td");
  const col3text = document.createTextNode(`Teacher ${x}`);
  col3.appendChild(col3text);

  let col4 = document.createElement("td");
  const col4text = document.createTextNode(RandomAward());
  col4.appendChild(col4text);

  let col5 = document.createElement("td");
  const col5text = document.createTextNode(RandomSemester());
  col5.appendChild(col5text);

  let col6 = document.createElement("td");
  const col6text = document.createTextNode(RandomType());
  col6.appendChild(col6text);

  let col7 = document.createElement("td");
  var rib = RandomInteger(11111, 99999);
  const col7text = document.createTextNode(`${rib}`);
  col7.appendChild(col7text);

  let col8 = document.createElement("td");
  var rip = RandomInteger(30, 100);
  const col8text = document.createTextNode(`${rip}%`);
  col8.appendChild(col8text);

  let col9 = document.createElement("td");
  const columnbtn = document.createElement('button');
  columnbtn.className = 'clsBtnDlt';
  columnbtn.id = `btnDltId${x}`;
  columnbtn.textContent = 'Delete';
  columnbtn.hidden = true;
  columnbtn.setAttribute('onclick', `DeleteRow(this,"ddta${x}")`);
  col9.appendChild(columnbtn);

  let col10 = document.createElement("td");
  const columnedit = document.createElement('button');
  columnedit.className = 'clsBtnEdit';
  columnedit.id = `btnEditId${x}`;
  columnedit.textContent = 'Edit';
  columnedit.hidden = true;
  columnedit.setAttribute('onclick', `EditRow("${x}")`);
  col10.appendChild(columnedit);

  //appends columns to the new row
  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);
  row.appendChild(col5);
  row.appendChild(col6);
  row.appendChild(col7);
  row.appendChild(col8);
  row.appendChild(col9);
  row.appendChild(col10);


  //Adding adjacent Second Row
  let row2 = document.createElement("tr");
  row2.className = 'dropDownTextArea';
  row2.id = `ddta${x}`;

  let node = document.createElement("td");
  node.innerHTML = 'Advisor:<br /><br />';
  node.innerHTML = node.innerHTML + 'Award Details<br />';
  node.innerHTML = node.innerHTML + 'Summer 1-2014(TA)<br />';
  node.innerHTML = node.innerHTML + 'Budget Number: <br />';
  node.innerHTML = node.innerHTML + 'Tuition Number: <br />';
  node.innerHTML = node.innerHTML + 'Comments:<br /><br /><br />';
  node.innerHTML = node.innerHTML + 'Award Status:<br /><br /><br />';
  node.colSpan = '10';
  row2.appendChild(node);

  //appends the row to the table
  document.querySelector("#myTable").appendChild(row);
  document.querySelector("#myTable").appendChild(row2);
  hiderow(`ddta${x}`);
  sucalertvar = true;
  x++;
};



//Function to hide the rows based on class name
function hiderowbyclass(className) {
  var items = document.getElementsByClassName(className);
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
}

//Function to hide the row based on ID
function hiderow(id) {
  var itemrow = document.getElementById(id);
  itemrow.style.display = "none";
}


//Function to change  background color and call another function to enable submit button based on checkboxes
function jschkclk(id, rid, drid, delid, editid) {
  console.log('Inside jschkclk');
  console.log('delid:' + delid);
  console.log('editid:' + editid);
  var checkbx = document.getElementById(id);
  if (checkbx.checked) {
    document.getElementById(rid).style.backgroundColor = "yellow";
    document.getElementById(drid).style.backgroundColor = "yellow";

    document.getElementById(delid).hidden = false;
    document.getElementById(editid).hidden = false;
  } else {
    document.getElementById(rid).style.backgroundColor = "";
    document.getElementById(drid).style.backgroundColor = "";
    document.getElementById(delid).hidden = true;
    document.getElementById(editid).hidden = true;
  }


  checkValuesBoxes();
}


//function to enable button based on enabled checkboxes 
function checkValuesBoxes() {
  var ckd = 0;

  var chkbxs = document.getElementById("myTable").getElementsByTagName("input");;

  for (var i = 0; i < chkbxs.length; i++) {
    if (chkbxs[i].checked) {
      ckd++;
    }
  }

  if (ckd > 0) {
    document.getElementById("button").disabled = false;
  } else {
    document.getElementById("button").disabled = true;
  }
};


//Function to Delete a row
function DeleteRow(rid, adrid) {
  var row = rid.parentNode.parentNode;
  console.log("row : " + row);
  console.log("rid : " + row.id);
  console.log("riin : " + row.rowIndex);

  var rowid = document.getElementById(row.id);
  rowid.parentNode.removeChild(rowid);

  //Deleting Adjacent Below Row
  var arowid = document.getElementById(adrid);
  arowid.parentNode.removeChild(arowid);

  //row.parentNode.removeChild(row);

  alert(`Record Deleted successfully !`);
}

//Function to Edit the Row
function EditRow(rid) {
  if (confirm(`Do you want to Edit record : ${rid}`) == true) {
    alert(`Record ${rid} Edited successfully !`);
  }
  else {
    alert("!!Data Editing Cancelled by User!!");
  }
}

//Function to generate random Integer between the range
function RandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomAward() {
  const awardStatus = ["Approved", "Not-Approved", "Pending"];
  const random = Math.floor(Math.random() * awardStatus.length);
  return awardStatus[random];
}

function RandomSemester() {
  const sem = ["Fall", "Spring", "Summer"];
  const random = Math.floor(Math.random() * sem.length);
  return sem[random];
}

function RandomType() {
  const type = ["TA", "RA"];
  const random = Math.floor(Math.random() * type.length);
  return type[random];
}






