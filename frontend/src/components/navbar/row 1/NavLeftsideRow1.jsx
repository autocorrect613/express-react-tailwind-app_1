import NavItem from "./NavItem";
import NavSearchBar from "./NavSearchBar";
import ConfigData from "../NavbarConfig.json"
const _ = ConfigData["nav-bar"]["row-1"]["nav-items"];

export default function NavRow1Left() {
  return(
    <div className="flex items-center w-full gap-1">
      <div className="hidden md:flex">
        <NavItem itemType="navBurger" />
      </div>
      <div className="hidden md:flex">
        <NavItem itemType="btnLogo" imgSrc={_["img-src"]["btn-logo"]}/>
      </div>
      <NavSearchBar />
    </div>
  )
}