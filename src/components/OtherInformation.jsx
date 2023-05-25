import TextField from "./input/TextField";
import money1 from "../assets/images/form_icons/money3.svg";
import { useState } from "react";
import CustomPhoneInput from "./CustomPhoneInput";
import Button from "./Button";

function OtherInformation() {
  const [prix, setPrix] = useState("5000");
  const [phone, setPhone] = useState("");
  console.log(phone);
  // save
  const handleSubmit = () => {
    alert(`phone:${phone}, prix:${prix}`)
  }
  return (
    <>
      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-4 md:gap-12 p-4 md:p-12 bg-white mt-8 rounded-lg">
        <TextField
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          type="number"
          icon={money1}
          label="Prix"
        />
        <TextField
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          type="number"
          icon={money1}
          label="Prix"
        />
        <TextField
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          type="number"
          icon={money1}
          label="Prix"
        />

        <CustomPhoneInput
          label="Contact"
          value={phone}
          onChange={(v) => setPhone(v)}
        />

        <TextField
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          type="number"
          icon={money1}
          label="Prix"
        />
        <TextField
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          type="number"
          icon={money1}
          label="Prix"
        />
      </div>
      <div className="mt-3 md:mt-8">
        <Button text="Launch" onClick={handleSubmit} />
      </div>
    </>
  );
}

export default OtherInformation;
