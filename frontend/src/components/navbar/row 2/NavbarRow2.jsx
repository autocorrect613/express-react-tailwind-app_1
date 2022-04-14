
import ConfigData from "../../../config/NavbarConfig.json"

export default function NavbarRow2() { 
  const _ = ConfigData["nav-bar"]["row-2"];

  const wrapperClass  = "bg-neutral-800 hidden lg:block w-full";
  const listClass     = "flex max-w-7xl mx-auto justify-start gap-6 px-4";
  const listItemClass = "text-neutral-400 text-sm pt-4 pb-2 cursor-pointer border-b border-b-transparent hover:border-white hover:text-white translate-y-px";
  
  const navListItems  = [];
  for (let i = 0; i < _["inner-text"].length; i++) {
    navListItems.push(
      <div 
        key={`navListItem_${i}`}
        className={listItemClass}>{_["inner-text"][i]}
      </div>
    );
  }

  return(
    <div className={wrapperClass}>
      <div className={listClass}>{navListItems}</div>
    </div>)
}
