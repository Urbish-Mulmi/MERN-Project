import React from 'react'
// import ServiceHero from '../components/services/ServiceHero'

const Service = () => {
  return (
    <div>      
          <div>
       <div className="max-w-[1440px] mx-auto px-[156px] py-[56px] h-[85vh] flex justify-around  items-center gap-[58px]">
        <div className="flex flex-col gap-20 pb-10">
          <img src="/images/Service-text.png" alt="" className="w-[254px] " />

          <div className="flex flex-col w-[600px] gap-6">
            <p className="text-[#6B788E] font-light text-[24px]">
              KNOWING OUR CUSTOMERS NEEDS
            </p>
            <div>
              <p className="text-[#D95103] font-bold text-[31px] leading-[1.2]">
                We're more than just momos.
              </p>
              <p className="text-[#101828] font-bold text-[31px] leading-[1.2] ">
                We're a full-service dining experience.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/Service-image1.png"
            alt="About-image1"
            className="w-[494px] h-[494px] "
          />
        </div>
      </div>

      {/* services 2nd section */}
      <div  className=''>
        <div className='relative'>
        <img src="images/Service-image2.png" alt="" className='w-full h-[608px] object-cover'/>

        <div className='flex flex-col gap-2 absolute bottom-19 left-52'>
         <h2 className='font-bold text-[49px] leading-1.2 text-[#fFFFFF]'>Dine With Us</h2>
         <p className='font-normal text-[25px]  leading-1.2 text-[#fFFFFF]'>Enjoy our momos in the comfort of your own home with our delivery services</p> <br />
         <button className='w-[231px] bg-[#0C6967] rounded-full px-6 py-4 text-[#FFFFFF] font-medium text-4 '>Watch the video</button>
        </div>
        </div>
      </div>



      {/* services 3rd section carousels */}
      <div className='flex flex-col gap-30 py-20 px-[156px] items-center'>

        {/* row 1  */}
        <div className='flex  gap-30 w-[1128px]'>
          <div className='felx flex-col gap-10 w-[456px]'>
            <div className='flex flex-col gap-6'>
              <img src="/images/Service-image3.png" alt="confetti" className='w-[56px] h-[56px]' />                      
              <h4 className="font-bold text-[31px] leading-1.2">Private Party</h4>
              <p className="text-[16px] text-[#6B788E] font-normal leading-1.8">Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.</p>        
            </div>

            <div className='flex py-4 pl-6 pr-4  w-[456px] h-[152px] justify-between items-center  rounded-[12px]  shadow-[6px_6px_12px_0px_#00000020]'>
              <div className='flex flex-col'>
                <h5 className='text-[#0C6967] font-bold text-[25px] leading-1.2'>Scan the QR code</h5>
                <p className='leading-1.5 font-normal text-[14px] text-[#6B788E]'>You can also check about the service</p>
              </div>
              <img src="/images/QR.png" alt="" className=' w-[107px] h-[107px]' />
            </div>

          </div>

          <div className='w-[552px] h-[448px] bg-orange-400'></div>
        <div>
          
        </div>
        </div>


        {/* row 2  */}
        <div className='flex  gap-30 w-[1128px]  '>

          <div className='w-[552px] h-[448px] bg-orange-400'>

          </div>
              <div className='felx flex-col gap-10 w-[456px]'>
              <div className='flex flex-col gap-6'>
              <img src="/images/Service-image4.png" alt="chefhat" className='w-[56px] h-[56px]' />                      
              <h4 className="font-bold text-[31px] leading-1.2">Catering</h4>
              <p className="text-[16px] text-[#6B788E] font-normal leading-1.8">Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.</p>        
            </div>

            <div className='flex py-4 pl-6 pr-4  w-[456px] h-[152px] justify-between items-center  rounded-[12px]  shadow-[6px_6px_12px_0px_#00000020]'>
              <div className='flex flex-col'>
                <h5 className='text-[#0C6967] font-bold text-[25px] leading-1.2'>Scan the QR code</h5>
                <p className='leading-1.5 font-normal text-[14px] text-[#6B788E]'>You can also check about the service</p>
              </div>
              <img src="/images/QR.png" alt="" className=' w-[107px] h-[107px]' />
            </div>

          </div>
          <div>
          
        </div>
        </div>
      </div>
      {/* services 3rd section carousels ends*/}


        {/* service ko any querie section */}
      <div className='flex flex-col items-center justify-center  pb-20 px-[156px] gap-20 '>
        <div className='flex flex-col rounded-[24px] p-16 gap-10 items-center justify-center bg-[#F5F6F7] w-[1128px]'>
          <div className='flex flex-col gap-3 items-center'>
            <h4 className="font-bold text-[31px] leading-1.2 text-[#101828]">Got any Queries?</h4>
            <p className='text-[#6B788E] font-normal text-[18px] leading-1.8'>If you have any queries, send us a message. Our Friendly team would love to hear from you </p>
          </div>

          <button className='bg-[#0C6967] text-white px-[10] py-[5] rounded-full w-[216px] h-[60px] leading-1.2 font-medium text-[16px] '>Get In Touch</button>

        </div>

      </div>
    
    </div>

    </div>
  )
}

export default Service
