import React from 'react'

const OurRecipes = () => {
  return (
    <div>
      <div className='flex flex-col  gap-[48px] items-center py-[64px] px-[156px]'>
        <div className='flex flex-col items-center gap-[16px]'>
          <h3 className=' text-[39px] font-bold'>Our <span className='text-[#D95103]'>Most Popular</span> Recipes </h3>
          <p>Browse through a varieties of recipes with fresh ingredients selected only from the best places</p>
        </div>

        <div className='flex justify-center  p-4 gap-6'>

          <button className='w-[133px] h-[56px] border-2 rounded-full text-[20px] font-semibold'>
            Buff
           </button>

          <button className='w-[133px] h-[56px] border-2 rounded-full text-[20px] font-semibold'>
            Chicken
           </button>

          <button className='w-[133px] h-[56px] border-2 rounded-full text-[20px] font-semibold'>
            Veg
           </button> 

        </div>
        
        
        <div className='flex gap-10 justify-center'>
          <img src="images/dish1.png" alt="" className='w-[288px] h-[288px]'/>
          <img src="images/dish2.png" alt="" className='w-[288px] h-[288px]'/>
          <img src="images/dish3.png" alt="" className='w-[288px] h-[288px]'/>
        </div>
        
        <button className='bg-[#0C6967] text-white px-10 py-5 w-[249px] h-[64px] rounded-[100px] flex justify-center'>Explore Our Menu</button>
        
        
      </div>
    </div>
    
  )
}

export default OurRecipes
