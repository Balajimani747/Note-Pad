
function cr()
{
    
    input=document.getElementById("myinput").value; 
    console.log(input);
    ptag=document.createElement("p"); 
    text=document.createTextNode(input);
    ptag.appendChild(text);
    mydi=document.getElementById("mybox");
    mydi.appendChild(ptag);
}