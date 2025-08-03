function calculateResult(){
   const res = document.getElementById("result");
   const exp =resultElement.value.trim();

   if (exp === ''){
    res.value='Enter Valide Expression';
    return;
   }
   try{
     res.value=eval(exp);
   }
   catch(e){
    res.value='invalid';
   }
}

function clearScreen(){
    document.getElementById("result").value=" ";
}