import { hamburger } from "../assets/icons";
import headerLogo from "../assets/images/header-logo.svg";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='padding-x py-8 z-10 w-full absolute' id="Nav">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike" />
        </a>
        <ul className="flex gap-20 text-lg leading-normal items-center text-slate-gray max-lg:hidden">
          {navLinks.map((menu, index) => (
            <li key={index}>
              <a href={menu.href}>{menu.label}</a>
            </li>
          ))}
        </ul>
        <div className="text-lg pt-1 font-semibold max-lg:hidden">
          <p>Sign In / Explore Now</p>
        </div>
        <div className="lg:hidden">
          <img src={hamburger} alt="Menu"
          height={25}
          width={25} />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
