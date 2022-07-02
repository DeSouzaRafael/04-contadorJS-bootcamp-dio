var result = document.getElementById("result");
var btnLang = document.getElementById("btnLang");
var title = document.getElementById("title");
var text = document.getElementById("text");
var currentTitler = ["Contador", "Count"];
var currentText = ["Clique nos botões para alterar o valor","Click the buttons to change the value"];
var currentButton = ["En", "Br"]
var currentResult = 0;

function increment(){
    currentResult =  currentResult + 1;
    result.innerHTML = currentResult;
}

function decrement(){
    currentResult =  currentResult - 1;
    result.innerHTML = currentResult;
}

function language(){
   if(btnLang.textContent == "En"){
    title.innerHTML = currentTitler[1];
    text.innerHTML = currentText[1]
    btnLang.innerHTML = currentButton[1];
   }
   else{
    btnLang.innerHTML = currentButton[0];
    title.innerHTML = currentTitler[0];
    text.innerHTML = currentText[0]
   }
}
