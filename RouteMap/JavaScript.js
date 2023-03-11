let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.44952836682165, lng: 30.600016080711644 },
        disableDefaultUI: true,
        zoom: 14,
    });

//50.44952836682165, 30.600016080711644
//50.48307483695035, 30.39718793209465
    const marker = new google.maps.Marker({
        position: {
            lat: 50.44952836682165,
            lng: 30.600016080711644
        },
        map: map,
    });
    const infowindow = new google.maps.InfoWindow({
        content: "Відправна точка",
    });
    marker.addListener("click", () => {
        infowindow.open(marker.get("map"), marker);
    });


    const home = { lat: 50.48307483695035, lng: 30.39718793209465 };
    var button = document.getElementById("myButton");
    button.addEventListener("click", () => {
        map.setCenter(home);
    });
    return controlButton;

}
window.initMap = initMap;