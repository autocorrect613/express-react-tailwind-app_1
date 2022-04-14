import HeroIcons from "../icons/Heroicons";
import { useState } from "react";

/**
 * 
 * @param {String} dropDownName will be used in "keys property". Can be any name except it can't be same as other dropdown name. For example: "dropdown_1".
 * @param {Array} dataType1 for *MenuItemType1* (h1, p): array of arrays 
 * with strings: title and description in each array item. 
 * For example: [["Tile", "Description"], ["Title2", "Description2"]] 
 * @param {Array} dataType2 for *MenuItemType2*: array of arrays, whith strings:
 * "svg icon element", "tailwind fillcolor of this element", "title", "description".
 * For example: [[<HeroIcon />, "fill-green-500", "title1", "description1"], [<HeroIcon />, "fill-red-500", "title2", "description2"]]
 * @param {String} iconRight svg icon, usually checron. Can be used from HeroIcons.jsx library. For example: <svg ...><svg>.
 * @param {String} btnClass tailwind classList for the *button*. For example: "flex bg-blue-400 text-white p-2".
 * @param {String} bgColorBackDrop background color which will be visible when user clicks on dropdown. If left empty, dropdown will not close after clicking elsewhere except on dropdown. Usually should be "bg-transparent".
 * @param {String} btnInnerText dropdown buttons innerText
 * @param {String} h1ClassList dropdown menu items title style formatting in tailwind. For example: "text-white"
 * @param {String} h1ClassList dropdown menu items description style formatting in tailwind. For example: "text-gray-500"
 * @returns 
 */

export default function HorizontalDropdown({
  dropDownName,
  dataType1, dataType2,
  iconRight,
  btnClass,
  bgColorBackDrop,
  btnInnerText,
  h1ClassList,
  pClassList,
}) {
  const innerContent = dataType1 ? dataType1 : dataType2;

  /**
   * 
   * @param {String} h1 Title of item. For example: "Title 1"
   * @param {String} p Description of item. For example: "description of item 1."
   * @param {String} iconName One of HeroIcons.jsx icon available names
   * @param {String} fillColor tailwind fillcolor of this item. For example "fill-green-500"
   * @returns one Horizontal dropdown menu item: with title and descriptuon
   */
  function MenuItem({h1, p, iconName, iconFillColor}) {
    let menuItem = dataType1 ? 
    <>
      <div className = {h1ClassList}>{h1}</div>
      <div className = {pClassList}>{p}</div>
    </> : 
    <>
      <div className="flex items-center content-start gap-1">
        {<HeroIcons iconName={iconName} width="w-7" height="h-7" fillColor={iconFillColor}/>}
        <div className = {h1ClassList}>{h1}</div>
      </div>
      <div className = {pClassList}>{p}</div>
    </>

    return (
      <div className="flex px-3 py-3 whitespace-normal h-28">
        <div className="flex flex-col w-56 p-3 rounded-sm hover:bg-neutral-700">
          {menuItem}
        </div>
      </div>
    );
  }
  /**
   * @returns horizozontal y-centered absolutely positioned dropdown menu below button
   */
  function Menu() {
    let menuItemsList = [];
    for (let i = 0; i < innerContent.length; i++) {
      menuItemsList.push(
        <MenuItem 
          key             = {`${dropDownName}_${i}`}
          h1              = {innerContent[i][0]}
          p               = {innerContent[i][1]}
          iconName        = {dataType2 && innerContent[i][2]}
          iconFillColor   = {dataType2 && innerContent[i][3]}
        />
      );
    }

    return(
      <div className={`flex left-1/2 -translate-x-1/2 translate-y-9 absolute top-0 
      rounded-sm overflow-hidden shadow-md shadow-neutral-900 z-10 select-none 
      items-center text-xs text-neutral-400 bg-neutral-800`}>
        {menuItemsList}
      </div>
    );
  }

  /**
   * Dropdown button, which, when clicked, opens Menu list. List closes
   * after user by clicking selects item from the opened list or if user
   * clicks somewhere else on screen
   */
  const [open, setOpen] = useState(false);
  /** Backdrop with fixed position is not working if parent has "transform" style propery, 
   * thats why we go this way not like in simple dropdown menu*/
  const backDropDiv = <div className={`fixed top-0 left-0 bottom-0 right-0 z-10 cursor-default ${bgColorBackDrop}`}></div>
  let output = open ? <>{bgColorBackDrop && backDropDiv}<Menu/></> : "";

  return(
    <div 
      className={btnClass}
      onClick={() => setOpen(!open)}
    >
      {btnInnerText}
      {iconRight}
      {output}
    </div>  
  );
}