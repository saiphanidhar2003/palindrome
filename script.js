

const text=document.getElementById("text-input");
const btn=document.getElementById("check-btn");
const result=document.getElementById("result");
btn.addEventListener("click",check)
function check(){
  if(text.value=="")
  alert("Please input a value")
  else{
  result.style.display='block';
  if(text.value.length==1)
  {
    
    result.innerText=text.value+" is a palindrome";
  }
  let t=text.value.replace(/\s/g,"").toLowerCase();
  t=t.replace(/[^a-zA-Z0-9]/g, "");
  if(t===t.split('').reverse().join(''))
  {
    result.innerText=text.value+" is a palindrome";
  }
  else{
    result.innerText=text.value+" is not a palindrome";
  }
  }
}

