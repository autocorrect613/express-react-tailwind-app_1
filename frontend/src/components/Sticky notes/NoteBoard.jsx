import Note from "./Note";
import NoteLog from "./NoteLog.json"

const possibleRotations = ["rotate-0", "rotate-2", "rotate-3", "rotate-6", "-rotate-2", "-rotate-3", "-rotate-6"];
const visibleNotes      = NoteLog.activeNotes;
const noteDefaultStyle  = "flex flex-wrap justify-center px-0 sm:px-5 py-10";

export default function NoteBoard() {
  let NOTES = { TODO: [], DONE: [] };
  for (let i = 0; i < 2; i++) { // Object.keys(NOTES).length
    let noteType          = visibleNotes[Object.keys(visibleNotes)[i]];
    let bgColorClass      = i === 0 ? "bg-yellow-400" : "bg-sky-400";
    let scrollColorClass  = i === 0 ? "scrollbar-thumb-yellow-500" : "scrollbar-thumb-sky-500";
    for (let j = 0; j < noteType.length; j++) {
      let setTailwindRotationClass = possibleRotations[Math.floor(Math.random() * 6)];
      NOTES[Object.keys(NOTES)[i]].push(<Note 
        key               = {`Note_${i * Object.keys(NOTES).length + j}`}
        description       = {noteType[j]}
        rotationClass     = {setTailwindRotationClass}
        bgColorClass      = {bgColorClass}
        scrollColorClass  = {scrollColorClass}
        tailwindClassList = {""}
      />)
    }
  }

  return(
    <div className="grid grid-flow-row auto-cols-fr bg-[rgba(30,30,30)] pt-5">
      <div>
        <div className="font-NOTES-FONT text-5xl text-white text-center">TODO:</div>
        <div className={noteDefaultStyle}>
          {NOTES.TODO}
        </div>
      </div>
      <div>
        <div className="font-NOTES-FONT text-5xl text-white text-center">DONE:</div>
        <div className={noteDefaultStyle}>
          {NOTES.DONE}
        </div>
      </div>
    </div>
  );
}