let equa="";
function ad(c){
    equa+=c;
    updatedisplay();
}
function eva(){
    try {
        equa=eval(equa);
    } catch  {
        equa="Error";
    }
    updatedisplay();
}
function clr(){
    equa="";
    updatedisplay();
}
function updatedisplay(){
    document.getElementById("display").value=equa;
}

document.querySelector("#btn-open").addEventListener("click", () => ad("("));
document.querySelector("#btn-close").addEventListener("click", () => ad(")"));
document.querySelector("#btn-divide").addEventListener("click", () => ad("/"));
document.querySelector("#btn-multiply").addEventListener("click", () => ad("*"));
document.querySelector("#btn-subtract").addEventListener("click", () => ad("-"));
document.querySelector("#btn-add").addEventListener("click", () => ad("+"));
document.querySelector("#btn-percent").addEventListener("click", () => ad("%"));
document.querySelector("#btn-decimal").addEventListener("click", () => ad("."));
document.querySelector("#btn-equal").addEventListener("click", eva);
document.querySelector("#btn-clear").addEventListener("click", clr);


for (let i = 0; i <= 9; i++) {
    document.querySelector(`#btn-${i}`).addEventListener("click", () => ad(i));
}