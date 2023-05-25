import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function CustomPhoneInput({ label, value, onChange }) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={label} className="text-my_light_text text-sm">
        {label}
      </label>
      <PhoneInput className="customPhone" country={"us"} value={value} onChange={onChange} />
    </div>
  );
}

export default CustomPhoneInput;
