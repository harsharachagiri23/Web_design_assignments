
//Function to validate all the fields in the form and generate error messages accordingly
var validationFailed = [];
var ratingCreated = false;
var fromInside = false;

function validate(object, Type, ID) {

    console.log("Objext : " + object + ", Type : " + Type + ", ID : " + ID );

    var RegExpName = /^[a-zA-Z]+$/;
    var RegExpEmail = /^[_A-Za-z0-9-\\.+]+(\\.[_A-Za-z0-9-]+)*@northeastern.edu$/;
    var RegExpPhone = /\d{3}-?\d{3}-\d{4}$/;
    var RegExpStreetAddress1 = /^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/;
    var RegExpCity = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    var RegExpState = /^(([Aa][EeLlKkSsZzRr])|([Cc][AaOoTt])|([Dd][EeCc])|([Ff][MmLl])|([Gg][AaUu])|([Hh][Ii])|([Ii][DdLlNnAa])|([Kk][SsYy])|([Ll][Aa])|([Mm][EeHhDdAaIiNnSsOoTt])|([Nn][EeVvHhJjMmYyCcDd])|([Mm][Pp])|([Oo][HhKkRr])|([Pp][WwAaRr])|([Rr][Ii])|([Ss][CcDd])|([Tt][NnXx])|([Uu][Tt])|([Vv][TtIiAa])|([Ww][AaVvIiYy]))$/;
    var RegExpZipCode = /^[0-9]{5}(?:-[0-9]{4})?$/;

    var RegExpHear = /\d{3}-?\d{3}-\d{4}$/;
    var RegExpComment = /^[a-zA-Z0-9@=\-'"]+/;

    var RegExpRate = /[0-5]/;

    var RegTotalValue;

    switch (Type) {
        case "firstName":
        case "lastName":
            RegTotalValue = RegExpName;
            break;
        case "emailId":
            RegTotalValue = RegExpEmail;
            break;
        case "phoneNumber":
            RegTotalValue = RegExpPhone;
            break;
        case "streetAddress1":
            RegTotalValue = RegExpStreetAddress1;
            break;
        case "city":
            RegTotalValue = RegExpCity;
            break;
        case "state":
            RegTotalValue = RegExpState;
            break;
        case "zipcode":
            RegTotalValue = RegExpZipCode;
            break;
        case 8:
            RegTotalValue = RegExpHear;
            break;
        case "comments":
            RegTotalValue = RegExpComment;
            break;
        case "rating":
            RegTotalValue = RegExpRate;
            break;

    }

    if (!object.value.trim().match(RegTotalValue)) {
        object.style.border = "2px solid red";
        document.getElementById(ID).style.display = "block";
        object.value = "";
        validationFailed.push("true");
    } else {
        object.style.border = "";
        document.getElementById(ID).style.display = "none";
        validationFailed.push("false");
    }

}

function displayBox(object,ID){
    if (object.value == "" || object.value == null) {
        object.style.border = "2px solid red";
        document.getElementById(ID).style.display = "block";
        validationFailed.push("true");
    } else {
        object.style.border = "";
        document.getElementById(ID).style.display = "none";
        validationFailed.push("false");
    }
}

function undoDiv(object, ID, IDEmchk){
    object.style.border = "";
    document.getElementById(ID).style.display = "none";
    document.getElementById(IDEmchk).style.display = "none";
}

function clearDiv(){
    var inputlist = document.getElementsByClassName("validation");
    var inputDivlist = document.getElementsByClassName("validationDiv");
    var inputDivlistEmchk = document.getElementsByClassName("validationDivEmchk");
    for (var i = 0; i < inputlist.length; i++){
        document.getElementById(inputlist[i].id).style.border = "";
    }
    for (var i = 0; i < inputDivlist.length; i++){
        document.getElementById(inputDivlist[i].id).style.display = "none";
    }
    for (var i = 0; i < inputDivlistEmchk.length; i++){
        document.getElementById(inputDivlistEmchk[i].id).style.display = "none";
    }
    document.getElementById("errorMsgTitle").style.display = "none";
    document.getElementById("errorMsgHear").style.display = "none";
    document.getElementById("ratingDiv").style.display = "none";
    

}


function formValidate(){
    var inputlist = document.getElementsByClassName("validation");
    var inputDivlist = document.getElementsByClassName("validationDiv");
    var inputDivlistEmchk = document.getElementsByClassName("validationDivEmchk");

    for (var i = 0; i < inputlist.length; i++) {

        if(inputlist[i].id == "rating"){
            console.log("Before rating validationFailed.length + " + validationFailed.length);
            console.log("Before rating validationFailed.includes + " + validationFailed.includes("true"))
            ratingCreated = false
            fromInside = true;
            serviceCheck();
            if(ratingCreated){
            displayBox(inputlist[i],inputDivlist[i].id);
            }
        }
        else{
            displayBox(inputlist[i],inputDivlistEmchk[i].id);
        }
    }
    console.log("Before validateTitle validationFailed.length + " + validationFailed.length);
    console.log("Before validateTitle validationFailed.includes + " + validationFailed.includes("true"))
    validateTitle();
    validateHear();
    console.log("After validateHear validationFailed.length + " + validationFailed.length);
    console.log("After validateHear validationFailed.includes + " + validationFailed.includes("true"));
    if(validationFailed.includes("true")){
        return true;
    };
    return false;
}
function validateTitle() {
    var radios = document.getElementsByName("title");
    var selRds = 0;
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            selRds++;
        }
    }
    if (selRds > 0) {
        validationFailed.push("false");
    }
    else {
        document.getElementById("errorMsgTitle").style.display = "block";
        validationFailed.push("true");
    }
}
function validateHear() {
    var chks = document.getElementsByName("source");
    var checks = 0;
    for (var i = 0, len = chks.length; i < len; i++) {
        if (chks[i].checked) {
            checks++;
        }
    }
    if (checks > 0) {
        validationFailed.push("false");
    }
    else {
        document.getElementById("errorMsgHear").style.display = "block";
        
        validationFailed.push("true");
    }
}

