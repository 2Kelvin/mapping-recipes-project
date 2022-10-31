const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"]
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
    ]
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"]
  }
];

function Recipe({ id, name, ingredients }) {
  return (
    <div className="_recipe">
      <h2>{name.toUpperCase()}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

function Recipes() {
  const listRecipes = recipes.map((recipe) =>
    <Recipe
      key={recipe.id}
      id={recipe.id}
      name={recipe.name}
      ingredients={recipe.ingredients}
    />
  );
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
