"use client"
import React from "react";
import PropertyDescription from "./property-description";
import User from "./user"
import UploadMedia from "./upload-media";
import LocationField from "./LocationField";
import DetailsFiled from "./details-field";
import Amenities from "./Amenities";


export default function AddPropertyTabContent() {

  const handleSubmit = async (e) => {
    e.preventDefault()

    var form = document.getElementById('registration-form')
    const formData = new FormData(form)
    const title = formData.get("title");
    const description = formData.get("description");
    const user_id = formData.get("user_id")
    const category = formData.get("category")
    const price = formData.get("price")
    //location
    const multifield0= formData.get("multifield0")
    const multifield1= formData.get("multifield1")
    const multifield2= formData.get("multifield2")
    const zip = formData.get("zip")
    //details
    const size= formData.get("size")
    const lotsize= formData.get("lotsize")
    const rooms= formData.get("rooms")
    const bedrooms = formData.get("bedrooms")
    const garages = formData.get("garages")
    const garagesize = formData.get("garagesize")
    const yearbuilt = formData.get("yearbuilt")
    const availablefrom = formData.get("availablefrom")
    const comments = formData.get("comments")
    console.log(title, description, user_id, category, price, multifield0, multifield1, multifield2, zip
      , size, lotsize, rooms, bedrooms, garages, garagesize, yearbuilt, availablefrom, comments)
    const res = await fetch(`/crud_property`, {
      method: 'POST',
      body: JSON.stringify({ title, description, user_id }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <><nav>
      <div className="nav nav-tabs" id="nav-tab2" role="tablist">
        <button
          className="nav-link active fw600 ms-3"
          id="nav-item1-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-item1"
          type="button"
          role="tab"
          aria-controls="nav-item1"
          aria-selected="true"
        >
          1. Description
        </button>
        <button
          className="nav-link fw600"
          id="nav-item2-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-item2"
          type="button"
          role="tab"
          aria-controls="nav-item2"
          aria-selected="false"
        >
          2. Media
        </button>
        <button
          className="nav-link fw600"
          id="nav-item3-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-item3"
          type="button"
          role="tab"
          aria-controls="nav-item3"
          aria-selected="false"
        >
          3. Location
        </button>
        <button
          className="nav-link fw600"
          id="nav-item4-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-item4"
          type="button"
          role="tab"
          aria-controls="nav-item4"
          aria-selected="false"
        >
          4. Detail
        </button>
        <button
          className="nav-link fw600"
          id="nav-item5-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-item5"
          type="button"
          role="tab"
          aria-controls="nav-item5"
          aria-selected="false"
        >
          5. Amenities
        </button>
      </div>
    </nav>
      <form id="registration-form" className="form-style1" onSubmit={handleSubmit} >
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-item1"
            role="tabpanel"
            aria-labelledby="nav-item1-tab"
          >
            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
              <h4 className="title fz17 mb30">Property Description</h4>
              <PropertyDescription />
              <User />
            </div>
          </div>
        <div
            className="tab-pane fade"
            id="nav-item3"
            role="tabpanel"
            aria-labelledby="nav-item3-tab"
          >
            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
              <h4 className="title fz17 mb30">Listing Location</h4>
              <LocationField />
            </div>
          </div>
         
          <div
            className="tab-pane fade"
            id="nav-item4"
            role="tabpanel"
            aria-labelledby="nav-item4-tab"
          >
            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
              <h4 className="title fz17 mb30">Listing Details</h4>
              <DetailsFiled />
            </div>
          </div> 
            {/*  
          <div
            className="tab-pane fade"
            id="nav-item5"
            role="tabpanel"
            aria-labelledby="nav-item5-tab"
          >
            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
              <h4 className="title fz17 mb30">Select Amenities</h4>
              <div className="row">
                <Amenities />
              </div>
            </div>
          </div> */}
          <button type="submit"
          >Crear</button>
        </div>

      </form></>
  );
}
/*
   <div
     className="tab-pane fade"
     id="nav-item2"
     role="tabpanel"
     aria-labelledby="nav-item2-tab"
   >
     <UploadMedia />
   </div>

   <div
     className="tab-pane fade"
     id="nav-item3"
     role="tabpanel"
     aria-labelledby="nav-item3-tab"
   >
     <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
       <h4 className="title fz17 mb30">Listing Location</h4>
       <LocationField />
     </div>
   </div>

   <div
     className="tab-pane fade"
     id="nav-item4"
     role="tabpanel"
     aria-labelledby="nav-item4-tab"
   >
     <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
       <h4 className="title fz17 mb30">Listing Details</h4>
       <DetailsFiled />
     </div>
   </div>

   <div
     className="tab-pane fade"
     id="nav-item5"
     role="tabpanel"
     aria-labelledby="nav-item5-tab"
   >
     <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
       <h4 className="title fz17 mb30">Select Amenities</h4>
       <div className="row">
         <Amenities />
       </div>
     </div>
   </div> */