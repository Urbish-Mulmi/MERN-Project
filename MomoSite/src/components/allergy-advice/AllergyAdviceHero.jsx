import React from "react";

const AllergyAdviceHero = () => {
  return (
    <div>
      {/* allergy advice hero */}
      <div>
        <div className="w-[1440px] mx-auto px-[156px] py-[56px] min-h-screen flex justify-around  items-center gap-[58px]">
          <div className="flex flex-col gap-20 pb-10">
            <img src="images/Allergy-text1.png" alt="" className="w-[300px] " />

            <div className="flex flex-col w-[600px] gap-6">
              <p className="text-[#6B788E] font-light text-[24px]">
                AT OUR RESTAURANT
              </p>
              <div>
                <p className="text-[#101828] font-bold text-[31px] leading-[1.4] ">
                  We use only the freshest and highest quality ingredients in
                  all our dishes,
                </p>

                <p className="text-[#D95103] font-bold text-[31px] leading-[1.4]">
                  and offer transparency in our ingredient labeling.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/Service-image1.png"
              alt="About-image1"
              className="w-[495px] h-[494px] "
            />
          </div>
        </div>
      </div>
      {/* allergy advice hero end*/}
    </div>
  );
};

export default AllergyAdviceHero;
