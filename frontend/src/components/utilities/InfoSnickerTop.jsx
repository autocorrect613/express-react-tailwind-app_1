import HeroIcons from "../icons/Heroicons";
import { useState } from "react"


export default function InfoSnickerTop() {

  const [open, setOpen] = useState(true);

  const snickerBar = () => {
    return (
      <div className="w-full bg-black">
        <div className="flex justify-between max-w-7xl mx-auto px-5 py-2"> 
          <div className="flex whitespace-nowrap text-sm font-medium">
            <div className="text-white">Šīs lapas source kods pieejams</div>
            <a href="https://github.com/autocorrect613/express-react-tailwind-app_1" 
              className="text-neutral-400 hover:text-green-500 cursor-pointer">&nbsp;noklikšķinot šeit.
            </a>
          </div>
          <div className="flex gap-2">
            <div className="text-neutral-500 text-sm font-normal">&nbsp;Pēdējie atjauninājumi veikti 14.04.2022 14:20</div>
            <div onClick={() => setOpen(false)} >
              <HeroIcons iconName="x" width="w-5" height="h-5" fillColor="fill-white hover:fill-red-500 cursor-pointer" />
            </div>
          </div>

        </div>
      </div>  
    );
  }

  return (
  <>
    {open && snickerBar()}
  </>);
  
}