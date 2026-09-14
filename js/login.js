const loginWindow = document.getElementById("crmLogin");

const pinInput = document.getElementById("crmPin");

const enterButton = document.getElementById("crmEnter");

const logo = document.querySelector(".logo");

let clicks = 0;

let timer;

logo.addEventListener("click",()=>{

clicks++;

clearTimeout(timer);

timer=setTimeout(()=>{

clicks=0;

},1000);

if(clicks===3){

clicks=0;

loginWindow.style.display="flex";

pinInput.focus();

}

});

enterButton.onclick=()=>{

if(pinInput.value==="1234"){

window.location.href="crm/index.html";

}else{

alert("Неверный PIN");

pinInput.value="";

}

};

pinInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

enterButton.click();

}

});

loginWindow.addEventListener("click", function(e){

    if(e.target === loginWindow){

        loginWindow.style.display = "none";

        pinInput.value = "";

    }

});