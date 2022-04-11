import Note from "./Note";

const possibleRotations = ["rotate-0", "rotate-2", "rotate-3", "rotate-6", "-rotate-2", "-rotate-3", "-rotate-6"];

const INPUT_DATA = {
  TODO: [
    "dropdowns un nav-burgeris nedarbojas, jo jsxā neesmu pievienojis skriptus",
    "savienoties ar mongoDB",
    "izveidot pirmo db modeli, lai notestētu kā Heroku sadarbojas ar mongoDB",
    "pievienot jsx props navigācijā KATRAM ierakstam",
    "Izveidot drag-n-drop todo list, to savienojot DB, lai rūdis arī var likt piezīmes",
    "izveidot React stila routingu navigācijas joslai (express pagaidām būs tikai viens routs)",
    "Izveidot log failu datu bāzē, kur redzami apdeiti latviski" 
  ],
  DONE: [
    "izveidot TODO user interface ar lapiņām",
    "atjaunot source code linku",
    "izveidot jaunu projektu un pārmainīt mapju, failu struktūru priekš react",
    "pārveidot navigācijas EJS failu par komponentiem JSX failos",
    "react un express abi reizē būs palaisti zem viena porta - izdomāt, kā menedžēt /build direktoriju (reģistrēt tailwind pirms vai pēc build vai kā citādi)",
    "pārliecināties, vai un cik jaudīgi ir React routi salīdzinājumā ar express+ejs routiem"
  ],
  TRASH_BIN: []
}

export default function NoteBoard() {
  let NOTES = { TODO: [], DONE: [] };
  for (let i = 0; i < 2; i++) { // Object.keys(NOTES).length
    let noteType = INPUT_DATA[Object.keys(INPUT_DATA)[i]];
    let bgColorClass = i === 0 ? "bg-yellow-400" : "bg-sky-400";
    let scrollColorClass = i === 0 ? "scrollbar-thumb-yellow-500" : "scrollbar-thumb-sky-500";
    for (let j = 0; j < noteType.length; j++) {
      let setTailwindRotationClass = possibleRotations[Math.floor(Math.random() * 6)];
      NOTES[Object.keys(NOTES)[i]].push(<Note 
        id = {`Note_${i * Object.keys(NOTES).length + j}`}
        description = {noteType[j]}
        rotationClass = {setTailwindRotationClass}
        bgColorClass = {bgColorClass}
        scrollColorClass = {scrollColorClass}
        tailwindClassList = {""}
      />)
    }
  }
  let className = "flex flex-wrap justify-center px-0 sm:px-5 py-10";

  return(
    <div className="grid grid-flow-row auto-cols-fr bg-[rgba(30,30,30)] pt-5">
      <div>
        <div className="font-NOTES-FONT text-5xl text-white text-center">TODO:</div>
        <div className={className}>
          {NOTES.TODO}
        </div>
      </div>
      <div>
        <div className="font-NOTES-FONT text-5xl text-white text-center">DONE:</div>
        <div className={className}>
          {NOTES.DONE}
        </div>
      </div>
    </div>
  
);
}