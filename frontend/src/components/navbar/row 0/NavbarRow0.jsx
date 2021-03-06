import NavItem from "../row 1/NavItem";
import ConfigData from "../../../config/NavbarConfig.json"
import NavDrawer from "../drawer/NavDrawer";

export default function NavbarRow0() {
  const _ = ConfigData["nav-bar"]["row-1"]["nav-items"];
  return(    
    <div className="flex justify-between md:hidden px-4 pt-3">
      <div className="flex items-center gap-2">
        <NavDrawer />
      <div className="flex md:hidden">
        <NavItem itemType="btnLogo" imgSrc={_["img-src"]["btn-logo"]}/>
      </div>
      </div>
      <div className="flex items-center">
        <NavItem itemType="signUp" text={_["inner-text"]["btn-sign-up"]}/>
        <NavItem itemType="shoppingCart" />
      </div>
    </div>
  );
}