function menuOptions() {

    var varListVal = document.getElementById("snackType").value;
    switch (varListVal) {
        case "Frenchfries":
            document.getElementById("serv01val").innerHTML = "<input type='checkbox' name='service' id='serv01' value='cheese' onclick='serviceCheck()' />cheese";
            document.getElementById("serv02val").innerHTML = "<input type='checkbox' name='service' id='serv02' value='periperi' onclick='serviceCheck()' />periperi";
            break
        case "Sandwich":
            console.log("Inside Sandwich");
            document.getElementById("serv01val").innerHTML = "<input type='checkbox' name='service' id='serv01' value='egg' onclick='serviceCheck()' />egg";
            document.getElementById("serv02val").innerHTML = "<input type='checkbox' name='service' id='serv02' value='chicken' onclick='serviceCheck()' />chicken";
            break
        case "Pastry":
            console.log("Inside Pastry");
            document.getElementById("serv01val").innerHTML = "<input type='checkbox' name='service' id='serv01' value='chocolate' onclick='serviceCheck()' />chocolate";
            document.getElementById("serv02val").innerHTML = "<input type='checkbox' name='service' id='serv02' value='vanilla' onclick='serviceCheck()' />vanilla";
            break
        case "Pasta":
            document.getElementById("serv01val").innerHTML = "<input type='checkbox' name='service' id='serv01' value='Cheese' onclick='serviceCheck()' />Cheese";
            document.getElementById("serv02val").innerHTML = "<input type='checkbox' name='service' id='serv02' value='vermicelli' onclick='serviceCheck()' />vermicelli";
            break
        case "Frappe":
            document.getElementById("serv01val").innerHTML = "<input type='checkbox' name='service' id='serv01' value='Chocolate' onclick='serviceCheck()' />Chocolate";
            document.getElementById("serv02val").innerHTML = "<input type='checkbox' name='service' id='serv02' value='oreo' onclick='serviceCheck()'  />oreo";
            break
    }

    serviceCheck();

}
function serviceCheck() {
    var menucheck = document.getElementsByName("service");
    var optionchecks = 0;
    for (var i = 0, len = menucheck.length; i < len; i++) {
        if (menucheck[i].checked) {
            optionchecks++;
        }
    }
    if (optionchecks > 0) {
        createRating();
        ratingCreated = true;
    }
    else {
        disableRating();
        ratingCreated = false;
    }
}

