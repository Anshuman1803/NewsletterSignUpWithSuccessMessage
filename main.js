let ErrorMsg = document.getElementById("ErrorMsg");
let EmailInput = document.getElementById("EmailInput");
let SubscribeButton = document.getElementById("SubscribeButton");
let DismissMsgBtn = document.getElementById("DismissMsgBtn");
let SuccessMessageBox = document.getElementById("SuccessMessageBox");
let AppContainer=document.querySelector('.AppContainer')
let SubscriberMail=document.getElementById("SubscriberMail")
let ValidMailFormate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


SubscribeButton.addEventListener('click', () => {
    if (EmailInput.value !== "" && EmailInput.value.match(ValidMailFormate)) {
        ErrorMsg.style.display = "none"
        EmailInput.style.border = "1px solid rgb(146 148 160)";
        EmailInput.style.background = "transparent";
        SuccessMessageBox.style.display="flex"
        AppContainer.style.display="none";
        SubscriberMail.innerText=EmailInput.value;
    }
    else {
        
        ErrorMsg.style.display = "inline"
        EmailInput.focus();
        EmailInput.style.border = "1px solid red"
        EmailInput.style.background = "rgb(255 98 87 / 0.19)";
    }
})

DismissMsgBtn.addEventListener('click', ()=>{
    EmailInput.value="";
    EmailInput.focus();
    SuccessMessageBox.style.display="none"
    AppContainer.style.display="flex";
})