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

function Recipes() {
  var listRecipes = recipes.map(function (recipe) {
    return React.createElement(
      "div",
      { key: recipe.id, className: "_recipe" },
      React.createElement(
        "h2",
        null,
        recipe.name.toUpperCase()
      ),
      React.createElement(
        "ul",
        null,
        recipe.ingredients.map(function (ingredient) {
          return React.createElement(
            "li",
            { key: ingredient },
            ingredient
          );
        })
      )
    );
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