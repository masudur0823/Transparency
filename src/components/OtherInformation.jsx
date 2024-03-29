import TextField from "./input/TextField";
import money1 from "../assets/images/form_icons/money3.svg";
import preOwnerIcon from "../assets/images/form_icons/Previous Owner(s).svg";
import locationicon from "../assets/images/form_icons/location.svg";
import warrantyIcon from "../assets/images/form_icons/calendar2.svg";
import documenttext1 from "../assets/images/form_icons/documenttext1.svg";
import { useState } from "react";
import CustomPhoneInput from "./CustomPhoneInput";
import Button from "./Button";
import Select from "./input/Select";
import btnIcon from "../assets/images/form_icons/edit2.svg"

function OtherInformation() {
  const [price, setPrice] = useState("");
  const [preOwner, setPreowner] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [warranty, setWarranty] = useState("");
  const [vehicleInspection, setVehicleInspection] = useState("");
  console.log(phone);
  // save
  const handleSubmit = () => {
    alert(`phone:${phone}, prix:${price}`);
  };
  return (
    <>
      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-4 md:gap-12 p-4 md:p-12 bg-white mt-8 rounded-lg">
        <TextField
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="$"
          icon={money1}
          label="Price"
        />
        <Select
          icon={preOwnerIcon}
          value={preOwner}
          onChange={(e) => setPreowner(e.target.value)}
          label="Previous Owner(s)"
        >
          <option value="1">one</option>
          <option value="2">two</option>
          <option value="3">three</option>
        </Select>

        <TextField
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          icon={locationicon}
          label="Location"
        />

        <CustomPhoneInput
          label="Contact"
          value={phone}
          onChange={(v) => setPhone(v)}
        />

        <TextField
          value={warranty}
          onChange={(e) => setWarranty(e.target.value)}
          type="number"
          icon={warrantyIcon}
          label="Warranty Coverage"
        />

        <Select
          icon={documenttext1}
          value={vehicleInspection}
          onChange={(e) => setVehicleInspection(e.target.value)}
          label="Vehicle Inspection"
        >
          <option value="Out of date">Out of date</option>
          <option value="Up to date">Up to date</option>
        </Select>
      </div>
      <div className="mt-3 md:mt-8">
        <Button rounded labelIcon={btnIcon} text="Launch" onClick={handleSubmit} />
      </div>
    </>
  );
}

export default OtherInformation;
