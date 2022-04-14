import { useState } from "react"

/**
 * 
 * @param {String} dropDownName will be used in "keys property". Can be any name except it can't be same as other dropdown name. For example: "dropdown_1".
 * @param {Array}  innerContent Array of list items. Could be innerText, InnerHTML elements. Must be represented in array. For example: [<div>first</div>, <div>second</div>].
 * @param {String} btnClass tailwind classList for the *button*. For example: "flex bg-blue-400 text-white p-2".
 * @param {String} menuClass tailwind classList for the *menu*. For example: "flex bg-blue-400 text-white p-2".
 * @param {String} menuItemClass tailwind classList for each *menuItem*. For example: "flex bg-blue-400 text-white p-2".
 * @param {String} iconRight svg icon, usually checron. Can be used from HeroIcons.jsx library. For example: <svg ...><svg>.
 * @param {String} bgColorBackDrop background color which will be visible when user clicks on dropdown. If left empty, dropdown will not close after clicking elsewhere except on dropdown. Usually should be "bg-transparent".
 * @param {String} btnInnerText dropdown buttons innerText
 * @returns 
 */
export default function DropdownButton({
  dropDownName, 
  innerContent, 
  btnClass, 
  menuClass, 
  menuItemClass, 
  iconRight,
  bgColorBackDrop,
  btnInnerText }){

  /**
   * Each item from Menu list described in previous function
   * TODO: exted item with option to recursively use dropdowns in dropdowns
   */
  function MenuItem({innerText}) {
    return(
      <div className={menuItemClass}>
        {innerText}
      </div>);
  }

  /**
   * Menu list item container - it shows up after user clicks on button (this is not the button)
   */
  function Menu() {
    const backDropDiv = <div className={`fixed top-0 left-0 bottom-0 right-0 z-10 cursor-default ${bgColorBackDrop}`}></div>
    let menuItemsList = [];
    for (let i = 0; i < innerContent.length; i++) {
      menuItemsList.push(
        <MenuItem 
          key={`${dropDownName}_${i}`}
          innerText = {innerContent[i]}
        />
      );
    }

    return(
      <>
        {bgColorBackDrop && backDropDiv}
        <div className={menuClass}> {menuItemsList}</div>
      </>
    );
  }

  /**
   * Dropdown button, which, when clicked, opens Menu list. List closes
   * after user by clicking selects item from the opened list or if user
   * clicks somewhere else on screen
   */
  const [open, setOpen] = useState(false);
  return(
    <div 
      className={btnClass}
      onClick={() => setOpen(!open)}
    >
      {btnInnerText}
      {iconRight}
      {open && <Menu/>}
    </div>  
  );
}

