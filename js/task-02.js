const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsContainerEl = document.querySelector("#ingredients");

const ingredientsEL = ingredients.map((ingredient) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList.add("item");
  ingredientsItemEl.textContent = ingredient;

  return ingredientsItemEl;
});

console.log(ingredientsEL);

ingredientsContainerEl.append(...ingredientsEL);
