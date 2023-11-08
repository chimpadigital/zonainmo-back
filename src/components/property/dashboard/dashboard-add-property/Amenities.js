import React from "react";

const amenitiesData = {
  column1: [
    { label: "Attic", defaultChecked: false },
    { label: "Basketball court", defaultChecked: true },
    { label: "Air Conditioning", defaultChecked: true },
    { label: "TV Cable", defaultChecked: false },
    { label: "Dryer", defaultChecked: true }, 
    { label: "Dryer", defaultChecked: true }
  ] 
}

const Amenities = () => {
  return (
    <div className="row">
      {Object.keys(amenitiesData).map((columnKey, index) => (
        <div key={index} className="col-sm-6 col-lg-3 col-xxl-2">
          <div className="checkbox-style1">
            {amenitiesData[columnKey].map((amenity, amenityIndex) => (
              <label key={amenityIndex} className="custom_checkbox">
                {amenity.label}
                <input
                   id= {"ammenities"+amenityIndex}
                   name= {"ammenities"+amenityIndex} 
                  type="checkbox"
                  defaultChecked={amenity.defaultChecked}
                />
                <span className="checkmark" />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Amenities;
