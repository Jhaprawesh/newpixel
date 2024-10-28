import Image from "next/image";
import MobileImage from "../assets/image 1.png";

function AboutUs() {
  return (
    <>
      <div className="bg-[#EFF9FE] mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-4 md:px-auto justify-items-center md:justify-items-end items-center">
          <div className="py-8 md:py-20">
            <h1 className="text-[40px] font-bold ">About us</h1>
            <p className="text-base mt-6">
              Pixel Experience is an AOSP based ROM, with Google apps included
              and all Pixel goodies (launcher, wallpapers, icons, fonts,
              bootanimation).
            </p>
            <p className="text-base mt-6">
              Our mission is to offer the maximum possible stability and
              security, along with essential and useful features for the proper
              functioning of the device.
            </p>
            <h2 className="text-2xl font-bold mt-6">How can I download it?</h2>
            <p className="text-base mt-6">
              Just select your device on the menu or search for it using the
              search bar.
            </p>
          </div>
          <div className="md:mt-12 w-[184px] h-[206px] md:w-[369px] md:h-[413px]">
            <Image src={MobileImage} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
