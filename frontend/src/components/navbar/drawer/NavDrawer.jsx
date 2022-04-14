import { useState, useEffect } from "react";
import NavItem from "../row 1/NavItem";
import ConfigData from "../../../config/NavbarConfig.json"
import HeroIcons from "../../icons/Heroicons";

// set style
const outerConStyle = "absolute top-0 left-0 h-screen flex flex-col justify-between w-64 bg-neutral-800 z-10";
const innerConStyle = "flex flex-col gap-5";

// get innerText data from config file
const _btnText = ConfigData["nav-bar"]["row-1"]["nav-items"]["inner-text"];
const _topData = ConfigData["nav-bar"]["row-2"]["inner-text"];
const bottomDataPath = ConfigData["nav-bar"]["row-1"]["drop-horizontal"]["inner-text"];
const _bottomData = [bottomDataPath["dropdown-btn-left"], bottomDataPath["dropdown-btn-right"]];
const _logoSrc = ConfigData["nav-bar"]["row-1"]["nav-items"]["img-src"]["btn-logo"];

export default function NavDrawer() {
  
  const BackDrop = () => <div className={`overflow-hidden z-10 fixed top-0 left-0 bottom-0 right-0 cursor-default bg-black opacity-75`}></div>;

  const TopSection = () => 
    <div className="flex gap-1 p-4 bg-neutral-900 items-center">
      <HeroIcons iconName="x" width="w-8" height="h-8" fillColor="fill-white hover:fill-red-500 cursor-pointer" />
      <NavItem itemType="btnLogo" imgSrc={_logoSrc}/>
    </div>

  const MiddleSection = () =>
    <div className="p-4">
      <div className={`${innerConStyle} border-b border-b-neutral-700 pb-12`}>
        <MenuItemsList listData = {_topData} />
      </div>
      <div className={`${innerConStyle} pt-12`}>
        <MenuItemsList listData = {_bottomData}/>
      </div>
    </div>
  
  const BottomSection = () => 
    <div className="bg-neutral-900 p-4">
      <div className="flex text-white text-sm pb-4 break-normal">Start monetize your beats, instrumentals, and music services!</div>
      <div className="flex gap-4">
        <NavItem itemType="StartSelling"  text={_btnText["btn-start-selling"]} />
        <NavItem itemType="signIn"        text={_btnText["btn-sign-in"]} />
      </div>
    </div>
  

  function Menu() {
    return(
      <>
        <BackDrop />
        <div className={outerConStyle}>
          <div>
            <TopSection />
            <MiddleSection />
          </div>
          <BottomSection />
        </div>
      </>
    )
  }

  function MenuItemsList({listData}) {
    const navListItems  = [];
    for (let i = 0; i < listData.length; i++) {
      navListItems.push(
        <div 
          key={`navDrawerItem_${i}`}
          className="text-white hover:text-red-500 cursor-pointer">{listData[i]}
        </div>
      );
    }
    return navListItems;
  }

  const [open, setOpen] = useState(false);
  
  // prevent page from scrolling when navbar is open
  document.getElementById("root").style.height = open ? "100vh" : "auto";
  document.getElementById("root").style.overflow = open ? "hidden" : "auto";

  return(
    <div
      onClick={() => setOpen(!open)}
    >
      <NavItem itemType="navBurger" />
      {open && <Menu />}
    </div>  
  );









}