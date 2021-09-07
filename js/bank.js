document.getElementById('login-submit').addEventListener('click', function(){
    const mailTaker = document.getElementById('mail-holder');
    const userMail = mailTaker.value;
    const passwordTaker = document.getElementById('password-holder');
    const userPassword = passwordTaker.value;
    if(userMail == 'habib.eee077@gmail.com' && userPassword == 'secret'){
        window.location.href = 'banking.html';
    };
})