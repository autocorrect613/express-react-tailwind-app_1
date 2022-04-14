import NavItem from "./NavItem";
import ConfigData from "../../../config/NavbarConfig.json"
import DropdownButton from "../../buttons/DropdownButton"
import HeroIcons from "../../icons/Heroicons";

const _ = ConfigData["nav-bar"]["row-1"]["search-bar"];

export default function NavSearchBar() {
  return(
    <form className     = "flex w-full max-w-full md:max-w-sm lg:max-w-md h-8 text-xs items-center rounded-full outline outline-1 outline-neutral-500 mx-2 bg-neutral-700">
      <NavItem itemType = "searchCircle" />
      <input 
        type        = "text" 
        placeholder = {_["inner-text"]["placeholder"]} 
        className   = "w-full outline-none bg-transparent text-white"
      />
      <DropdownButton 
        dropDownName    = "navDropdown"
        innerContent    = {_["inner-text"]["search-bar-dropdown-list"]} 
        iconRight       = {<HeroIcons iconName="chevronDown" width="w-4" height="h-4" fillColor="fill-neutral-400"/>}
        btnClass        = "hidden md:flex relative items-center justify-end text-xs text-neutral-400 bg-neutral-700 h-full rounded-r-full px-3 cursor-pointer whitespace-nowrap select-none"
        menuItemClass   = "hidden md:flex justify-between pr-8 pl-3 py-2 hover:text-white whitespace-nowrap select-none"
        menuClass       = "translate-y-9 absolute top-0 right-0 rounded-sm overflow-hidden shadow-sm shadow-neutral-800 z-10 select-none items-center text-xs text-neutral-400 bg-neutral-800"
        bgColorBackDrop = "bg-transparent"
        btnInnerText    = {_["inner-text"]["dropdown-btn"]}
      />
    </form>
  );
}