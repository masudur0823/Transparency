import TextField from "./input/TextField";
import date from "../assets/images/form_icons/date.svg";
import Select from "./input/Select";
import { useState } from "react";
import Button from "./Button";

function CharacteristicsValues() {
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [text, setText] = useState("");
console.log(text,)
  // save
  const handleSubmit = () => {
    alert(`select1:${number}, select2:${number2}, text:${text}`)
  }
  return (
    <div>
      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-4 p-4 md:p-8 bg-white mt-8 rounded-lg">
        <Select
          icon={date}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          label="Marque"
        >
          <option value="sélectionner la marque">sélectionner la marque</option>
          <option value="3">two</option>
          <option value="4">three</option>
        </Select>
        <Select
          icon={date}
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          label="Modele"
        >
          <option value="sélectionner le modèle">sélectionner le modèle</option>
          <option value="6">six</option>
          <option value="7">seven</option>
        </Select>
        <TextField type="text" icon={date} label="Annee-Modele" onChange={(e)=>setText(e.target.value)} />
        <TextField type="text" icon={date} label="Annee-Modele" />
        <TextField type="text" icon={date} label="Annee-Modele" />
        <TextField type="text" icon={date} label="Annee-Modele" />
        <TextField type="text" icon={date} label="Annee-Modele" />
        <TextField type="text" icon={date} label="Annee-Modele" />
        <TextField type="text" icon={date} label="Annee-Modele" />
        <TextField type="text" icon={date} label="Annee-Modele" />
        <TextField type="text" icon={date} label="Annee-Modele" />
        <TextField type="text" icon={date} label="Annee-Modele" />
        <TextField type="text" icon={date} label="Annee-Modele" />
        <TextField type="text" icon={date} label="Annee-Modele" />
        <TextField type="text" icon={date} label="Annee-Modele" />
      </div>
      <div className="mt-3 md:mt-8">
        <Button text="Launch" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default CharacteristicsValues;
