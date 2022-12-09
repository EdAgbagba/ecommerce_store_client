function Login(){
    let emailaddress = document.getElementById('email').value
    let Password = document.getElementById('password').value


    if(!emailaddress || !Password){
        alert('Input is required')
        return;
    }
    else{
        redirect()
    }
}

const redirect = ()=>{
    window.location.href = './products.html'
}