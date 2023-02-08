L.mapbox.accessToken = 'pk.eyJ1Ijoic29waGllZ3YiLCJhIjoiY2xkY3F2M2hiMGQ0NjNubnJlenpubXl5eCJ9.lVYFYxvKsl89G_oF850jsw';
var map = L.map('map', {
    center: [41.7151, 44.8271],
    zoom: 13,
    scrollWheelZoom: false,
});

L.tileLayer(
    'https://api.mapbox.com/styles/v1/sophiegv/cldk73rnj002101rn4n8t7rnz/tiles/256/{z}/{x}/{y}@2x?access_token=' + L.mapbox.accessToken,
    {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://www.mapbox.com/contribute/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

let customIcon = L.icon({
    iconUrl: 'marker.png',

    iconSize: [65, 65], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
const points = [
    {
        coords: [41.71314827572697, 44.78244991142038],
        story: "story1.html"
    },
    {
        coords: [41.69272711880331, 44.815284046136135],
        story: "story2.html"
    }

]
for (let i = 0; i < points.length; i++) {
    let marker = L.marker(points[i].coords, {icon: customIcon}).addTo(map);
    let curPoint =points[i];
    marker.on("click", function (e) {
        window.location = curPoint.story;
        /*
        let story = document.getElementById(curPoint.story);
        story.classList.add("show");
        let storyScroll = new LocomotiveScroll({
            el: story,
            smooth: true
        });
        let closebtns = document.getElementsByClassName("close");
        for (let j = 0; j < closebtns.length; j++) {
            closebtns[j].onclick = function () {
                this.parentElement.classList.remove("show");
                storyScroll.destroy();
                scroll.start();
            };
        }
         */
    })
}

let scroll = new LocomotiveScroll({
    el: document.getElementById('intro'),
    smooth: true
});
scroll.on('call', function () {
        anime({
            targets: '#titlecard',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 10000,
            delay: 0,
            direction: 'alternate',
            loop: false
        });
    }
);