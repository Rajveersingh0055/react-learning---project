import React from "react";
import ReactMarkdown from "react-markdown";

function ClaudeRecipe({ recipe }) {
  if (!recipe) {
    return (
      <section className="mt-8">
        <p className="text-gray-500">No recipe available. Please try again.</p>
      </section>
    );
  }

  return (     
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Generated Recipe</h2>
      <div className="markdown-body p-4 bg-white shadow-md rounded-md">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </div>
    </section>
  );
}

export default ClaudeRecipe;
