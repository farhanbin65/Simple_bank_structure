// go to bank page
document.getElementById('btn-submit').addEventListener('click', function(){
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    location.href = "bank.html";
    // if(email === '65@farhanbin.com' && pass === 'janina'){
    //     location.href = "bank.html";
    // }else{
    //     alert('invalid user')
    // }
})


// back to home page

