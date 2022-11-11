
let targetMap;
let targetMarker;
const epicenter = { 
  lat: 43.45306860628035, 
  lng: -80.51332010195947
}
const wrapperDiv = document.createElement("div");
const infoAreaDiv = document.createElement("div");
const titleAreaDiv = document.createElement("div");
const descAreaDiv = document.createElement("div");

function initMap() {
    const data = {
      zoom: 16,
      center: epicenter,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
      disableDefaultUI: true,
    }

    targetMap = new google.maps.Map(document.getElementById("main-wrapper__map"), data);
    targetMarker = new google.maps.Marker({
    position: epicenter,
    map: targetMap,
    icon: "resources/images/MarkTarget.png",
    });

    const mapStyles = {
      default: [
        {
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          elementType: "geometry",
          stylers: [{ color: "#FFFAF5" }], // color of streets
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#BEE6C8" }], // color of parks
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }], // color of roads
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#AFC3FF" }], // color of water
        },
      ] }

    targetMap.setOptions({ styles: mapStyles.default });

    ///////////////////////////////
    wrapperDiv.style.width = "100%";
    wrapperDiv.style.height = "100%";
    ///////////////////////////////
    infoAreaDiv.style.position = "absolute";
    infoAreaDiv.style.backgroundColor = "#FFFFFF";
    infoAreaDiv.style.width = "244px";
    infoAreaDiv.style.height = "161px";
    infoAreaDiv.style.left = "125px";
    infoAreaDiv.style.top = "256px";
    infoAreaDiv.style.borderStyle = "none";
    infoAreaDiv.style.borderRadius = "8px"
    infoAreaDiv.style.boxShadow = "0px 15px 30px rgba(220, 221, 243, 0.25)";
    infoAreaDiv.style.color = "rgb(26,26,26)";
    infoAreaDiv.style.fontFamily = "Inter";
    infoAreaDiv.style.fontStyle = "normal";
    infoAreaDiv.style.fontSize = "12px";
    infoAreaDiv.style.lineHeight = "20px";
    infoAreaDiv.style.textAlign = "left";
    infoAreaDiv.style.padding = "20px 38px 61px 19px";
    ///////////////////////////////
    infoAreaDiv.style.width = "187px";
    infoAreaDiv.style.height = "80px";
    titleAreaDiv.textContent = "Voodoo";
    infoAreaDiv.style.fontWeight = "700";
    ///////////////////////////////
    descAreaDiv.textContent = "137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8Ukraine";
    descAreaDiv.style.fontWeight = "350";

    wrapperDiv.appendChild(infoAreaDiv);
    infoAreaDiv.appendChild(titleAreaDiv);
    infoAreaDiv.appendChild(descAreaDiv);

    targetMap.controls[google.maps.ControlPosition.CENTER].push(wrapperDiv);
}

window.initMap = initMap;


