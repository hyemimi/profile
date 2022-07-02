import React from "react";
import { useDispatch } from "react-redux";
import { create } from "./my_reducer";
import { Link } from "react-router-dom";

function Create() {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/my_profile">
        <button
          onClick={() => {
            dispatch(create({ name: "이혜미", age: 22, height: 162 }));
          }}
        >
          {" "}
          CREATE
        </button>
      </Link>
    </div>
  );
}

export default Create;
