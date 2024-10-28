import Image from "next/image";
import MobileImage from "../assets/Frame.png";

function Contribute() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-4 md:px-auto justify-items-center items-center">
          <div className="md:mt-12 w-[184px] h-[206px] md:w-[369px] md:h-[413px] order-2 md:order-1">
            <Image src={MobileImage} alt="image" />
          </div>
          <div className="py-8 md:py-20 order-1 md:order-2">
            <h1 className="text-[40px] font-bold ">Contribute</h1>
            <p className="text-base mt-6">
              Do you like our project? Show your support by donating.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contribute;
