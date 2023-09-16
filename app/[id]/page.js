"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const page = ({ params }) => {
  const { id } = params;
  const [users, setUsers] = useState({});
  const clickHandler = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    console.log(res.data);
    setUsers(res.data);
  };

  useEffect(() => {
    clickHandler();
  }, []);

  return <div>{JSON.stringify(users)}</div>;
};

export default page;
