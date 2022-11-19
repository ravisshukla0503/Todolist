var btn=document.querySelector("#button");  //select button id

btn.addEventListener('click',submitform);   //add click event to submit button

function submitform(e){

    e.preventDefault();

    var inputtext=document.getElementById('input-item').value;  //select your input text
    
   // var li=document.createElement("li");
    // Creating input field

    var inputbox=document.createElement("input");
    inputbox.setAttribute("id","sg");
    inputbox.value=inputtext;
    inputbox.style.backgroundColor="#f1f1f1";
    inputbox.style.width="800px";
    inputbox.style.fontSize="x-large";
    inputbox.style.marginLeft="100px";
    inputbox.style.marginBottom="30px";

    //Creating Remove Button

    var removebutton=document.createElement("button");
    removebutton.setAttribute("id","rem-button");
    removebutton.textContent="remove"
    removebutton.style.backgroundColor="green";
    removebutton.style.fontSize="x-large";
    removebutton.style.marginLeft="60px";
    removebutton.style.width="150px";
    removebutton.style.color="white";
    removebutton.addEventListener("click",()=>{
    var p=removebutton.previousElementSibling;
    p.remove();
    removebutton.remove();
    })

    var res=document.getElementById("form");
    res.appendChild(inputbox);
    res.appendChild(removebutton);
}

//Reset all the todoList

function Reset(){
    var ress=document.getElementById("form");
    while(ress.firstChild){
    ress.removeChild(ress.firstChild);
   }
    Clear();
}

//Clear the input screen

function Clear(){
    var inputtext=document.getElementById('input-item');
    inputtext.value="";
}


