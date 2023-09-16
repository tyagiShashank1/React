"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const GetData = () => {
  const [names, setNames] = useState([]);
  //var temp = [];
  const clickHandler = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    setNames(res.data);

    // for (let i = 0; i < res.data.length; i++) {
    //   temp.push(res.data[i].name);
    // }
    // setNames(temp);
  };

  useEffect(() => {
    clickHandler();
  }, []);

  return (
    <button
      onClick={clickHandler}
      className="bg-green-600 text-white px-5 py-2 rounded font-bold mt-5 ml-5">
      Get Data
    </button>
  );
};
