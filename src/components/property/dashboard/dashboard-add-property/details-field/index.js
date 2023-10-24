import React from "react";
import MultiSelectField from "./MultiSelectField";
import StructureType from "./StructureType";

const DetailsFiled = () => {
  return (
    <><div className="row">
      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Size in ft (only numbers)
          </label>
          <input
            id="size"
            name="size"
            type="text"
            className="form-control"
            placeholder="Your Name" />
        </div>
      </div>
      {/* End .col-4 */}

      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Lot size in ft (only numbers)
          </label>
          <input
          id="lotsize"
          name="lotsize"
            type="text"
            className="form-control"
            placeholder="Your Name" />
        </div>
      </div>
      {/* End .col-4 */}

      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">Rooms</label>
          <input
          id="rooms"
          name="rooms"
            type="text"
            className="form-control"
            placeholder="Your Name" />
        </div>
      </div>
      {/* End .col-4 */}

      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Bedrooms
          </label>
          <input
          id="bedrooms"
          name="bedrooms"
            type="text"
            className="form-control"
            placeholder="Your Name" />
        </div>
      </div>
      {/* End .col-4 */}

      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Bathrooms
          </label>
          <input
          id="bathrooms"
          name="bathrooms"
            type="text"
            className="form-control"
            placeholder="Your Name" />
        </div>
      </div>
      {/* End .col-4 */}

      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Garages
          </label>
          <input
          id="garages"
          name="garages"
            type="text"
            className="form-control"
            placeholder="Your Name" />
        </div>
      </div>
      {/* End .col-4 */}

      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Garage size
          </label>
          <input
          id="garagesize"
          name="garagesize"
            type="text"
            className="form-control"
            placeholder="Your Name" />
        </div>
      </div>
      {/* End .col-4 */}

      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Year built (numeric)
          </label>
          <input 
          id="yearbuilt"
          name="yearbuilt"
          type="text" className="form-control" />
        </div>
      </div>
      {/* End .col-4 */}

      <div className="col-sm-6 col-xl-4">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">
            Available from (date)
          </label>
          <input
             id="availablefrom"
             name="availablefrom"
            type="text"
            className="form-control"
            placeholder="99.aa.yyyy" />
        </div>
      </div>
      {/* End .col-4 */}


    </div><div className="row"> 

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Owner/ Agent nots (not visible on front end)
            </label>
            <textarea
            id="comments"
            name="comments"
              cols={30}
              rows={5}
              placeholder="There are many variations of passages."
              defaultValue={""} />
          </div>
        </div>
        {/* End .col-12 */}
      </div></>
  );
};

export default DetailsFiled;
