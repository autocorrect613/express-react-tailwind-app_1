import NavItem from "./NavItem";
import NavSearchBar from "./NavSearchBar";
import ConfigData from "../../../config/NavbarConfig.json"
import NavDrawer from "../drawer/NavDrawer";
const _logoSrc = ConfigData["nav-bar"]["row-1"]["nav-items"]["img-src"]["btn-logo"];

export default function NavRow1Left() {
  return(
    <div className="flex items-center w-full gap-1">
      <div className="hidden md:flex">
        <NavDrawer />
      </div>
      <div className="hidden md:flex">
        <NavItem itemType="btnLogo" imgSrc={_logoSrc}/>
      </div>
      <NavSearchBar />
    </div>
  )
}