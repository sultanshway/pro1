let codes = document.getElementById("codes");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

play.addEventListener('click', ()=>{
    result.innerHTML = codes.value;
    localStorage.setItem("x", codes.value)
});

remove.addEventListener('click', ()=>{
    result.innerHTML = "";
    codes.value = "";
});

onload = ()=>{
    codes.value = localStorage.getItem("x");
    result.innerHTML = codes.value;
};