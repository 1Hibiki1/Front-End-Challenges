function Validate(){

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let fn_flag = ln_flag = pwd_flag = em_flag = false;

    if(document.getElementById("first_name").value.replace(/\s+/g, '') == ""){
        document.getElementById("errico-fn").style.display = "block";
        document.getElementById("err-msg-fn").style.display = "block";
        document.getElementById("first_name").style.border = "1px solid hsl(0, 100%, 74%)";
        fn_flag = false;
    }else{
        fn_flag = true;
        document.getElementById("errico-fn").style.display = "none";
        document.getElementById("err-msg-fn").style.display = "none";
        document.getElementById("first_name").style.border = "1px solid hsl(246, 25%, 77%)";
    }

    if(document.getElementById("last_name").value.replace(/\s+/g, '') == ""){
        document.getElementById("errico-ln").style.display = "block";
        document.getElementById("err-msg-ln").style.display = "block";
        document.getElementById("last_name").style.border = "1px solid hsl(0, 100%, 74%)";
        ln_flag = false;
    }else{
        ln_flag = true;
        document.getElementById("errico-ln").style.display = "none";
        document.getElementById("err-msg-ln").style.display = "none";
        document.getElementById("last_name").style.border = "1px solid hsl(246, 25%, 77%)";
    }

    if(!document.getElementById("email_input").value.match(mailformat)){
        document.getElementById("errico-email").style.display = "block";
        document.getElementById("err-msg-email").style.display = "block";
        document.getElementById("email_input").style.border = "1px solid hsl(0, 100%, 74%)";
        em_flag = false;
    }else{
        em_flag=true;
        document.getElementById("errico-email").style.display = "none";
        document.getElementById("err-msg-email").style.display = "none";
        document.getElementById("email_input").style.border = "1px solid hsl(246, 25%, 77%)";
    }

    if(document.getElementById("password_input").value.replace(/\s+/g, '') == ""){
        document.getElementById("errico-pwd").style.display = "block";
        document.getElementById("err-msg-pwd").style.display = "block";
        document.getElementById("password_input").style.border = "1px solid hsl(0, 100%, 74%)";
        pwd_flag = false;
    }else{
        pwd_flag = true;
        document.getElementById("errico-pwd").style.display = "none";
        document.getElementById("err-msg-pwd").style.display = "none";
        document.getElementById("password_input").style.border = "1px solid hsl(246, 25%, 77%)";
    }

    if(!(fn_flag==true && ln_flag==true && em_flag==true && pwd_flag==true)){
        return false;
    }

}