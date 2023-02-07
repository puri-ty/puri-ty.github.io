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