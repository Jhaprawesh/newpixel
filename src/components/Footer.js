import Image from "next/image";
import logo from "../assets/PixelExperienceLogo_White 1.png";
import { CiSettings } from "react-icons/ci";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { TbBrandTelegram } from "react-icons/tb";

function Footer() {
  const generalLinks = [
    { text: "Home" },
    { text: "Devices" },
    { text: "News" },
    { text: "About" },
    { text: "Donate" },
  ];

  const iconLinks = [
    { text: "CI dashboard", icon: CiSettings },
    { text: "Statistics", icon: AiOutlineBarChart },
    { text: "Github", icon: FaGithub },
    { text: "Gerrit code review", icon: GoCodeReview },
    { text: "Telegram", icon: TbBrandTelegram },
  ];

  return (
    <>
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 md:px-auto py-16">
          <div className="">
            <Image src={logo} alt="Next.js logo" width={180} height={38} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-8">
            <div>
              <ul>
                {generalLinks.map((link, index) => (
                  <li key={index} className="flex items-center gap-2">
                    {link.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul>
                {iconLinks.map((link, index) => (
                  <li key={index} className="flex items-center gap-2">
                    {link.icon && <link.icon />}
                    {link.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-12 text-base">Project maintained by @jhaprawesh</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
