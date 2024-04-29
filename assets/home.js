let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");
let h1= document.querySelector(".body .h1")
let slider=document.querySelector("#tickBox");
let span = document.getElementById("span");
let input = document.getElementById("search-input");
let listItmes = document.querySelectorAll(".dropdown-list-item");
let form = document.getElementById("form");
let srchBar= document.querySelector(".search-bar")
let ggl = document.querySelector(".apiprt")
// let txt = document.querySelector(".apiprt .h1")

function myFunction() {
    if ( slider.checked ){
        srchBar.style.display = "none";   
        h1.style.display="none";
        document.querySelector(".api").style.display = "flex";
        // txt.style.display = "flex";
        // cdnt.innerText="Code";
        // body.style.backgroundColor="black";
        // cdnt.style.color="white";
    }else{ 
        srchBar.style.display = "flex";    
        h1.style.display="flex";
        document.querySelector(".api").style.display = "none";
        // txt.style.display = "none";
        // code.style.display = "none";
        // cdnt.innerText="Note";
        // body.style.backgroundColor="white";
        // cdnt.style.color="black"
    }
}

dropdownBtn.onclick = function () {
    //rotate arrow icon
    if(list.classList.contains("show")){
        icon.style.rotate = "-0deg";
    } else {

        icon.style.rotate = "-180deg";
    }
    list.classList.toggle("show");
};

window.onclick = function (e) {
    if (e.target.id !== "drop-text" && e.target.id !== "span" && e.target.id !== "icon") {
        list.classList.remove("show");
        icon.style.rotate = "0deg";
    }
};

for(item of listItmes){
    item.onclick = function(e){
        //change dropdown btn text on click on selected list item
        span.innerText = e.target.innerText;

        // if(e.target.innerText == "Everything"){
        //     input.placeholder = "Search Anything...";
        // }
        input.placeholder = "Search in " + e.target.innerText + "...";
    }
}

for(item of listItmes){
    item.onclick = function(e){
        span.innerText = e.target.innerText;
        form.action="https://www."+e.target.innerText+".com/search";
        if(e.target.innerText=="youtube"){
            input.name="search_query"
            form.action="https://www."+e.target.innerText+".com/result";
        }
        if(e.target.innerText=="mdn"){
            form.action="https://developer.mozilla.org/en-US/searchs";
        }
    }
}