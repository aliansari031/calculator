//console.log("js is connected ");
var display = document.getElementById("display");

function press(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function delChart(){
    display.value = display.value.slice(0, -1);
}

function calculator(){
var text = display.value;
var opt = "+=*/%."

if(text === ""){
    alert("please add an number and operator")
    return
}else if(opt.includes(text[0]) || opt.includes(text[text.length -1])){
    display.value = "Error";
return
}

var consoleFound = false;

try {
    display.value = eval(text);
  } catch {
    display.value = "Error";
  }


// for(var i= 0; i < text.length -1; i++){
//     if(opt.includes(text[i]) && opt.includes(text[i + 1])){
//         errorFound = true;
//         break;


 } 
 
//'''''''''''''''''''''''''''''''''''''''''''''''
 
// var display = document.getElementById("display");

// function press(value) {
//   display.value += value;
// }

// function cleardisplay() {
//   display.value = "";
// }

// function delchart() {
//   display.value = display.value.slice(0, -1);
// }

// function calculator() {
//   var text = display.value;
//   var opt = "+=*/%.";

//   if (text === "") {
//     alert("Please enter a number and operator");
//     return;
//   } else if (opt.includes(text[0]) || opt.includes(text[text.length - 1])) {
//     display.value = "Error";
//     return;
//   }
 

