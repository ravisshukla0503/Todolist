let btn=document.querySelector(".button");  //select button id

btn.addEventListener('click',submitForm);   //add click event to submit button

function submitForm(e){

    e.preventDefault();

    let inputText=document.getElementById('inputItem').value;  //select your input text
    
   // let li=document.createElement("li");
    // Creating input field

    let inputBox=document.createElement("input");
    inputBox.setAttribute("id","sg");
    inputBox.value=inputText;
    inputBox.style.backgroundColor="#f1f1f1";
    inputBox.style.width="800px";
    inputBox.style.fontSize="x-large";
    inputBox.style.marginLeft="100px";
    inputBox.style.marginBottom="30px";

    //Creating Remove Button

    let removeButton=document.createElement("button");
    removeButton.setAttribute("id","rem-button");
    removeButton.textContent="remove"
    removeButton.style.backgroundColor="green";
    removeButton.style.fontSize="x-large";
    removeButton.style.marginLeft="60px";
    removeButton.style.width="150px";
    removeButton.style.color="white";
    removeButton.addEventListener("click",()=>{
    let p=removeButton.previousElementSibling;
    p.remove();
    removeButton.remove();
    })

    let res=document.getElementById("form");
    res.appendChild(inputBox);
    res.appendChild(removeButton);
}

//Reset all the todoList

function reset(){
    let ress=document.getElementById("form");
    while(ress.firstChild){
    ress.removeChild(ress.firstChild);
   }
    clear();
}

//Clear the input screen

function clear(){
    let inputText=document.getElementById('inputItem');
    inputText.value=" ";
}


