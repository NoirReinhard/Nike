import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <div className="max-container">
      <div className="flex justify-around items-start gap-20 flex-wrap max-lg:flex-col">
        <div>
          <a href="#Nav">
            <img src={footerLogo} alt="Logo" className="h-[40px] w-[150px]" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <ul className="flex gap-[15px]">
            {socialMedia.map((item, index) => (
              <li key={index}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="bg-white rounded-full py-[10px] px-[10px] mt-[2rem] mb-[4rem]"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap max-md:mt-[-3rem]">
          {footerLinks.map((item, index) => (
            <div key={index}>
              <h1 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {item.title}
              </h1>
              <ul>
                {item.links.map((list, index) => (
                  <li
                    key={index}
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                  >
                    {list.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex text-white-400 text-md font-montserrat mt-[5rem] justify-between max-sm:flex-col">
        <div className="flex">
          <img src={copyrightSign} alt="" />
          <p className="ml-[5px]">Copyright. All rights reserved.</p>
        </div>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
