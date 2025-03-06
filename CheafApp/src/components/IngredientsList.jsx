import React from "react";

function IngredientsList(props) {
  // Properly mapping ingredients to list items
   const list = props.ingredient.map((item)=>{
        return <li key={item}>{item}</li>
      })
  return (
    <section>
      <h2 className="text-lg font-medium leading-6">Ingredients on hand:</h2>
      <ul
        className="ingredients-list md-12 list-disc text-[#475467] leading-7"
        aria-live="polite"
      >
        {list}
      </ul>

      {props.ingredient.length > 3 && (
        <div className="mt-8 get-recipe-container flex justify-between items-center rounded-lg bg-[#F0EFEB] p-4">
          <div>
            <h3 className="text-lg font-medium leading-6">
              Ready for a recipe?
            </h3>
            <p className="text-sm text-gray-500 leading-5">
              Generate a recipe from your list of ingredients
            </p>
          </div>
          <button
            onClick={props.toggleRecipeShow}
            className="rounded-md bg-[#D17557] shadow-sm text-[#FAFAF8] px-4 py-2 text-sm cursor-pointer"
          >
            Generate Recipe
          </button>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;
