function validate(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('psw').value;
   /*  alert(email,password) */
    if(email =="" || email == null){
        document.getElementById('emailmsg').innerHTML="Please Enter Email Id"
    }
    if(password=="" || password==null){
        document.getElementById('pswmsg').innerHTML ="Please Enter Password"
    }
    if(password.lenght<8){
        document.getElementById('pswmsg').innerHTML = "Please Enter Minimum 8 Characters"
    }
    return false
}