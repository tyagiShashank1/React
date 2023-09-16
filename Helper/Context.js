"use client";
import React, { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();

const Context = ({ children }) => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  return (
    <div>
      <MyContext.Provider value={{ value1, value2, setValue1, setValue2 }}>
        {children}
      </MyContext.Provider>
    </div>
  );
};

export default Context;
