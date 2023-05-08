import React from "react";

const Button = ({ link, text }) => {
  return (
    <div>
      <a href={link} className="btn">{text}</a>
    </div>
  );
};

export default Button;
