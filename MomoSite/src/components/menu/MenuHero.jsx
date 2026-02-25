import React from 'react'

const MenuHero = () => {
  return (
    <div className='w-[1440px] pt-30 py-10 px-[156px] flex flex-col gap-10 items-center '>
      <img src="/images/Menu-text.png" alt=""  className='w-[254px]'/>

      <div className='flex flex-col '>
        <h4 className='flex flex-col items-center  font-bold text-[31px] leading-[1.2]'> <p className='text-[#D95103]'>Our menu is more than just momos,</p>
        with a variety of dishes to cater to all tastes and preferences.</h4>
      </div>

      <div className="flex flex-col gap-[48px] p-[40px] rounded-[16px] w-[1128px] bg-[#fafafb] items-center">        
          <div className='flex flex-col items-center gap-[5px]'>
            <h5 className='text-[#0C6967] font-bold text-[25px] leading-[1.2]'>Scan the QR code</h5>
            <p className='leading-1.5 font-normal text-[20px] text-[#252D43] leading-[1.6]'>You can also check the allergy advices using your phone as well</p>
          </div>

          <div className="flex flex-col gap-[16px] w-[192px] ">
            <img src="/images/QR.png" alt="" className=' w-[192px] h-[192px] p-2 rounded-[12px] border-[8px]'  />                
            <img src="/images/ScanMe-text.png" alt="" />
          </div>
        </div>  

    </div>
  )
}

export default MenuHero
