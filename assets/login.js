function submit(){
    let info=document.querySelector("#info")
    console.log("button was clicked")
    if((document.querySelector("#user").value=="hackwave" && document.querySelector("#pass").value=="123456789")||(document.querySelector("#user").value=="code_commands" && document.querySelector("#pass").value=="123456789")){
        console.log("success")
        window.location.href = "./home.html";
        info.style.color= "green";
        info.innerText="Congratulations!! Login Sucessfull"
    }
    else{
        console.log("incorrect id/pass")
        info.style.color= "red";
        info.innerText="Invalid Username/Password... Please Try Again"
    }
}