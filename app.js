// Initializing MouseClick Function
function initialize (){
    let mouseCursor = document.querySelector(".cursor");
    let navbar  = document.querySelectorAll( ".navbar navbar-expand-lg navbar-light bg-light");

    window.addEventListener("mousemove", cursor);


    function cursor(e){
        console.log(e.clientX,e.clientY)
        mouseCursor.style.top = (e.clientY) + "px";
        mouseCursor.style.left = (e.clientX) + "px";

    }

}

window.onload = initialize;