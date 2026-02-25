import React from "react";
import SetAdvice from "./SetAdvice"

const Advices = () => {
  return (
    <div>
      {/* allergy advice section */}
      <div className="flex flex-col items-center py-[64px] px-[156px] gap-[56px]  ">
        <img src="/images/AllergyAdvice-text.png" alt="" />
        <div className="w-[1128px] text-[#000000]">
          <SetAdvice advice="Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna." />
          <SetAdvice advice="Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna." />
          <SetAdvice advice="Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna." />
          <SetAdvice advice="Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna." />
          <SetAdvice advice="Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna." />
        </div>
        

        <div className="flex flex-col gap-[48px] p-[40px] rounded-[16px] w-[1128px] bg-[#fafafb] items-center">
          <div className="flex flex-col items-center gap-[5px]">
            <h5 className="text-[#0C6967] font-bold text-[25px] leading-[1.2]">
              Scan the QR code
            </h5>
            <p className="leading-1.5 font-normal text-[20px] text-[#252D43] leading-[1.6]">
              You can also check the allergy advices using your phone as well
            </p>
          </div>

          <div className="flex flex-col gap-[16px] w-[192px] ">
            <img
              src="/images/QR.png"
              alt=""
              className=" w-[192px] h-[192px] p-2 rounded-[12px] border-[8px]"
            />
            <img src="/images/ScanMe-text.png" alt="" />
          </div>
        </div>
      </div>
      {/* allergy advice section end*/}
    </div>
  );
};

export default Advices;
