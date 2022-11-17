import elementCreator from "./functions.js"

let targetMap;
let targetMarker;
const epicenter = { 
  lat: 43.45306860628035, 
  lng: -80.51332010195947
}

const wrapperDiv = elementCreator("div", "map-wrapper");
const infoAreaDiv = elementCreator("div", "map-wrapper__info");
const titleAreaDiv = elementCreator("div", "info__title", "Voodoo");
const descAreaDiv = elementCreator("div", "info__description", "137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8 Ukraine");
const contactWrapper = elementCreator("div", "info__contact-wrapper");
const phoneImage = elementCreator("img", "", "", "./resources/images/phone.png");
const numberAreaDiv = elementCreator("div", "", "1-800-480-9597");
const mailImage = elementCreator("img", "", "", "./resources/images/mail.png");
const mailAreaDiv = elementCreator("div", "", "info@voodoo.com");

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

    contactWrapper.appendChild(phoneImage);
    contactWrapper.appendChild(numberAreaDiv);
    contactWrapper.appendChild(mailImage);
    contactWrapper.appendChild(mailAreaDiv);
    wrapperDiv.appendChild(infoAreaDiv);
    infoAreaDiv.appendChild(titleAreaDiv);
    infoAreaDiv.appendChild(descAreaDiv);
    infoAreaDiv.appendChild(contactWrapper);

    targetMap.controls[google.maps.ControlPosition.CENTER].push(wrapperDiv);
}

window.initMap = initMap;


