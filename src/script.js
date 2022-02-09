var Name=document.getElementById("name");
var number=document.getElementById("number");
var add=document.getElementById("submit");
var message1=document.getElementById("message1");
var message2=document.getElementById("message2");

function checkOnlyDigits(_string)
{
    if(_string.match(/^[0-9]+$/) != null)
    {
       return false;
    }
    else
    {
        return true;
    }
}

function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.match(letters))
     {
      return false;
     }
   else
     {
     return true;
     }
  }
  
add.addEventListener('click',function f()
{

  message1.innerHTML=""
  message2.innerHTML=""

  Name.removeAttribute("class");
  number.removeAttribute("class");

  if (allLetter(Name.value))
  { 
    Name.setAttribute("class", "div");

    message1.innerHTML='invalid name'
  }

  if(checkOnlyDigits(number.value) || number.value.length!=10)
  {

    console.log(checkOnlyDigits(number.value),number.value);
    console.log(number.value.length);

    message2.innerHTML='invalid number'
  
    number.setAttribute("class", "div");
  }

})

