const billInput = document.querySelector(".bill-input");
const peopleInput= document.querySelector(".people-input");
const tipPerPerson= document.querySelector("#tip-amount");
const totalPerPerson= document.querySelector("#total-amount");
const tips = document.querySelectorAll(".tips");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);

tips.forEach(val => {
    val.addEventListener("click", clickHandler)
});


billInput.value = "0.0";
peopleInput.value= "1";
tipPerPerson.innerHTML= "₹" +(0.0).toFixed(2);
totalPerPerson.innerHTML= "₹" +(0.0).toFixed(2)

let billValue=0.0;
let peopleValue = 1;



function billInputFun(){
    billValue= parseFloat(billInput.value);
    console.log(billValue);

}

function peopleInputFun(){
    peopleValue= parseFloat(peopleInput.value);
    console.log(peopleValue);

}


function clickHandler(event){
    tips.forEach(val => {
        val.classList.remove("active-tip")
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active-tip");
        }
        
    });
}