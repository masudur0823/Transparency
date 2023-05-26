import TextField from "./input/TextField";
import car from "../assets/images/form_icons/car.svg";
import date from "../assets/images/form_icons/date.svg";
import Kilometrage from "../assets/images/form_icons/Kilometrage.svg"
import Carburant from "../assets/images/form_icons/Carburant.svg"
import Boite from "../assets/images/form_icons/Boite de vitesse.svg"
import typede from "../assets/images/form_icons/Type de vehicule.svg"
import Couleur from "../assets/images/form_icons/Couleur.svg"
import Nombre from "../assets/images/form_icons/Nombre de portes.svg"
import Nombredep from "../assets/images/form_icons/Nombre de place(s).svg"
import Puissance from "../assets/images/form_icons/Puissance fiscale.svg"
import Permis from "../assets/images/form_icons/Permis.svg"
import Critair from "../assets/images/form_icons/Crit’air.svg"
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
          icon={car}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          label="Marque"
        >
          <option value="sélectionner la marque">sélectionner la marque</option>
          <option value="3">two</option>
          <option value="4">three</option>
        </Select>
        <Select
          icon={car}
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          label="Modele"
        >
          <option value="sélectionner le modèle">sélectionner le modèle</option>
          <option value="6">six</option>
          <option value="7">seven</option>
        </Select>
        <TextField type="text" icon={date} label="Annee-Modele" onChange={(e)=>setText(e.target.value)} />
        <TextField type="text" icon={date} label="Mise en Circulation" />
        <TextField type="text" icon={Kilometrage} label="Kilometrage" />
        <TextField type="text" icon={Carburant} label="Carburant" />
        <TextField type="text" icon={Boite} label="Boite de vitesse" />
        <TextField type="text" icon={typede} label="Type de vehicule" />
        <TextField type="text" icon={Couleur} label="Couleur" />
        <TextField type="text" icon={Nombre} label="Nombre de portes" />
        <TextField type="text" icon={Nombredep} label="Nombre de place(s)" />
        <TextField type="text" icon={Puissance} label="Puissance fiscale" />
        <TextField type="text" icon={Puissance} label="Puissance DIN" />
        <TextField type="text" icon={Permis} label="Permis" />
        <TextField type="text" icon={Critair} label="Crit’air" />
      </div>
      <div className="mt-3 md:mt-8">
        <Button text="Launch" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default CharacteristicsValues;
