import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const Cards = ({data}) => {

  return (
    <div className="container mt-3">
    <div className="row bg-white shadow-lg rounded-3 p-4 text-center d-flex flex-wrap justify-content-center">
      <div className="col-12 col-md-3 border-end">
        <h6 className="text-muted">IP ADDRESS</h6>
        <p className="fw-bold">{data.ip}</p>
      </div>
      <div className="col-12 col-md-3 border-end">
        <h6 className="text-muted">LOCATION</h6>
        <p className="fw-bold">{data.location.country}, {data.location.city}, {data.location.region}</p>
      </div>
      <div className="col-12 col-md-3 border-end">
        <h6 className="text-muted">TIMEZONE</h6>
        <p className="fw-bold">{data.location.timezone}</p>
      </div>
      <div className="col-12 col-md-3">
        <h6 className="text-muted">ISP</h6>
        <p className="fw-bold">{data.isp}</p>
      </div>
    </div>
  </div>
  );
};

export default Cards;
