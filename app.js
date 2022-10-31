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

function Ingredient(_ref) {
  var ingredient = _ref.ingredient;

  return React.createElement(
    "li",
    null,
    ingredient
  );
}

function Recipe(_ref2) {
  var name = _ref2.name,
      ingredients = _ref2.ingredients;

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
        return React.createElement(Ingredient, {
          ingredient: ingredient,
          key: ingredient
        });
      })
    )
  );
}

function Recipes() {
  var listRecipes = recipes.map(function (recipe) {
    return React.createElement(Recipe, Object.assign({
      key: recipe.id
    }, recipe));
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

// react-connection
var rootNode = document.getElementById("reactRootNode");
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));