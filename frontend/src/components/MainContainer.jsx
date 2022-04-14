import NoteBoard from "./Sticky notes/NoteBoard"

export default function MainContainer() {
  return(
    <div className="bg-[#141414]">
      <div className="max-w-7xl min-h-screen bg-neutral-900 mx-auto">
        <NoteBoard />
      </div>
    </div>
  )
}