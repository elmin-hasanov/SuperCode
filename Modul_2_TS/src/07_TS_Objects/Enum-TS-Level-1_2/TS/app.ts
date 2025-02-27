enum PizzaSize {
    Small, // = 2
    Medium,
    Familie,
}

enum PizzaIngredients {
    Cheese,
    Onion,
    Salami,
    Tomato,
}

// Lege eine Typ Pizza mit den Eigenschaften size: PizzaSize und ingredients: PizzaIngredients[] an

type Pizza = {
    size: PizzaSize;
    ingredients: PizzaIngredients[];
};

// Lege 4 Pizza-Objekte mit verschiedenen Größen und Belägen an

const pizza1: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Onion],
};

const pizza2: Pizza = {
    size: PizzaSize.Medium,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Tomato],
};

const pizza3: Pizza = {
    size: PizzaSize.Familie,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami],
};

const pizza4: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Onion, PizzaIngredients.Tomato],
};

console.log("Pizza 1", pizza1, "Pizza 2", pizza2, "Pizza 3", pizza3, "Pizza 4", pizza4);