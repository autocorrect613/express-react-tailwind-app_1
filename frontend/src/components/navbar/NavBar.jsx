import NavbarRow0 from "./row 0/NavbarRow0";
import NavbarRow1 from "./row 1/NavbarRow1";
import NavbarRow2 from "./row 2/NavbarRow2";
import InfoSnickerTop from "../utilities/InfoSnickerTop";

export default function NavBar() {
  return(
    <div className="bg-neutral-900 w-full">
      <InfoSnickerTop />
      <div className="flex flex-col w-full mx-auto border-b border-b-neutral-800">
        <NavbarRow0 />
        <NavbarRow1 />
        <NavbarRow2 />
      </div>
    </div>);
}