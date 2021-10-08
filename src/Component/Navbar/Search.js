import React, { useState } from "react";
import { useHistory } from "react-router";

export function Search() {
  const [state, setState] = useState();
  const history = useHistory();

  const submitHandler = (e) => {
  
    e.target.reset();
    e.preventDefault();

    history.push("/?q=" + state);
  };

  return (
    <div>
      <form onSubmit={submitHandler} class="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) =>{
        
            setState(e.target.value)
          } 
        }
        />
        <button className="btn btn-outline-success" type="submit">
          جستجو
        </button>
      </form>
    </div>
  );
}
