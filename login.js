
popup=document.getElementById("popup");
evnt=document.getElementById("main");

function openPopup(){
    popup.classList.add("open-Popup");   
    evnt.classList.add("open-blur");
}
function closePopup(){
    popup.classList.remove("open-Popup");
    evnt.classList.remove("open-blur");
}