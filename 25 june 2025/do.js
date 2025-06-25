let name = prompt("Enter your name:");
if (name !== null) {
  alert("Hello, " + name + "!");
} else {
  alert("You canceled the prompt.");
}

var cont=document.getElementById("inp")
var tex =document.getElementById("tex")




function me(){
    let c=document.getElementById("tex").value
    var taskText = c.trim()
    if (taskText == "") { 
        alert("Invalid Input (Empty Input)"); 
        return 
    }
    console.log(taskText)

    var d=document.createElement("li")
    var e=document.createElement("span")
    var f=document.createElement("button")
    e.textContent=taskText
    f.textContent="delete"
    d.appendChild(e)
    d.appendChild(f)
    cont.appendChild(d)
    f.addEventListener('click',Task)
    
}
function Task(e){
    console.log(e.target.parentNode.remove())
}

tex.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    me();
  }
});
