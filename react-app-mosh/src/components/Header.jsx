import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { useState } from "react";

const Header = ({onSearch}) => {
    const [ip, setIp] = useState("");

    const handleSearch =()=>{
        if(ip.trim() !==""){
            onSearch(ip);
        }
        
    }
    
    return (
        <div className="position-relative text-center">
            {/* Background Image */}
            <img
                src="/pattern-bg-desktop.png"
                alt="hero-img"
                className="w-100 img-fluid"
                style={{ height: "300px", objectFit: "cover" }}
            />

            {/* Overlay Content */}
            <div
                className="position-relative text-center bg-dark text-white py-5"
            >
                <h2 className="fw-bold mb-3">IP Address Tracker</h2>

               
                <div className="input-group mx-auto w-75 w-md-50">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter IP Address"
                        aria-label="IP Address"
                        value={ip}
                        onChange={(e)=>setIp(e.target.value)}
                    />
                    <button className="btn btn-dark" type="button" 
                    onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>

           
        </div>
    );
};

export default Header;
