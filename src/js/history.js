let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let lastbtn = btn2;
let iref = document.querySelector("iframe");

btn.addEventListener("click", ()=>{

    btn.classList.toggle("clicked");
    lastbtn.classList.toggle("clicked");
    lastbtn = btn
    iref.src = "/src/historyIFrame/lastMonth.html"
}, false);

btn2.addEventListener("click", ()=>{

    btn2.classList.toggle("clicked");
    lastbtn.classList.toggle("clicked");
    lastbtn = btn2
    iref.src = "/src/historyIFrame/thisMonth.html"
}, false);

btn3.addEventListener("click", ()=>{

    btn3.classList.toggle("clicked");
    lastbtn.classList.toggle("clicked");
    lastbtn = btn3
    iref.src = "/src/historyIFrame/future.html"
}, false);