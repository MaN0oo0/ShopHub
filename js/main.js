//set variable ===>

let btnserach=document.getElementById("serach");
let showSerach=document.getElementById("showSerach");
let btnadd=document.querySelector(".Catogray");





btnserach.onclick=function(){
    this.classList.add("d-none");
showSerach.classList.remove("d-none")
showSerach.innerHTML="<div class='input-group'> <input type='text'> <button class='btn btn-primary'>Serach</button>";
}
