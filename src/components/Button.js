import React from "react";



const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}  type="button" className="btn btn-primary ml-4 mt-4 " style={{
        backgroundColor: props.color,
        border: "none",
      }}>
        {props.title}
      </button>
    </div>
  );
};

export default Button;
