import TextField from "./input/TextField";
import car from "../assets/images/form_icons/car.svg";
import date from "../assets/images/form_icons/date.svg";
import Kilometrage from "../assets/images/form_icons/Kilometrage.svg";
import Carburant from "../assets/images/form_icons/Carburant.svg";
import Boite from "../assets/images/form_icons/Boite de vitesse.svg";
import typede from "../assets/images/form_icons/Type de vehicule.svg";
import Couleur from "../assets/images/form_icons/Couleur.svg";
import Nombre from "../assets/images/form_icons/Nombre de portes.svg";
import Nombredep from "../assets/images/form_icons/Nombre de place(s).svg";
import Puissance from "../assets/images/form_icons/Puissance fiscale.svg";
import Permis from "../assets/images/form_icons/Permis.svg";
import Critair from "../assets/images/form_icons/Crit’air.svg";
import Select from "./input/Select";
import { useState } from "react";
import Button from "./Button";
import { colors, epaList, FuelTypeList } from "../data/CharacteristicsDataset";

function CharacteristicsValues() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [fueltype, setFueltype] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [doorNumber, setDoorNumber] = useState("");
  const [seatsNumber, setSeatsNumber] = useState("");
  const [epa, setEpa] = useState("");
  const [modelYear, setModelYear] = useState("");
  // save
  const handleSubmit = () => {
    alert(brand);
  };
  return (
    <div>
      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-4 p-4 md:p-8 bg-white mt-8 rounded-lg">
        <Select
          icon={car}
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          label="Brand"
        >
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="FIAT">FIAT</option>
        </Select>
        <Select
          icon={car}
          value={model}
          onChange={(e) => setModel(e.target.value)}
          label="Model"
        >
          <option value="1 Series">1 Series</option>
          <option value="1 Series">1 Series</option>
          <option value="1 Series">1 Series</option>
        </Select>

        <Select
          icon={date}
          value={modelYear}
          onChange={(e) => setModelYear(e.target.value)}
          label="Model year"
        >
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
        </Select>
        <TextField
          type="text"
          icon={date}
          label="First registered"
          placeholder="MM/Year"
        />
        <TextField
          type="text"
          icon={Kilometrage}
          label="Mileage"
          placeholder="miles"
        />

        <Select
          icon={Carburant}
          value={fueltype}
          onChange={(e) => setFueltype(e.target.value)}
          label="Fuel type"
        >
          {FuelTypeList.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Select
          icon={Boite}
          value={gearbox}
          onChange={(e) => setGearbox(e.target.value)}
          label="Gearbox"
        >
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
          <option value="Other">Other</option>
        </Select>
        <Select
          icon={typede}
          value={bodyType}
          onChange={(e) => setBodyType(e.target.value)}
          label="Body type"
        >
          <option value="1">1</option>
          <option value="6">six</option>
          <option value="7">seven</option>
        </Select>
        <Select
          icon={Couleur}
          value={color}
          onChange={(e) => setColor(e.target.value)}
          label="Color"
        >
          {colors.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Select
          icon={Nombre}
          value={doorNumber}
          onChange={(e) => setDoorNumber(e.target.value)}
          label="Number of doors"
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="more">More</option>
        </Select>
        <Select
          icon={Nombredep}
          value={seatsNumber}
          onChange={(e) => setSeatsNumber(e.target.value)}
          label="Number of seats"
        >
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6 </option>
          <option value="7">7</option>
          <option value="more">More</option>
        </Select>
        <TextField
          type="text"
          icon={Puissance}
          label="Engine size"
          placeholder="L"
        />
        <TextField
          type="text"
          icon={Puissance}
          label="Engine Power"
          placeholder="bhp"
        />
        <Select
          icon={Permis}
          value={epa}
          onChange={(e) => setEpa(e.target.value)}
          label="EPA Ratings (Env. Protection Agency )"
        >
          {epaList.map((item, index) => (
            <option key={index} value={`${item.title}: ${item.desc}`}>
              {item.title}: {item.desc}
            </option>
          ))}
        </Select>
        <TextField
          type="text"
          icon={Critair}
          label="CO2 emissions"
          placeholder="g/km"
        />
      </div>
      <div className="mt-3 md:mt-8">
        <Button text="Launch" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default CharacteristicsValues;
