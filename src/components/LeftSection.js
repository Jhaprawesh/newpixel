import CommenHead from "./Common/CommenHead";
import LeftComponents from "./LeftComponents";

function LeftSection() {
  return (
    <>
      <div className="order-2 md:order-1">
        <CommenHead heading="Recent Posts" btn="View All" routeType="/news" />
        <div className="grid gap-12">
          <LeftComponents
            subTitle="January Review: Delta updates"
            date="January 9, 2020"
            paraGraph="We’re presenting PixelExperince Builds with Jan Security Patch for all of our supported devices. We have started issuing deltas along with your official builds since its prime time! Check out the size that each delta update offers, and boast of them at your other rom friends."
            userName="baalajimaestro"
            comNt="25 Comments"
          />
          <LeftComponents
            subTitle="January Review: Delta updates"
            date="January 9, 2020"
            paraGraph="We’re presenting PixelExperince Builds with Jan Security Patch for all of our supported devices. We have started issuing deltas along with your official builds since its prime time! Check out the size that each delta update offers, and boast of them at your other rom friends."
            userName="baalajimaestro"
            comNt="25 Comments"
          />

          <LeftComponents
            subTitle="January Review: Delta updates"
            date="January 9, 2020"
            paraGraph="We’re presenting PixelExperince Builds with Jan Security Patch for all of our supported devices. We have started issuing deltas along with your official builds since its prime time! Check out the size that each delta update offers, and boast of them at your other rom friends."
            userName="baalajimaestro"
            comNt="25 Comments"
          />
        </div>
      </div>
    </>
  );
}

export default LeftSection;
