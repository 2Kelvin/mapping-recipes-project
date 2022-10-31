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

function Ingredient({ ingredient }) {
  return <li >{ingredient}</li>;
}

function Recipe({ name, ingredients }) {
  return (
    <div className="_recipe">
      <h2>{name.toUpperCase()}</h2>
      <ul>
        {ingredients.map((ingredient) =>
          <Ingredient
            ingredient={ingredient}
            key={ingredient}
          />
        )}
      </ul>
    </div>
  );
}

function Recipes() {
  const listRecipes = recipes.map((recipe) =>
    <Recipe
      key={recipe.id}
      {...recipe}
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

// react-connection
const rootNode = document.getElementById("reactRootNode");
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);
