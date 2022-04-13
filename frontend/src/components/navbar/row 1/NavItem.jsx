import HeroIcons from "../../icons/Heroicons";

/**
 * These Buttons are only used in NAV-BAR and nowhere else!
 * @param {String} itemType Mandatory: must be one of these keywords: "btnTransparent", "btnLogo", "btnDropdown". 
 * @param {String} text Optional: innerText value
 * @param {String} imgSrc Only for btnLogo btnTyle: url source link for the image, for example: "https://www.beatstars.com/assets/img/bs-logos/logo-red.svg"
 * @returns NavItem component (button)
 */
 export default function NavItem({itemType, text, imgSrc}) {
  const textDefaultClasses = "cursor-pointer whitespace-nowrap select-none text-sm";
  const availableBtns = {
    signUp:       <div className={`text-neutral-400 p-2 hover:text-neutral-500 rounded-full ${textDefaultClasses}`}>{text}</div>,
    signIn:       <div className={`text-neutral-400 p-2 ml-2 hover:text-neutral-500 rounded-full ${textDefaultClasses}`}>{text}</div>,
    StartSelling: <div className={`text-white px-3 p-2 bg-blue-600 hover:bg-blue-500 rounded ${textDefaultClasses}`}>{text}</div>,
    btnLogo:      <div className={`w-8 h-6 ${textDefaultClasses}`}><img className="w-full h-full" src={imgSrc} alt="" /></div>,
    btnDivisor:   <div className="hidden md:flex font-light text-neutral-400 select-none">|</div>,
    searchCircle: <button type="submit" className="pl-2 pr-1">
                    <HeroIcons iconName="searchCircle" width="w-5" height="h-5" fillColor="fill-neutral-400" />
                  </button>,
    shoppingCart: <div className="flex justify-center items-center hover:bg-neutral-700 rounded-full px-2 h-full cursor-pointer">
      <HeroIcons iconName="shoppingCart" width="w-7" height="h-7" fillColor="fill-neutral-400" />
    </div>,
    shoppingCartChevron: <div className="flex items-center hover:bg-neutral-700 rounded-full pl-2 py-1 cursor-pointer">
                    <HeroIcons iconName="shoppingCart" width="w-7" height="h-7" fillColor="fill-neutral-400" />
                    <HeroIcons iconName="chevronDown" width="w-6" height="h-6" fillColor="fill-neutral-400" />
                  </div>,
    navBurger:    <div type="submit" className="px-1 cursor-pointer">
                    <HeroIcons iconName="navBurger" width="w-8" height="h-8" fillColor="fill-neutral-400"/>
                  </div>
  }
  return availableBtns[itemType];
}