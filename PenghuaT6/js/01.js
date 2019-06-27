let el = document.querySelectorAll(".dropdown-menu > a");


for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("click", touch);
    function touch(e) {
        console.log(e.target.nodeName);
        e.preventDefault();
    }
}



