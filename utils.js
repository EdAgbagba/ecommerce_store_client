let selectedProduct = function(name) {
  let mychoice;
  let dim;
    
  if (name === "lite") {
    dim = document.getElementById("lite");
    if (dim.classList.contains("dimmer")) {
      dim.classList.remove("dimmer");
      document.getElementById("standard").classList.add("dimmer");
    }
     else document.getElementById("standard").classList.add("dimmer");
    mychoice = dim.innerHTML.slice(2);
   
  } 
  else if (name === "standard") {
    dim = document.getElementById("standard");
    if (dim.classList.contains("dimmer")) {
      dim.classList.remove("dimmer");
      document.getElementById("lite").classList.add("dimmer");
    } else document.getElementById("lite").classList.add("dimmer");
    mychoice = dim.innerHTML.slice(2);
    
  }
  console.log(mychoice)
  localStorage.setItem("mychoice",JSON.stringify(mychoice));
}

