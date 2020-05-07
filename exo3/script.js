let pArray = document.getElementsByTagName("p");

function fadeIn(index) {
    pArray[index].style.transition = "all 1s";
    pArray[index].style.opacity = "1";
}

function fadeOut(index) {
    pArray[index].style.transition = "all 1s";
    pArray[index].style.opacity = "0";
}

for (i = 0; i < pArray.length; i++) {
    pArray[i].style.transition = "";
    pArray[i].style.opacity = "0";
}

window.onscroll = function () {
    for (i = 0; i < pArray.length; i++) {
        if ((document.documentElement.scrollTop + window.innerHeight - 100) > pArray[i].offsetTop) {
            fadeIn(i);
        } else {
            fadeOut(i);
        }
        if ((document.documentElement.scrollTop) > pArray[i].offsetTop) {
            fadeOut(i);
        }
    }
}