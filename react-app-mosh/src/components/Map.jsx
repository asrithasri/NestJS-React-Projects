import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconPng from "../assets/icon-location.svg";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [30, 45], 
  iconAnchor: [15, 45], 
});

const Map = ({ lat, lng }) => {
    function ChangeView({ center }) {
      const map = useMap();
      useEffect(() => {
        map.setView(center, 13);
      }, [center, map]);
      return null;
    }
  
    return (
      <div className="container-fluid mt-3 position-relative d-flex justify-content-center">
        <MapContainer center={[lat, lng]} zoom={13} className="rounded shadow-lg w-100" style={{ height: "400px" }}>
          <ChangeView center={[lat, lng]} />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[lat, lng]} icon={markerIcon}>
            <Popup>Location: {lat}, {lng}</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  };

export default Map;
