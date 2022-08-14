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

let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let lastbtn = btn2;
let sB = document.querySelector("#stBal");
let eB = document.querySelector("#enBal");
let infw = document.querySelector("#inFlw");
let outfw = document.querySelector("#outFlw");
let net = document.querySelector("#net");

sB.textContent = ("Rp"+thisMonth.StartingBalance.toString());
infw.textContent = ("Rp"+thisMonth.InFlow.toString());
outfw.textContent = ("Rp"+thisMonth.OutFlow.toString());
net.textContent = ("Rp"+(thisMonth.InFlow-thisMonth.OutFlow).toString());
eB.textContent = ("Rp"+(thisMonth.StartingBalance+(thisMonth.InFlow-thisMonth.OutFlow)).toString())


btn.addEventListener("click", ()=>{

    btn.classList.toggle("clicked");
    lastbtn.classList.toggle("clicked");
    lastbtn = btn;
    sB.textContent = ("Rp"+lastMonth.StartingBalance.toString());
    infw.textContent = ("Rp"+lastMonth.InFlow.toString());
    outfw.textContent = ("Rp"+lastMonth.OutFlow.toString());
    net.textContent = ("Rp"+(lastMonth.InFlow-lastMonth.OutFlow).toString());
    eB.textContent = ("Rp"+(lastMonth.StartingBalance+(lastMonth.InFlow-lastMonth.OutFlow)).toString())

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
}, false);