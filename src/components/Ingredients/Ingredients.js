import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const Ingredients = () => {
  const [userIngredients, setuserIngredients] = useState([]);
  const addIngredientHandler = (ingredient) => {
    fetch('https://react-hooks-update-f9fef-default-rtdb.firebaseio.com/ingredients.json', {
      method: "POST",
      body: JSON.stringify({ ingredient }),
      headers: { "Content-Type": 'application/json' },
    }).then((response) => {
      return response.json();
    }).then(  setuserIngredients((prevIngredients) => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredient },
    ]))
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredients={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
};

export default Ingredients;
