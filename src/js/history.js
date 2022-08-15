//DATA SECTOR

let data = {
    "thisMonth" : {
        "StartingBalance" : 1000000,
        "InFlow" : 15000000,
        "OutFlow" : 12500000,
        "fnb" : {"Date":"6 December 2003","Data":"Rp2000000"},
        "tf" : {"Date":"27 December 2003","Data":"Rp20000000"},
        "Salary" : {"Date":"2 December 2003","Data":"Rp130000000"}
    },
    "lastMonth" : {
        "StartingBalance" : 2000000,
        "InFlow" : 17000000,
        "OutFlow" : 12500000,
        "fnb" : {"Date":"6 November 2003","Data":"Rp3000000"},
        "tf" : {"Date":"27 November 2003","Data":"Rp1000000"},
        "Salary" : {"Date":"2 November 2003","Data":"Rp123000000"}
    },
    "future" : {
        "StartingBalance" : 5000000,
        "InFlow" : 5000000,
        "OutFlow" : 12500000,
        "fnb" : {"Date":"-","Data":"-"},
        "tf" : {"Date":"-","Data":"-"},
        "Salary" : {"Date":"-","Data":"-"}
    }
};




//DECLARATION
let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let lastbtn = btn2;

let sB = document.querySelector("#stBal");
let eB = document.querySelector("#enBal");
let infw = document.querySelector("#inFlw");
let outfw = document.querySelector("#outFlw");
let net = document.querySelector("#net");

let tfDate = document.querySelector("#tfDate");
let tfData = document.querySelector("#tfData");
let fnbDate = document.querySelector("#fnbDate");
let fnbData = document.querySelector("#fnbData");
let salDate = document.querySelector("#salDate");
let salData = document.querySelector("#salData");



//INITIATION

listen(btn2,data,"thisMonth")


//BUTTON FUNC
function listen(button,data,monthKey) {

    button.classList.toggle("clicked");
    lastbtn.classList.toggle("clicked");
    lastbtn = button;

    sB.textContent = ("Rp"+data[monthKey].StartingBalance.toString());
    
    infw.textContent = ("Rp"+data[monthKey].InFlow.toString());
    
    outfw.textContent = ("Rp"+data[monthKey].OutFlow.toString());
    
    net.textContent = ("Rp"+(data[monthKey].InFlow-data[monthKey].OutFlow).toString());
    
    eB.textContent = ("Rp"+(data[monthKey].StartingBalance+(data[monthKey].InFlow-data[monthKey].OutFlow)).toString())
    
    tfDate.textContent = data[monthKey].tf.Date;
    tfData.textContent = data[monthKey].tf.Data;

    fnbDate.textContent = data[monthKey].fnb.Date;
    fnbData.textContent = data[monthKey].fnb.Data;

    salDate.textContent = data[monthKey].Salary.Date;
    salData.textContent = data[monthKey].Salary.Data;
}

//CALL

btn.addEventListener("click", ()=>{listen(btn,data,"lastMonth")}, false);

btn2.addEventListener("click", ()=>{listen(btn2,data,"thisMonth")}, false);

btn3.addEventListener("click", ()=>{listen(btn3,data,"future")}, false);