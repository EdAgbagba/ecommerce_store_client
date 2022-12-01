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