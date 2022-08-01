function getOne(){
    document.getElementById("display").innerHTML +='1'
}
function getTwo(){
    document.getElementById("display").innerHTML +='2'
}
function getThree(){
    document.getElementById("display").innerHTML +='3'
}
function getFour(){
    document.getElementById("display").innerHTML +='4'
}
function getFive(){
    document.getElementById("display").innerHTML +='5'
}
function getSix(){
    document.getElementById("display").innerHTML +='6'
}
function getSeven(){
    document.getElementById("display").innerHTML +='7'
}
function getEight(){
    document.getElementById("display").innerHTML +='8'
}
function getNine(){
    document.getElementById("display").innerHTML +='9'
}
function getZero(){
    document.getElementById("display").innerHTML +='0'
}
function getClear(){
    document.getElementById("display").innerHTML =''
}
function getAdd(){
    document.getElementById("display").innerHTML +='+'
}
function getMinus(){
    document.getElementById("display").innerHTML +='-'
}
function getMul(){
    document.getElementById("display").innerHTML +='*'
}
function getDivide(){
    document.getElementById("display").innerHTML +='/'
}
function getDot(){
    document.getElementById("display").innerHTML +='.'
}
function getPerc(){
    document.getElementById("display").innerHTML +='%'
}
function getEqual(){
    var result =eval(document.getElementById('display').innerText);
    document.getElementById('display').innerHTML = result;
}
function getDel(){
    var delet = document.getElementById('display').innerHTML;
    str = delet.substring(0, delet.length - 1);
    document.getElementById('display').innerHTML = str;
}
function getOff(){
    
    document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;
    document.getElementById("six").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("one").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("add").disabled = true;
    document.getElementById("perc").disabled = true;
    document.getElementById("dot").disabled = true;
    document.getElementById("equal").disabled = true;
    document.getElementById("zero").disabled = true;
    document.getElementById("mul").disabled = true;
    document.getElementById("divide").disabled = true;
    document.getElementById("delete").disabled = true;
    document.getElementById("clear").disabled = true;
    document.getElementById("display").disabled = true;
    document.getElementById("display").style.background="#636361"
    document.getElementById("display").style.border="1px solid #636361"
    document.getElementById("off").disabled = true;
    
}
function getOn(){
    document.getElementById("seven").disabled = false;
    document.getElementById("eight").disabled = false;
    document.getElementById("nine").disabled = false;
    document.getElementById("six").disabled = false;
    document.getElementById("five").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("one").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("add").disabled = false;
    document.getElementById("perc").disabled = false;
    document.getElementById("dot").disabled = false;
    document.getElementById("equal").disabled = false;
    document.getElementById("zero").disabled = false;
    document.getElementById("mul").disabled = false;
    document.getElementById("divide").disabled = false;
    document.getElementById("delete").disabled = false;
    document.getElementById("clear").disabled = false;
    document.getElementById("display").disabled = true;
    document.getElementById("display").style.background="orange"
    document.getElementById("display").style.border="1px solid orange"
    document.getElementById("off").disabled = false;
}