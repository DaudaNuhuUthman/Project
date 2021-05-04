import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import currentLocation from "./currentLocation"

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state= {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
  onMarkerClick=(props, marker,e)=>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow:true
  });
  onClose = props => {
    if(this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
      
  render() {
  //   if (navigator.geolocation) { {
  //     navigator.geolocation.watchPosition(getPosition);
  //   }    
  // } else {alert("unable to get user position")
      
  // } 
  // function getPosition(position) {
  //   console.log(position.coords.latitude, 
  //     position.coords.longitude); 
  // }
  

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 6.725870,
            lng: -1.612660
          }
        }
      >
        <Marker
        onClick= {this.onMarkerClick}/>
        <InfoWindow> 

        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose} 
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
        </InfoWindow>
      </Map>

      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSZDL0obdIjp1sn1pMgIr-dbOU9ylpl6o'
})(MapContainer);