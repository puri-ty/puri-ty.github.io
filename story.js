let scroll = new LocomotiveScroll({
    smooth: true
});
scroll.on('call', function (change, enter) {
        if (enter === "enter") {
            document.getElementById('oldway').style.opacity = 0;
            document.getElementById('neway').style.opacity = 1;
        }
        else {
            document.getElementById('oldway').style.opacity=1;
            document.getElementById('neway').style.opacity=0;
        }
    }
);
let closebtns = document.getElementsByClassName("close");
let i;
for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
            window.location = curPoint.index;
    });
}