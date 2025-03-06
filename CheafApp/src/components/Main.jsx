import React from 'react'
import CluadeRecipe from './CluadeRecipe'
import { useState } from 'react'
import { getRecipeFromMistral } from './ai'

function Main() {
  const [ingredient,setIngredient] = useState([])
    const list = ingredient.map((item)=>{
      return <li key={item}>{item}</li>
    })
    const  [recipe, setRecipeShow] = useState(false)


   async function getRecipe() {
     const recipeMarkdown = await getRecipeFromMistral(ingredient);
     setRecipeShow(recipeMarkdown);
   }
  /**f
   * Handles form submission by retrieving the new ingredient from the form data.
   * Adds the new ingredient to the existing list of ingredients.
   * @param {FormData} formData - The form data object containing the new ingredient.
   */
     function handleSubmit(formData){
     const newIngredient = formData.get("Ingredient")
         setIngredient(previngredient=>[...previngredient,newIngredient])}
  return (
    <main className="p-8 pt-4]">
      <form
        action={handleSubmit}
        className=" add-ingredient-form flex justify-center gap-3 h-10 mb-8 "
      >
        <input
          className="flex-grow min-w-[150px] max-w-[400px] rounded-md border border-gray-300 p-2 shadow-sm "
          type="text"
          placeholder="E.g. Oregano"
          aria-label="Add ingredient"
          name="Ingredient"
        />
        <button className="rounded-md border-none bg-[#141413] text-[#FAFAF8] w-36 text-sm font-medium">
          + Add ingredient
        </button>
      </form>
      {list.length > 0 && (
        <section>
          <h2 className="text-lg font-medium leading-6">Ingredient on hand:</h2>
          <ul
            className="ingrdients-list md-12 list-disc text-[#475467] leading-7"
            aria-live="polite"
          >
            {list}
          </ul>
          {list.length > 3 && (
            <div className="mt-8 get-recipe-container flex justify-between items-center rounded-lg bg-[#F0EFEB] p-4">
              <h3 className="text-lg font-medium leading-6">
                Ready for a recipe?
              </h3>
              <p className="text-sm text-gray-500 leading-5">
                Genrate a recipe from your list od ingredients
              </p>
              <button
                onClick={getRecipe}
                className="rounded-md border-none bg-[#D17557] shadow-sm text-[#FAFAF8] px-4 py-2 text-sm cursor-pointer"
              >
                Generate recipe
              </button>
            </div>
          )}
        </section>
      )}
      {recipe && <CluadeRecipe recipe={recipe}/>}
    </main>
  );
}

export default Main
//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