function createRating() {
    let rtDiv = document.getElementById("ratingDiv");
    rtDiv.style.display = "block";
    if(!fromInside){
    let txtFld = document.getElementById("rating");
    txtFld.style.border = "";
    txtFld.value = "";
    }
    fromInside = false;
}
function disableRating() {
    let rtDiv = document.getElementById("ratingDiv");
    rtDiv.style.display = "none";
    let rtErrDiv = document.getElementById("errorMsgRating");
    rtErrDiv.style.display = "none";
    rtErrDiv.value = "";
    let rtErrDivEmchk = document.getElementById("errorMsgRatingEmchk");
    rtErrDivEmchk.style.display = "none";
    rtErrDivEmchk.value = "";
}

var data;
var checkedValue = [];



function submitFormbtn() {

    console.log("InsidesubmitFormbtn ");
    validationFailed = [];
    if(formValidate()){
        return;
    }
    console.log("after formValidate ");


    var snackType = document.getElementById("snackType");
    data = {
        "title": getTitle('title'),
        "fname": document.getElementById('firstName').value,
        "lname": document.getElementById('lastName').value,
        "email": document.getElementById('emailId').value,
        "phone": document.getElementById('phoneNumber').value,
        "streetAddress1": document.getElementById('streetAddress1').value,
        "streetAddress2": document.getElementById('streetAddress2').value,
        "city": document.getElementById('city').value,
        "state": document.getElementById('state').value,
        "zipcode": document.getElementById('zipcode').value,
        "snackType": snackType.options[snackType.selectedIndex].text,
        "variety": getCheckboxValues("service"),
        "rating": document.getElementById('rating').value,
        "Hear": getCheckboxValues("source"),
        "comments": document.getElementById('comments').value,
    }

    console.log("data: " + data);

    var tab = document.getElementById("myblueTable");
    tab.style.display = "block";

    var row = tab.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    var cell9 = row.insertCell();
    var cell10 = row.insertCell();
    var cell11 = row.insertCell();
    var cell12 = row.insertCell();
    var cell13 = row.insertCell();
    var cell14 = row.insertCell();
    var cell15 = row.insertCell();

    console.log("before putting data");

    cell1.innerHTML = data.title;
    cell2.innerHTML = data.fname;
    cell3.innerHTML = data.lname;
    cell4.innerHTML = data.email;
    cell5.innerHTML = data.phone;
    cell6.innerHTML = data.streetAddress1;
    cell7.innerHTML = data.streetAddress2;
    cell8.innerHTML = data.city;
    cell9.innerHTML = data.state;
    cell10.innerHTML = data.zipcode;
    cell11.innerHTML = data.snackType;
    cell12.innerHTML = data.variety;
    cell13.innerHTML = data.rating;
    cell14.innerHTML = data.Hear;
    cell15.innerHTML = data.comments;

    console.log("before adding data");

    tab.appendChild(row);

    $('#requestForm')[0].reset();

    return false;

}

function getTitle(rdg) {
    var els = document.getElementsByName(rdg);
    for (var i = 0, l = els.length; i < l; i++) {
        if (els[i].checked) {
            return els[i].value;
        }
    }
}

function getCheckboxValues(cbv) {
    console.log("Inside getCheckboxValues : " + cbv);
    var checkedValue = [];
    var cbeles = document.getElementsByName(cbv);
    for (var i = 0; cbeles[i]; ++i) {
        if (cbeles[i].checked) {
            checkedValue.push(cbeles[i].value);
        }

    }
    console.log("checkedValue : " + checkedValue);
    return checkedValue;
}







