const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

function Recipes() {
  const listRecipes = recipes.map((recipe) => (
    <div key={recipe.id} className="_recipe">
      <h2>{recipe.name.toUpperCase()}</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  ));
  return listRecipes;
}

export default function App() {
  return (
    <div className="app">
      <h1>RECIPES</h1>
      <Recipes />
    </div>
  );
}

// react
const rootNode = document.getElementById("reactRootNode");
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);
