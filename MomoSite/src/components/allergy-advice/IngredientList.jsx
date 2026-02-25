import React from 'react'

const IngredientList = ({text}) => {
  return (
    <div>
      <div className="flex gap-4 pt-2 pb-3 items-center shadow-xs ">
        <img src="/images/Orange-bullet.png" alt="" className="w-[12px] h-[12px]" />
        <p className="font-semibold text-[20px]">{text}</p>
      </div>
    </div>
  )
}






export default IngredientList
