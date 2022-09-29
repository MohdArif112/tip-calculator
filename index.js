const billInput = document.querySelector(".bill-input");
const peopleInput= document.querySelector(".people-input");
const tipPerPerson= document.querySelector("#tip-amount");
const totalPerPerson= document.querySelector("#total-amount");
const customTip = document.querySelector(".tip-custom");
const reset = document.querySelector(".reset");
const tips = document.querySelectorAll(".tips");
const activeTip= document.querySelector(".tip-15");
const error = document.querySelector(".error");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);


customTip.addEventListener("input",calculateTipCustome);
reset.addEventListener("click",resetFun);

tips.forEach(val => {
    val.addEventListener("click", clickHandler)
});


billInput.value = "0.0";
peopleInput.value= "1";
tipPerPerson.innerHTML= "₹" +(0.0).toFixed(2);
totalPerPerson.innerHTML= "₹" +(0.0).toFixed(2)

let billValue=0.0;
let peopleValue = 1;
let tipvalue=.15;



function billInputFun(){
    billValue= parseFloat(billInput.value);
    
    calculateTip();
}

function peopleInputFun(){
    peopleValue= parseFloat(peopleInput.value);

    if(peopleValue <1){
        error.style.display="flex";
        peopleInput.style.border="thick solid red";
    }
    else{
        error.style.display="none";
        peopleInput.style.border="none";
        calculateTip();
    }
    
    
}


function clickHandler(event){
    tips.forEach(val => {
        val.classList.remove("active-tip")
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active-tip");
            tipvalue= parseFloat(val.innerHTML)/100;
            
        }
        
    });
    calculateTip();
}



function calculateTip(){
    
    if(peopleInput.value >= 1){
        let tipAmount = (billValue* tipvalue ) / peopleValue;
        let total = (billValue + (billValue* tipvalue )) / peopleValue;
        tipPerPerson.innerHTML= "₹" +(tipAmount).toFixed(2);
        totalPerPerson.innerHTML= "₹" +(total).toFixed(2);
        
    }
}

function calculateTipCustome(){
    tipvalue = parseFloat(customTip.value /100);
    tips.forEach(val => {
        val.classList.remove("active-tip")
    });
    calculateTip();
}

function resetFun(){
    billInput.value = "0.0";
    // billInputFun();
peopleInput.value= "1";
// peopleInputFun();
customTip.value="";
activeTip.classList.add("active-tip");
tipPerPerson.innerHTML= "₹" +(0.0).toFixed(2);
totalPerPerson.innerHTML= "₹" +(0.0).toFixed(2)
}