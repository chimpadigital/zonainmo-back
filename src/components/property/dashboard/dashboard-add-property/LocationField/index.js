import React from "react";
import SelectMulitField from "./SelectMulitField";
import Maps from "./Maps";

const LocationField = () => {
  return (
    <><div className="row">{/* 
      <div className="col-sm-12">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name" />
        </div>
      </div> */}
      {/* End col-12 */}

      {/* <SelectMulitField /> */} 
      <div className="col-sm-12">
        <div className="mb20 mt30">
          <label className="heading-color ff-heading fw600 mb30"> 
          </label>
          <Maps />
        </div>
      </div>
    </div>
    </>
  );
};

export default LocationField;
