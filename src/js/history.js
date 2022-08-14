//DATA SECTOR
let thisMonth = {
    "StartingBalance" : 1000000,
    "InFlow" : 15000000,
    "OutFlow" : 12500000
};

let lastMonth = {
    "StartingBalance" : 2000000,
    "InFlow" : 17000000,
    "OutFlow" : 12500000
};

let future = {
    "StartingBalance" : 5000000,
    "InFlow" : 5000000,
    "OutFlow" : 12500000
};

let tlThisMonth = {
    "fnb" : {"Date":"6 December 2003","Data":"Rp2000000"},
    "tf" : {"Date":"27 December 2003","Data":"Rp20000000"},
    "Salary" : {"Date":"2 December 2003","Data":"Rp130000000"}
}

let tlLastMonth = {
    "fnb" : {"Date":"6 November 2003","Data":"Rp3000000"},
    "tf" : {"Date":"27 November 2003","Data":"Rp1000000"},
    "Salary" : {"Date":"2 November 2003","Data":"Rp123000000"}
}

let tlFuture = {
    "fnb" : {"Date":"-","Data":"-"},
    "tf" : {"Date":"-","Data":"-"},
    "Salary" : {"Date":"-","Data":"-"}
}


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
sB.textContent = ("Rp"+thisMonth.StartingBalance.toString());
infw.textContent = ("Rp"+thisMonth.InFlow.toString());
outfw.textContent = ("Rp"+thisMonth.OutFlow.toString());
net.textContent = ("Rp"+(thisMonth.InFlow-thisMonth.OutFlow).toString());
eB.textContent = ("Rp"+(thisMonth.StartingBalance+(thisMonth.InFlow-thisMonth.OutFlow)).toString())

tfDate.textContent = tlThisMonth.tf.Date;
    tfData.textContent = tlThisMonth.tf.Data;

    fnbDate.textContent = tlThisMonth.fnb.Date;
    fnbData.textContent = tlThisMonth.fnb.Data;

    salDate.textContent = tlThisMonth.Salary.Date;
    salData.textContent = tlThisMonth.Salary.Data;



//BUTTON FUNC
btn.addEventListener("click", ()=>{

    btn.classList.toggle("clicked");
    lastbtn.classList.toggle("clicked");
    lastbtn = btn;

    sB.textContent = ("Rp"+lastMonth.StartingBalance.toString());
    
    infw.textContent = ("Rp"+lastMonth.InFlow.toString());
    
    outfw.textContent = ("Rp"+lastMonth.OutFlow.toString());
    
    net.textContent = ("Rp"+(lastMonth.InFlow-lastMonth.OutFlow).toString());
    
    eB.textContent = ("Rp"+(lastMonth.StartingBalance+(lastMonth.InFlow-lastMonth.OutFlow)).toString())
    
    tfDate.textContent = tlLastMonth.tf.Date;
    tfData.textContent = tlLastMonth.tf.Data;

    fnbDate.textContent = tlLastMonth.fnb.Date;
    fnbData.textContent = tlLastMonth.fnb.Data;

    salDate.textContent = tlLastMonth.Salary.Date;
    salData.textContent = tlLastMonth.Salary.Data;

}, false);

btn2.addEventListener("click", ()=>{

    btn2.classList.toggle("clicked");
    lastbtn.classList.toggle("clicked");
    lastbtn = btn2
    
    sB.textContent = ("Rp"+thisMonth.StartingBalance.toString());
    
    infw.textContent = ("Rp"+thisMonth.InFlow.toString());
    
    outfw.textContent = ("Rp"+thisMonth.OutFlow.toString());
    
    net.textContent = ("Rp"+(thisMonth.InFlow-thisMonth.OutFlow).toString());
    
    eB.textContent = ("Rp"+(thisMonth.StartingBalance+(thisMonth.InFlow-thisMonth.OutFlow)).toString())

    tfDate.textContent = tlThisMonth.tf.Date;
    tfData.textContent = tlThisMonth.tf.Data;

    fnbDate.textContent = tlThisMonth.fnb.Date;
    fnbData.textContent = tlThisMonth.fnb.Data;

    salDate.textContent = tlThisMonth.Salary.Date;
    salData.textContent = tlThisMonth.Salary.Data;

}, false);

btn3.addEventListener("click", ()=>{

    btn3.classList.toggle("clicked");
    lastbtn.classList.toggle("clicked");
    lastbtn = btn3
    
    sB.textContent = ("Rp"+future.StartingBalance.toString());
    
    infw.textContent = ("Rp"+future.InFlow.toString());
    
    outfw.textContent = ("Rp"+future.OutFlow.toString());
    
    net.textContent = ("Rp"+(future.InFlow-future.OutFlow).toString());
    
    eB.textContent = ("Rp"+(future.StartingBalance+(future.InFlow-future.OutFlow)).toString())

    tfDate.textContent = tlFuture.tf.Date;
    tfData.textContent = tlFuture.tf.Data;

    fnbDate.textContent = tlFuture.fnb.Date;
    fnbData.textContent = tlFuture.fnb.Data;

    salDate.textContent = tlFuture.Salary.Date;
    salData.textContent = tlFuture.Salary.Data;

}, false);