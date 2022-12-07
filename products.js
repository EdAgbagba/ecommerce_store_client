function viewDetails(){
  let form={
    businessName: document.getElementById("businessname").value,
    selectIndustry: document.getElementById("industry").value,
    Month: document.getElementById("Month").value,
    Username: document.getElementById("username").value,
    Email: document.getElementById("email").value, 
  }  
  console.log(form);
}






  function logIn(){
    let details={
      Emailaddress: document.getElementById("Emailaddress").value,
      password: document.getElementById("Password").value,
    }
    console.log(details);
  }
  window.addEventListener("DOMContentLoaded",function(e){
    let toBuy = "images/" + localStorage.getItem("toBuy")
    let opts = document.getElementsByClassName("toBuy")
    opts[0].src=toBuy;
    opts[1].src=toBuy;
    let price = localStorage.getItem("price")
    let toPay = document.getElementsByClassName("price")
    toPay[0].innerHTML=price
    toPay[1].innerHTML=price
  })