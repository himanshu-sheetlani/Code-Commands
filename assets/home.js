let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");
let span = document.getElementById("span");
let input = document.getElementById("search-input");
let listItmes = document.querySelectorAll(".dropdown-list-item");
let form = document.getElementById("form");


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