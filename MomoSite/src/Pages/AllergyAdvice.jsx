import React from "react";
import AllergyAdviceHero from "../components/allergy-advice/AllergyAdviceHero";
import AllergyAdviceIngredients from "../components/allergy-advice/AllergyAdviceIngredients";
import Advices from "../components/allergy-advice/Advices";

const AllergyAdvice = () => {
  return (
    <div>
     <AllergyAdviceHero/>
     <AllergyAdviceIngredients/>
     <Advices/>
    </div>
  );
};

export default AllergyAdvice;
