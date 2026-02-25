import React from 'react'

const OurServices = () => {
  return (
    <div>         
      <div className="flex flex-col items-center justify-center  bg-[#F7F9FC] gap-[16px]"> 
        <div className='bg-[#F7F9FC]'>
        <h3 className='font-bold text-[39px] flex items-center py-[80px] px-[156px]'> <span className='text-[#D95103] mr-2'>We Offer People</span> The Service They Want</h3>     
        </div>          
        
       
        <div className="w-full h-[720px] overflow-hidden">
          <img
            src="images/chef.png"
            alt="chef"
            className="w-full h-full object-cover"
          />
        </div>
        

        <div className='flex flex-col items-center gap-[40px] px-[156px]  py-[64px] '>
          <div className="flex gap-[24px] justify-center w-[1128px]">
          <img src="images/icon1.png" alt="" className='w-[365px] h-[290px] rounded-[16px] p-[10px]'/>
          <img src="images/icon2.png" alt="" className='w-[365px] h-[290px] rounded-[16px] p-[10px]'/>
          <img src="images/icon3.png" alt="" className='w-[365px] h-[290px] rounded-[16px] p-[10px]'/>
          </div>
          

          <button className='bg-[#0C6967] text-white px-10 py-5 w-[249px] h-[64px] rounded-[100px]  '>Explore Our Menu</button>       
          </div>
        </div>             
    
    </div>
  )
}

export default OurServices
