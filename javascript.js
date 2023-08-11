const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqsrtuvwxyz";
const symbols ="~!@#$%^&*()_+/";
const numbers ="1234567890";

// selectors
const passwordBOx =document.getElementById("pass-box");
const numberinput =document.getElementById("numbers");
const lowercaseInput =document.getElementById("lower-case");
const uppercaseInput =document.getElementById("upper-case");
const symbolInput= document.getElementById('symbols');
const totalCar =document.getElementById("total-char");


const getRandomData =(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const passwordGenerate=(password ="")=>{
if(uppercaseInput.checked){
    password += getRandomData(upperCase);
}
if (lowercaseInput.checked) {
    password += getRandomData(lowerCase);
}
if  (symbolInput.checked ){
    password += getRandomData(symbols);
}
if (password.length<=totalCar.value){
    return passwordGenerate(password); // recursive call again for the length of passowrd 
}
passwordBOx.innerHTML=truncateString(password,totalCar.value);
}


passwordGenerate();

document.getElementById("btn").addEventListener("click",function(){
    passwordGenerate();
})

// this is remove the character whichc is greater than input character

function truncateString(str,num){
    if(str.length>num){
        let substr =str.substring(0,num);
        return substr;
    }
    else{
        return str ;
    }
}