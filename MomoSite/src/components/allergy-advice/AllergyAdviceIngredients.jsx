import React from "react";
import IngredientList from "./IngredientList";

const AllergyAdviceIngredients = () => {
  return (
    <div>
      {/* ingredient used section */}
      <div className="py-[64px] px-[156px] gap-[56px] flex flex-col items-center ">
        <img src="/images/Allergy-image1.png" alt="" />

        {/* ingredient entity 1 */}
        <div className="w-[744px] rounded-[16px] border-4 p-[56px] flex flex-col gap-8 border-[#0C6967] ">
          <h5 className="font-bold text-[25px] leading-[1.2]">For the Dough</h5>

          <div className="flex flex-col gap-2">
            <IngredientList text="120 gms refined flour" />
            <IngredientList text="1/4 tsp baking powder" />
            <IngredientList text="1/2 tsp salt water (for kneading)" />
          </div>
        </div>

        {/* ingredient entity 2 */}
        <div className="w-[744px] rounded-[16px] border-4 p-[56px] flex flex-col gap-8 border-[#0C6967] ">
          <h5 className="font-bold text-[25px] leading-[1.2]">
            For the Chicken Filling
          </h5>

          <div className="flex flex-col gap-2">
            <IngredientList text="1 cup chicken (minced)" />
            <IngredientList text="1/2 cup onions, finely chopped" />
            <IngredientList text="1/4 tbsp black pepper powder" />
            <IngredientList text="1 tbsp oil" />
            <IngredientList text="1/2 tsp garlic paste" />
            <IngredientList text="1/2 tsp soya sauce" />
            <IngredientList text="Salt" />
            <IngredientList text="1/4 tsp vinegar" />
          </div>
        </div>

        {/* ingredient entity 3 */}
        <div className="w-[744px] rounded-[16px] border-4 p-[56px] flex flex-col gap-8 border-[#0C6967] ">
          <h5 className="font-bold text-[25px] leading-[1.2]">
            For the Vegetarian Filling:
          </h5>

          <div className="flex flex-col gap-2">
            <IngredientList text="1 cup cabbage and carrots, grated" />
            <IngredientList text="2 tbsp onions, finely chopped" />
            <IngredientList text="1/2 tsp garlic, finely chopped" />
            <IngredientList text="1 tbsp oil" />
            <IngredientList text="1/4 tsp vinegar" />
            <IngredientList text="1/2 tsp soya sauce" />
            <IngredientList text="to taste salt" />
            <IngredientList text="to taste pepper" />
            <IngredientList text="1 tbsp conrflour" />
          </div>
        </div>

        {/* ingredient entity 4 */}
        <div className="w-[744px] rounded-[16px] border-4 p-[56px] flex flex-col gap-8 border-[#0C6967] ">
          <h5 className="font-bold text-[25px] leading-[1.2]">
            For Chilli Sauce
          </h5>

          <div className="flex flex-col gap-2">
            <IngredientList text="25 gram garlic, peeled" />
            <IngredientList text="6 gms whole red chillied" />
            <IngredientList text="3 tbsp vinegar" />
            <IngredientList text="1 tbsp oil" />
            <IngredientList text="to taste salt" />
            <IngredientList text="to taste sugar" />
          </div>
        </div>
      </div>
      {/* ingredient used section end*/}
    </div>
  );
};

export default AllergyAdviceIngredients;
