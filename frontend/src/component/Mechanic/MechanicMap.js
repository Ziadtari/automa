import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import SideBar from "./Sidebar";
import "./dashboard.css";
import "./Map.css";

const MechanicMap = () => {
  return (
    <>
      <div className="dashboard">
        <SideBar />
        <MapContainer
          style={{ height: "80vh" }}
          center={[33.7445, 72.7867]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[33.7445, 72.7867]}>
            <Popup>You're here.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default MechanicMap;
