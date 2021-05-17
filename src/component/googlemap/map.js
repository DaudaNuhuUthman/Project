import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
  position: "absolute"
};



function MapContainer(props) {

  const [lng, setlng] = useState(-1.612660)
  const [lat, setlat] = useState(6.725870)

  useEffect(() => {

    // setlng(-1.619590695382274)
    /**retrieve my current location cordinates */
  //   navigator.geolocation.getCurrentPosition((position) => {

  //     console.log(position.coords.longitude);
  //     // setMyCurrentLocation({lat:position.coords.latitude,lng:position.coords.longitude}) 
  //   })
  },[])

  const [showingInfoWindow, setShowingInfoWindow] = useState(false)
  const [activeMarker, setActiveMarker] = useState({})
  const [selectedPlace, setSelectedPlace] = useState({})

  function onMarkerClick(props, marker, e) {
    setSelectedPlace(props)
    setActiveMarker(marker)
    setShowingInfoWindow(true)
  }

  function onClose(props) {
    setShowingInfoWindow(false)
    setActiveMarker(null)
  }


  return (
    <Map
      google={props.google}
      zoom={18}
      style={mapStyles}
      initialCenter={{"lat": lat, "lng":lng}} 
    >
      <Marker
        onClick={onMarkerClick} />
      <InfoWindow>

        marker={activeMarker}
        visible={showingInfoWindow}
        onClose={onClose}
        <div>
          <h4>{selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>

  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSZDL0obdIjp1sn1pMgIr-dbOU9ylpl6o'
})(MapContainer);

// import React, { useState, useEffect, useRef } from 'react'
// import ReactDOM from 'react-dom'
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// // import CurrentLocation from '../CurrentLocation/CurrentLocation'



// function Maps(props) {


//     const [showingInfoWindow, setShowingInfoWindow] = useState(false)
//     const [activeMarker, setActiveMarker] = useState({})
//     const [selectedPlace, setSelectedPlace] = useState({})
//     const [currentLocation, setCurrentLocation] = useState({ lat: null, lng: null })

//     const [currentLocLat, setCurrentLocLat] = useState()
//     const [currentLocLng, setCurrentLocLng] = useState()

//     let markerInfoPopUpNames = ["ayeduase school park", "tech hospital"]

//     const mapStyles = {
//         width: '100%',
//         height: '100%'
//     };

//     const map = useRef(null)
//     var newMap;

//     useEffect(() => {

//         if (navigator && navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(pos => {
//                 const coords = pos.coords;
//                 // console.log("current location lat cordinates: ", coords.latitude);
//                 // console.log("current location lon cordinates: ", coords.longitude);
//                 setCurrentLocLat(coords.latitude)
//                 setCurrentLocLng(coords.longitude)
//             })
//         }
//     })

//     useEffect(() => {

//         /**perform tasks here when we've retrieved the current location cordinates */
//         if ((currentLocLat != undefined) && (currentLocLng != undefined)) {
//             // console.log("current location lat cord: ", currentLocLat);
//             // console.log("current location lng cord: ", currentLocLng);

//             loadMap()
//         }

//     }, [currentLocLat, currentLocLng])

//     function loadMap() {
//         if (props && props.google) {
//             // console.log('props available: ', props);
//             // console.log('google props: ', props.google);

//             //checks if google is available
//             const { google } = props
//             const maps = google.maps

//             // console.log(map.current);
//             const mapRef = map.current

//             //reference to the actual dom element
//             const node = ReactDOM.findDOMNode(mapRef)
//             // console.log(node);

//             // let { zoom } = props
//             // console.log(zoom);

//             // console.log("current location lat cord: ", currentLocLat);
//             // console.log("current location lng cord: ", currentLocLng);

//             const center = new maps.LatLng(currentLocLat, currentLocLng)

//             const mapConfig = Object.assign(
//                 {},
//                 {
//                     center: center,
//                     zoom: 14
//                 }
//             );

//             // maps.Map() is constructor that instantiates the map
//             map.current = new maps.Map(node, mapConfig);

//             recenterMap()
//         }
//     }


//     function recenterMap() {
//         newMap = map.current;
//         const current = { lat: currentLocLat, lng: currentLocLng};
//         const google = props.google;
//         const maps = google.maps;

//         if (newMap) {
//             let center = new maps.LatLng(current.lat, current.lng);
//             newMap.panTo(center);
//         }
//     }

//     const onMarkerClick = (props, marker, e) => {
//         setSelectedPlace(props)
//         setActiveMarker(marker)
//         setShowingInfoWindow(true)

//         // console.log(`marker event: ${JSON.stringify(e)}`);
//         // console.log("marker props: ", props);
//         // console.log("marker: ", marker);
//     }

//     const onClose = (props) => {
//         if (showingInfoWindow) {
//             setShowingInfoWindow(false)
//             setActiveMarker(null)
//         }
//     };


//     return (
//         <>
//             <Map
//                 google={props.google}
//                 zoom={14}
//                 style={mapStyles}
//                 initialCenter={
//                     {
//                       lat: 6.725870,
//                       lng: -1.612660
//                     }
//                 }
//                 // mapCenter={
//                 //     {
//                 //         lat: 5.5502,
//                 //         lng: -0.2174
//                 //     }
//                 // }
//                 ref={map}
//             >
//                 <Marker
//                     onClick={onMarkerClick}
//                     name={'Current Location'}
//                 />
//                 <InfoWindow
//                     marker={activeMarker}
//                     visible={showingInfoWindow}
//                     onClose={onClose}
//                 >
//                     <div>
//                         <h4>{selectedPlace.name}</h4>
//                     </div>
//                 </InfoWindow>



//             </Map>
//         </>
//     )
// }

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyBSZDL0obdIjp1sn1pMgIr-dbOU9ylpl6o'
// })(Maps);

// //get api key from here
// //https://developers.google.com/maps/documentation/maps-static/get-api-key

// //follow this link if u get api not activated in console after adding api key
// //enable all apis
// //https://developers.google.com/maps/documentation/javascript/error-messages#api-not-activated-map-error




