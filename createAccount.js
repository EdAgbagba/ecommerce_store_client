function createAccount(){
    let account={
        firstName : document.getElementById('firstname').value,

        lastname : document.getElementById('lastname').value,
        businessname : document.getElementById('Businessname').value,


        phonenumber : document.getElementById('phone').value,

        emailaddress : document.getElementById('emailaddress').value,

        password: document.getElementById('password').value,

        confirmPassword: document.getElementById('cmfPswd'),
    }  
    console.log(account);
  }