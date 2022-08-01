var container_block = document.getElementById("container-block");
const container = document.getElementsByClassName("container");
container_block.addEventListener("wheel", myFunction);

var page = 0;
var scrolllock = true;

function myFunction(e) {
    if (!scrolllock) return; //函数节流
    e = e || window.Event;
    if (e.wheelDelta < 0 && page < container.length - 1) {
        page++;
        container_block.style.transform = "translateY(" + -container[0].clientHeight * page + "px)"
    } else if (e.wheelDelta > 0 && page > 0) {
        page--;
        container_block.style.transform = "translateY(" + -container[0].clientHeight * page + "px)"
    }
    scrolllock = false;
    setTimeout(() => {
        scrolllock = true;
    }, 500);
    // alert(e.wheelDelta);
}