const motorList = [
  "Nickel",
  "Easy Start",
  "High fuel consumption",
  "Worn out",
  "Damaged",
  "Smoke",
  "Noisy",
  "Light indicator on",
  "Vibrations",
  "Leakage",
  "Low power",
  "Error codes",
];
const motorListDesc = [
  "Nine",
  "The engine starts easily, without excessive noise, and therefore operates correctly",
  "This may indicate a failure or improper use of the engine",
  "Indicates that the engine has been used for a long period and may require repairs or replacement.",
  "Indicates that the engine has been damaged and may require significant repairs or complete replacement.",
  "Indicates that the engine is producing excessive smoke, which can be a sign of a major problem.",
  "Indicates that the engine is making unusual noises, which can be a sign of a malfunction.",
  "This may indicate a breakdown or malfunction.",
  "Signaling an imbalance or faulty parts.",
  "Indicates that the engine is leaking fluid or oil, which can be a sign of a seal problem or another engine issue.",
  "Indicates that the engine lacks power and may require repairs or replacement.",
  "Indicates a failure or problem with the engine.",
];

const outsideList = [
  "Pristine",
  "Scratched",
  "Like new",
  "Good",
  "Dented",
  "Corroded",
  "Peeling",
  "Cracked",
  "Damaged",
  "Rusty",
  "Scratched",
  "Dirty",
  "Worn",
];

const outsideDesc = [
  "New",
  "When a sharp or abrasive object has left a mark on the surface of the car.",
  "Still shiny and in good condition despite its age.",
  "Overall good condition for its age.",
  "When there is a deformation of the car's bodywork due to an impact.",
  "When there are traces of corrosion or rust on the surface of the car, often caused by exposure to water or moisture.",
  "When the car's paint starts to peel, crack, or come off.",
  "When there is a visible crack on the surface of the car, usually caused by an impact or stress.",
  "When the car has marks, scratches, or minor imperfections on the bodywork surface.",
  "When the car shows signs of advanced rust or corrosion on the bodywork surface.",
  "When the surface of the car is slightly scratched, usually caused by contact with sharp or abrasive objects.",
  "When the surface of the car is dirty and dusty, usually caused by prolonged exposure to the elements or frequent use.",
  "When the car shows signs of general wear and tear, such as scratches, scrapes, dents, or dull and faded paint.",
];

const tiresList = [
  "Nickel",
  "Good condition",
  "Worn",
  "Cracked",
  "Deformed",
  "Inflation",
];
const tiresDesc = [
  "This means that the tires have never been used before and are in perfect condition.",
  "Tires in good working condition",
  "This means that the tires have been used for some time and their tread is worn. Worn tires may require replacement.",
  "This means that the surface of the tires has cracks, usually caused by exposure to UV rays and wear.",
  "This means that the tires are no longer perfectly round and may have bumps or waves on the tread surface.",
  "Indicates that the tire pressure may be insufficient, correct, or excessive.",
];

const transmissionList = [
  "Good",
  "Nickel",
  "Worn",
  "Damaged",
  "Defective",
  "Noisy",
  "Leaking",
  "Slipping",
];

const transmissionDesc = [
  "This means that the transmission is working correctly and has no major issues.",
  "Like new.",
  "This indicates that the transmission has been used for a long period of time and that some components need to be replaced or repaired.",
  "This suggests that the transmission has suffered physical damage, for example, because of an accident, and it requires significant repair or replacement.",
  "This means that the transmission is not functioning properly and requires repairs.",
  "This can indicate a transmission problem, such as a worn bearing or misaligned gears.",
  "This suggests that the transmission is losing oil, which may indicate a faulty seal or a transmission fluid leak.",
  "This may indicate that the transmission is struggling to change gears or maintain a consistent speed, which can be a sign of transmission issues.",
];

const insideList = [
  "Clean",
  "Spotless",
  "Well-maintained",
  "Light wear",
  "Moderate wear",
  "Significant wear",
  "Dirty",
  "Unpleasant odor",
  "Severe damage",
];

const insideDesc = [
  "This means that the interior of the car is cleaned and free from dirt, dust, or debris.",
  "pristine",
  "This suggests that the car has been regularly serviced and the interior is in good working condition.",
  "Some signs of use but overall clean and in good condition.",
  "More pronounced signs of wear, with stains, scratches, or minor tears.",
  "Obvious signs of prolonged use, with stains, tears, or more significant scratches.",
  "This means that the interior of the car has not been properly cleaned and may be covered in dirt or debris.",
  "This means that the interior of the car has an unpleasant smell, which may be caused by waste, mold, or persistent odors such as cigarette smoke.",
  "This suggests that the interior of the car has suffered damage, such as torn seats, broken door panels, or missing elements.",
];

const suspensionList = [
  "Nickel",
  "Good condition",
  "Worn",
  "Damaged",
  "Defective",
  "Unstable",
  "Noisy",
];

const suspensionDesc = [
  "New",
  "If the suspension system functions properly without excessive noises or vibrations, we can say that it is in good condition.",
  "If the car has traveled a lot of kilometers, it is possible that the suspension system is worn out and needs to be replaced or repaired.",
  "If the car has been involved in an accident, it is possible that the suspension system has been damaged and requires repair or replacement.",
  "If you notice excessive noises or vibrations coming from the suspension system, it may indicate a defect in the system.",
  "This suggests that the suspension system can cause instability in the car's driving, which can be dangerous.",
  "This indicates that the suspension system emits abnormal noises, which may indicate operational issues.",
];

const brakesList = [
  "Nickel",
  "Good condition",
  "Wear",
  "Noise",
  "Vibrations",
  "Leak (spongy)",
  "Slow pedal (slipping)",
  "Warning light",
];

const brakesDesc = [
  "New",
  "This indicates that the braking system is in good condition and functioning properly.",
  "This indicates that the brake pads or discs are worn and need to be replaced.",
  "This indicates that the brakes produce unusual noises when used, which may indicate issues.",
  "Vibrations during braking can indicate problems with the brake discs or brake pads.",
  "This indicates that there is a brake fluid leak somewhere in the system.",
  "If the brake pedal feels softer than usual, or if the car does not stop as quickly as it should, it may be a sign of a problem with the braking system.",
  "If the warning light illuminates on the dashboard.",
];

export {
  motorList,
  motorListDesc,
  outsideList,
  outsideDesc,
  tiresList,
  tiresDesc,
  transmissionList,
  transmissionDesc,
  insideList,
  insideDesc,
  suspensionList,
  suspensionDesc,
  brakesList,
  brakesDesc,
};
