
function signUp(){ 
 
let firstname = document.getElementById('firstname').value
 let   lastName = document.getElementById("lastname").value
 let   businessname = document.getElementById("businessName").value
   let phonenumber = document.getElementById("phone").value
   let emailaddress = document.getElementById("email").value
  let  firstpassword = document.getElementById("password").value
  let  secondpassword = document.getElementById("confirmPassword").value
  let checkedValue = document.querySelector('.terms:checked') === null ? 0 : 1

   
 if (!firstname ||
      !lastName ||
      !businessname ||
      !phonenumber ||
      !emailaddress ||
      !firstpassword ||
      !secondpassword ){
  alert('Input is required');
//  redirect()
  return
 } 
 
 if(firstpassword != secondpassword){
  alert('Password does not match');
  return
 }  

 if(checkedValue != 1){
  alert('Read the terms and conditions')
  return
  }
 
  redirect()
 

}




const redirect = () =>{
  window.location.href = `./products.html`
}