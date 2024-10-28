"use client";
import photo from "../assets/5t-black 1.png";
import Image from "next/image";
import { useState } from "react";
import CommenHead from "./Common/CommenHead";
import Link from "next/link";

const mobiledata = [
  { id: "1", Name: "OnePlus 5T", Thumb: photo },
  { id: "2", Name: "OnePlus 5T", Thumb: photo },
  { id: "3", Name: "OnePlus 5T", Thumb: photo },
  { id: "4", Name: "OnePlus 5T", Thumb: photo },
  { id: "5", Name: "OnePlus 5T", Thumb: photo },
  { id: "6", Name: "OnePlus 5T", Thumb: photo },
  { id: "7", Name: "OnePlus 5T", Thumb: photo },
  { id: "8", Name: "OnePlus 5T", Thumb: photo },
];

function RightSection() {
  const [mobile] = useState(mobiledata);

  return (
    <>
      <div className="order-1 md:order-2">
        <CommenHead heading="Mobiles" btn="View All" routeType="Devices" />

        <div className="grid grid-flow-col auto-cols-max md:grid-flow-row md:grid-cols-3 gap-6 overflow-auto">
          {mobile.map((data, index) => (
            <Link
              href={{
                pathname: `/Devices/${data.id}`,
              }}
            >
              <div>
                <div key={index} className="bg-[#F9F9F9] px-6 text-center ">
                  <Image
                    src={data.Thumb}
                    alt={data.Name}
                    width={133}
                    height={133}
                  />
                  <span>{data.Name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default RightSection;
