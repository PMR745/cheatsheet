let btn = document.getElementById("btn");
let sidebar = document.getElementsByClassName("sidebar")[0];
let c = document.getElementById("c");
let li_c = document.getElementById("li_c");


btn.onclick = function() {
    sidebar.classList.toggle("active");
}

// @ts-ignore
li_c.onmouseover = function() {
    c.src = "img/c.png";
}

// @ts-ignore
li_c.onmouseout = function() {
    c.src = "img/cp.png"
}