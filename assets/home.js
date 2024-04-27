let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");

dropdownBtn.onclick = function () {
    //rotate arrow icon
    if(list.classList.contains("show")){
        icon.style.rotate = "-0deg";
    } else {

        icon.style.rotate = "-180deg";
    }
    list.classList.toggle("show");
};