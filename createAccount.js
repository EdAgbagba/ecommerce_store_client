
function LogIn(){
  let x = document.getElementById('email').value;
  let y = document.getElementById('password').value;

  if (x ===""){
    alert("Email is required");
    return;
 
  }else if (y ===""){
    alert("Password is required");
    return;

  }
  
}

function createAccount(){
  let Password = document.getElementById('password').value;
  let Confirm = document.getElementById('confirmPassword')
}


// function createAccount(){
//     let account={
//         firstName : document.getElementById('firstname').value,

//         lastname : document.getElementById('lastname').value,
//         businessname : document.getElementById('Businessname').value,


//         phonenumber : document.getElementById('phone').value,

//         emailaddress : document.getElementById('emailaddress').value,

//         password: document.getElementById('password').value,

//         confirmPassword: document.getElementById('cmfPswd'),
//     }  
//     console.log(account);
//   }