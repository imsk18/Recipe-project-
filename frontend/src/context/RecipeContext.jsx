import React, { createContext, useState } from "react";

// capital letter use karo (best practice)
export const RecipeContext = createContext(null);


const RecipeContextProvider = ({ children }) => {
  const [Data, setData] = useState([]);
  console.log(Data);

  return (
    <RecipeContext.Provider value={{ Data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;