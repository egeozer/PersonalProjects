
  var el = document.querySelector("button");
  var bod = document.querySelector("body");
  el.addEventListener("click", function(){
    if(bod.style.background!=="purple")
      bod.style.background="purple";
    else
      bod.style.background="white";

  })
 