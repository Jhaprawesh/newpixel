import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";

function CommenHead(props) {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between mb-[48px]">
        <h1 className="text-[40px] font-bold font-customFont">
          {props.heading}
        </h1>
        <button
          className="text-xs text-[#2196F3] flex items-center justify-center gap-2"
          type="button"
          onClick={() => router.push(props.routeType)}
        >
          {props.btn} <FaArrowRight />
        </button>
      </div>
    </>
  );
}

export default CommenHead;
