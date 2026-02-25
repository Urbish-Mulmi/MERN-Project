import React from "react";

const AboutUsIntro = () => {
  return (
    <div>
      {/* AboutusHero section */}
      <div className="max-w-[1440px] mx-auto pt-20 min-h-screen flex justify-around  items-center">
        <div className="flex flex-col gap-20">
          <img src="images/About-text.png" alt="" className="w-100" />

          <div className="flex flex-col w-[522px] gap-6">
            <p className="text-[#6B788E] font-light text-[20px]">
              WE PRIDE OURSELF ON
            </p>
            <div>
              <p className="text-[#D95103] font-bold text-[39px]">
                Our authentic momo recipes
              </p>
              <p className="text-[#101828] font-bold text-[39px]">
                passed down through <br /> generations
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/About-image1.png"
            alt="About-image1"
            className="w-[583px] h-[631px] "
          />
        </div>
      </div>

      {/* about 3rd section */}

      <div className="flex flex-col px-[156px] py-[144px] gap-[144px] ">
        {/* row1 */}
        <div className="flex gap-30 justify-around items relative">
          <div className="flex flex-col w-[456px] gap-4">
            <h3 className="text-[39px] font-bold">
              Our momos are{" "}
              <span className="text-[#D95103]"> made with love</span>
            </h3>
            <p className="text-[#6B788E] font-[400px]  text-[20px] leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>

          {/* chef image relative */}
          <div className="w-[555px] h-[448px] ">
            <img
              src="/images/About-image3.png"
              alt=""
              className=" rounded-[4px] relative z-0"
            />
          </div>

          {/* image positioning between left texts and right image */}

          <div className=" w-[264px] h-[191px] absolute -bottom-10 right-[40%] z-3">
            <img src="/images/About-image4.png" alt="" />
          </div>
        </div>
        {/* row1 end */}

        {/* row2 */}
        <div className="flex gap-30 justify-around items relative">
          {/* chef image relative */}
          <div className="w-[555px] h-[448px] ">
            <img
              src="/images/About-image5.png"
              alt=""
              className=" rounded-[4px] relative z-0"
            />
          </div>

          <div className="flex flex-col w-[456px] gap-4">
            <h3 className="text-[39px] font-bold">
              Taste the difference with{" "}
              <span className="text-[#D95103]"> our handcrafted momos</span>
            </h3>
            <p className="text-[#6B788E] font-[400px]  text-[20px] leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>

          {/* image positioning between left texts and right image */}

          <div className=" w-[263px] h-[170px] absolute -bottom-10 left-[40%] z-3">
            <img src="/images/About-image6.png" alt="" />
          </div>
        </div>
        {/* row2 end */}

        {/* row3 */}
        <div className="flex gap-30 justify-around items relative">
          <div className="flex flex-col w-[456px] gap-4">
            <h3 className="text-[39px] font-bold">
              Our momos are the perfect{" "}
              <span className="text-[#D95103]"> blend of tradition </span>and{" "}
              <span className="text-[#D95103]">innovation</span>
            </h3>
            <p className="text-[#6B788E] font-[400px]  text-[20px] leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>

          {/* chef image relative */}
          <div className="w-[552px] h-[448px] ">
            <img
              src="/images/About-image7.png"
              alt=""
              className=" rounded-[4px] relative z-0"
            />
          </div>

          {/* image positioning between left texts and right image */}

          <div className=" w-[360px] h-[238px] absolute -bottom-22 right-[35%] z-3">
            <img src="/images/About-image8.png" alt="" />
          </div>
        </div>
        {/* row3 end */}

        {/* quote */}
        <div className="w-[1440px] h-[640px] flex justify-around">
          <div className="relative w-[576px] h-[413px] flex flex-col items-center justify-center">
            {/* Blur background layer */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[26px] rounded-xl"></div>

            {/* Quote Image */}
            <img
              src="/images/About-image9.png"
              alt="quote"
              className="relative z-10 w-12 h-12"
            />
          </div>
          <div className="w-[512px] h-[640px]">
            <img src="images/About-image10.png" alt="" />
          </div>
        </div>
        {/* quote end*/}
      </div>

      {/* our team */}
      <div className="ourteam flex flex-col py-20 px-[156px] gap-10 items-center justify-center">

        <div className="flex flex-col gap-2 items-center">
          <h2 className="font-bold text-[49px]">Meet The <span className="text-[#D95103]"> Team</span></h2>

          <h5 className="font-bold text-[25px] text-[#0C6967]">Our talented team members who delivers only the best results</h5>
        </div>

        <div className="flex gap-6">
          <img src="/images/About-chef1.png" alt="" className="rounded-[4px] w-[360px] h-[512px]"/>
          <img src="/images/About-chef2.png" alt="" className="rounded-[4px] w-[360px] h-[512px]"/>
          <img src="/images/About-chef3.png" alt="" className="rounded-[4px] w-[360px] h-[512px]"/>
        </div>

        <div className="flex justify-between">

        </div>


      </div>
    </div>
  );
};

export default AboutUsIntro;
