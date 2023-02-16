let scroll = new LocomotiveScroll({
    smooth: true
});

let oldway = document.getElementById('oldway');
let newway = document.getElementById('neway');

scroll.on('call', function (change, enter) {
        if (enter === "enter") {
            oldway.style.opacity = (oldway.style.opacity === '1') ? '0' : '1';
            newway.style.opacity = (newway.style.opacity === '0') ? '1' : '0';
        }
    }
);
let closebtns = document.getElementsByClassName("close");
let i;
for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
           //window.history.back();
        window.history.back();
    });
}