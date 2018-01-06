window.onload = function () {

var name = prompt("Hi");

if(name==null){
  name="Ege's Image Gallery";

}
else{
document.getElementById("nameholder").textContent = name+"'s Image Gallery";
}
}