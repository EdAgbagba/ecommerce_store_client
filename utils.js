let selectedProduct = function(name) {
  let mychoice;
  let dim;
  let colorLite_Left = "#11c3022b"
  let colorStandard_left = "#001e8a2b"
  let circleRight = document.getElementById("right-circle")
    
  if (name === "lite") {
    dim = document.getElementById("lite");
    if (dim.classList.contains("dimmer")) {
      dim.classList.remove("dimmer");
      document.getElementById("standard").classList.add("dimmer");
      
    }
     else document.getElementById("standard").classList.add("dimmer");
     document.getElementById("circle-left").style.background = colorLite_Left;
    circleRight.src = "images/lite.svg"
    mychoice = dim.innerHTML.slice(2);
   
  } 
  else if (name === "standard") {
    dim = document.getElementById("standard");
    if (dim.classList.contains("dimmer")) {
      dim.classList.remove("dimmer");
      document.getElementById("lite").classList.add("dimmer");
    } else document.getElementById("lite").classList.add("dimmer");
    document.getElementById("circle-left").style.background = colorStandard_left;
    circleRight.src = "images/standard.svg"
    mychoice = dim.innerHTML.slice(2);
    
    
  }
  console.log(mychoice)
  localStorage.setItem("mychoice",(mychoice));
}
personaxSelected = function(){
  localStorage.setItem("toBuy","PersonaxLogo.svg");
  location.replace("./products.html")
  localStorage.setItem("price","GH&#8373;199")
}
sikasemSelected = function(){
  localStorage.setItem("toBuy","SikasemLogo.svg");
  location.replace("./products.html")
  localStorage.setItem("price","GH&#8373;200")
}