function updateMap(){
    console.log("Updating map with real time data");
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        rsp.data.forEach(element => {
            
            latitude = element.latitude;
            longitude = element.longitude;
            
            cases = element.infected;
            if (cases>255){
                color = "rgb(50, 0, 0)"
            } 

            else{
                color = `rgb(105, ${cases}, 0)`;
            }


            new maptilersdk.Marker({
                draggable: false,
                color: color
            })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
};

maptilersdk.config.apiKey = 'YOUR_API_KEY';
var coordinates = document.getElementById('coordinates');
var map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.STREETS,
    center: [0, 0],
    zoom: 2
});

updateMap();
let interval = 20000
setInterval( updateMap, interval);

