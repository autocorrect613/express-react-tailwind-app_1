import NavItem from "./NavItem";
import ConfigData from "../../../config/NavbarConfig.json"
import HeroIcons from "../../icons/Heroicons";
import HorizontalDropdown from "../../buttons/HorizontalDropdown";

export default function NavRightSideRow1() {
  const _ = {
    btnsInnerText: ConfigData["nav-bar"]["row-1"]["nav-items"]["inner-text"],
    horizontalDropdwnData: ConfigData["nav-bar"]["row-1"]["drop-horizontal"]["inner-text"],
  }
  const horizontaldDropdowns = {
    btnClassList: `hidden relative lg:flex items-center content-center text-neutral-400 
    p-2 hover:text-neutral-500 rounded-full cursor-pointer whitespace-nowrap select-none text-sm`,
    h1ClassList: "text-white text-base font-bold",
    p1ClassList: "text-neutral-400 h-full"
  }

  return(
    <div className="hidden md:flex items-center gap-3">
      <HorizontalDropdown 
        dropDownName    = "navDropHorizontalLeft"
        dataType1       = {_.horizontalDropdwnData["dropdown-list-left"]}
        iconRight       = {<HeroIcons iconName="chevronDown" width="w-4" height="h-4" fillColor="fill-neutral-400"/>}
        btnClass        = {horizontaldDropdowns.btnClassList}
        bgColorBackDrop = "bg-transparent"
        btnInnerText    = {_.horizontalDropdwnData["dropdown-btn-left"]}
        h1ClassList     = {horizontaldDropdowns.h1ClassList}
        p1ClassList     = {horizontaldDropdowns.p1ClassList}
      />
      <HorizontalDropdown 
        dropDownName    = "navDropHorizontalRight"
        dataType2       = {_.horizontalDropdwnData["dropdown-list-right"]}
        iconRight       = {<HeroIcons iconName="chevronDown" width="w-4" height="h-4" fillColor="fill-neutral-400"/>}
        btnClass        = {horizontaldDropdowns.btnClassList}
        bgColorBackDrop = "bg-transparent"
        btnInnerText    = {_.horizontalDropdwnData["dropdown-btn-right"]}
        h1ClassList     = {horizontaldDropdowns.h1ClassList}
        p1ClassList     = {horizontaldDropdowns.p1ClassList}
      />
      <NavItem itemType = "signUp"        text={_.btnsInnerText["btn-sign-up"]}/>
      <NavItem itemType = "btnDivisor"/>
      <NavItem itemType = "signIn"        text={_.btnsInnerText["btn-sign-in"]}/>
      <NavItem itemType = "StartSelling"  text={_.btnsInnerText["btn-start-selling"]}/>
      <NavItem itemType = "shoppingCartChevron" />
    </div>
  );
}

