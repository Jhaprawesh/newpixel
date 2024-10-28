import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function HeroSection() {
  return (
    <>
      <div className=" container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-32 mt-16 ">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
