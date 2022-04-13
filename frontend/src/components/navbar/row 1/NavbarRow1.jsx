import NavLeftsideRow1 from "./NavLeftsideRow1"
import NavRightSideRow1 from "./NavRightsideRow1";
/**
 * There was too much going on seperatly on both row sides (left and right),
 * so I split them into different components
 */
export default function NavbarRow1() {
  return (
    <div className="flex w-full max-w-7xl mx-auto justify-between py-2 md:py-4 px-2 bg-neutral-900">
      <NavLeftsideRow1 />
      <NavRightSideRow1 />
    </div>
  );
}