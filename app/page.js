"use client";
import React, { useContext } from "react";
import { GetData } from "@/Components/Getdata";
import { useState, useEffect } from "react";
import { MyContext } from "@/Helper/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const { value1, value2, setValue1, setValue2 } = useContext(MyContext);

  const notify = () => {
    toast.success("Login Successful !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  //   const [names, setNames] = useState([]);
  //   let renderNames = <h2>No Name Available</h2>;

  //   if (names.length != 0) {
  //     renderNames = names.map((item, index) => {
  //       return (
  //         <h2 className="bg-black-300 text-white text-center font-bold">
  //           {index + 1} {item}
  //         </h2>
  //       );
  //     });
  //   }

  //   useEffect(() => {
  //     clickHandler();
  //   }, []);

  //   }

  //   return (
  //     <>
  //       {/* <a href="/Contact">Welcome</a> {/*one way of routing*/}
  //       <GetData />
  //       <div className="bg-slate-100 mt-5 p-8">
  //         <ul className="list-none hover:list-disc">
  //           {names.map((e, i) => {
  //             return (
  //               <li key={i}>
  //                 {e.email} <a href={`/${e.id}`}>Explore</a> {/*Dynamic routing*/}
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </div>
  //     </>
  //   );
  // };

  const [tower, setTower] = useState(0);
  const [message, setMessage] = useState("");

  // Your magical friend (useEffect)
  useEffect(() => {
    // This is what your friend will do when they see a change in the tower.
    console.log("Tower changed! It's now", tower);
    setMessage(`Tower changed! It's now" ${tower}`);

    // You can also clean up after your friend if you want.
    return () => {
      console.log("Cleaning up! Goodbye, magical friend!");
    };
  }, [tower]); // You tell your friend to watch the tower.

  // Adding a block to the tower
  const addBlock = () => {
    setTower(tower + 1);
    setValue1(value1 + 1);
  };

  // Removing a block from the tower
  const removeBlock = () => {
    setTower(tower - 1);
    setValue1(value1 - 1);
  };

  return (
    <>
      <div>
        <h2>My Tower of Blocks</h2>
        <h2>Second commit</h2>
        <h3>Third commit</h3>
        <p>
          Height: {tower} {value1}
        </p>
        <button onClick={addBlock}>Add Block</button>
        <button onClick={removeBlock}>Remove Block</button>
      </div>

      <h2>{message}</h2>

      <button onClick={notify}>Login</button>
      <ToastContainer />
    </>
  );
};

export default page;
