import { HfInference } from "@huggingface/inference";

// Initialize the Hugging Face Inference client
const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

export async function getRecipeFromMistral(ingredientsArr) {
  const apiToken = import.meta.env.VITE_HF_ACCESS_TOKEN;

  if (!apiToken) {
    console.error("Hugging Face API token is missing!");
    return "Error: Missing API token.";
  }

  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.textGeneration({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      inputs: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make! ${SYSTEM_PROMPT}`,
      parameters: {
        max_length: 512,
        temperature: 0.7,
      },
    });

    console.log("Hugging Face Response:", response);
    return response?.generated_text || "No recipe found.";
  } catch (err) {
    console.error("Error fetching recipe:", err.message || err);
    return "Error fetching recipe. Please try again.";
  }
}
