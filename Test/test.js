let parEl = document.getElementById("par-el")
let buttonEl = document.getElementById("button-el")
let inputEl = document.getElementById("input-el")


buttonEl.addEventListener("click", function(){
    if(inputEl.value === ""){
        return ""
    }else{
        parEl.innerHTML += `${inputEl.value}  <button>X</button>  <br>` 
        inputEl.value = ""
    }
})
function myFunction() {
    let x = document.createElement("button");
    let t = document.createTextNode("X");
    x.appendChild(t);
    document.body.appendChild(x);
  }

