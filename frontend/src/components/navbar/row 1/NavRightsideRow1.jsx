import NavItem from "./NavItem";
import ConfigData from "../NavbarConfig.json"
import DropdownButton from "../../buttons/DropdownButton";
import HeroIcons from "../../icons/Heroicons";

export default function NavRightSideRow1() {
  const _ = {
    btnsInnerText: ConfigData["nav-bar"]["row-1"]["nav-items"]["inner-text"],
    horizontalDropdwnData: ConfigData["nav-bar"]["row-1"]["drop-horizontal"]["inner-text"],
  }
  const btnClassList = `hidden relative lg:flex items-center content-center text-neutral-400 
    p-2 hover:text-neutral-500 rounded-full cursor-pointer whitespace-nowrap select-none text-sm`;
  const menuClassList = `flex left-1/2 -translate-x-1/2 translate-y-9 absolute top-0 
    left-0 rounded-sm overflow-hidden shadow-md shadow-neutral-900 z-10 select-none 
    items-center text-xs text-neutral-400 bg-neutral-800`;
  
  return(
    <div className="hidden md:flex items-center gap-3">
      <DropdownButton 
        dropDownName    = "navDropHorizontalLeft"
        innerContent    = {horizontalDropMenuItems(_.horizontalDropdwnData["dropdown-list-left"])}
        iconRight       = {<HeroIcons iconName="chevronDown" width="w-4" height="h-4" fillColor="fill-neutral-400"/>}
        btnClass        = {btnClassList}
        menuClass       = {menuClassList}
        bgColorBackDrop = "transparent"
        btnInnerText    = {_.horizontalDropdwnData["dropdown-btn-left"]}
      />
      <DropdownButton 
        dropDownName    = "navDropHorizontalLeft"
        innerContent    = {horizontalDropMenuItems(_.horizontalDropdwnData["dropdown-list-right"])}
        iconRight       = {<HeroIcons iconName="chevronDown" width="w-4" height="h-4" fillColor="fill-neutral-400"/>}
        btnClass        = {btnClassList}
        menuClass       = {menuClassList}
        bgColorBackDrop = "transparent"
        btnInnerText    = {_.horizontalDropdwnData["dropdown-btn-right"]}
      />
      <NavItem itemType = "signUp"        text={_.btnsInnerText["btn-sign-up"]}/>
      <NavItem itemType = "btnDivisor"/>
      <NavItem itemType = "signIn"        text={_.btnsInnerText["btn-sign-in"]}/>
      <NavItem itemType = "StartSelling"  text={_.btnsInnerText["btn-start-selling"]}/>
      <NavItem itemType = "shoppingCartChevron" />
    </div>
  );
}

function horizontalDropMenuItems(sourceData) {
  console.log(sourceData);
  let menuItemsArr = [];
  for (let i = 0; i < sourceData.length; i++) {
    menuItemsArr.push(
      <div className="flex px-6 py-3 whitespace-normal h-28">
        <div className="flex flex-col w-56 p-3 rounded-sm hover:bg-neutral-700">
          <div className="flex items-center content-start gap-1">
            {sourceData[i][2] && <HeroIcons 
              iconName={sourceData[i][2]} width="w-7" height="h-7" fillColor={sourceData[i][3]}/>}
            <div className="text-white text-base font-bold">{sourceData[i][0]}</div>
          </div>
          <div className="text-neutral-400 h-full">{sourceData[i][1]}</div>
        </div>
      </div>
      );
  }
  return menuItemsArr;
}