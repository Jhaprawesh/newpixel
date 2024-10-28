function LeftComponents(props) {
  return (
    <>
      <div className="grid gap-[24px]">
        <div className="md:flex justify-between">
          <h2 className="text-[22px] font-bold font-customFont">
            {props.subTitle}
          </h2>
          <span>{props.date}</span>
        </div>
        <p className="text-[16px] font-normal">{props.paraGraph}</p>
        <div className="flex justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <span>{props.userName}</span>
            <span>{props.comNt}</span>
          </div>
          <button className=" text-xs text-[#2196F3]">READ MORE</button>
        </div>
      </div>
    </>
  );
}

export default LeftComponents;
