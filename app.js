var recipes = [{
  id: "greek-salad",
  name: "Greek Salad",
  ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"]
}, {
  id: "hawaiian-pizza",
  name: "Hawaiian Pizza",
  ingredients: ["pizza crust", "pizza sauce", "mozzarella", "ham", "pineapple"]
}, {
  id: "hummus",
  name: "Hummus",
  ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"]
}];

function Recipe(_ref) {
  var id = _ref.id,
      name = _ref.name,
      ingredients = _ref.ingredients;

  return React.createElement(
    "div",
    { className: "_recipe" },
    React.createElement(
      "h2",
      null,
      name.toUpperCase()
    ),
    React.createElement(
      "ul",
      null,
      ingredients.map(function (ingredient) {
        return React.createElement(
          "li",
          { key: ingredient },
          ingredient
        );
      })
    )
  );
}

function Recipes() {
  var listRecipes = recipes.map(function (recipe) {
    return React.createElement(Recipe, {
      key: recipe.id,
      id: recipe.id,
      name: recipe.name,
      ingredients: recipe.ingredients
    });
  });
  return listRecipes;
}

export default function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(
      "h1",
      null,
      "RECIPES"
    ),
    React.createElement(Recipes, null)
  );
}

// react
var rootNode = document.getElementById("reactRootNode");
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));