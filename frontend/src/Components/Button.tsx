import React from "react";

interface ButtonProps{
    positionB: string; // class for the positions of these buttons
}
const Button: React.FC<ButtonProps> = ({ positionB }) => {
    const myFunction = () => {
      console.log("CLICKED");
    };
  
    return (
      <button className={positionB} onClick={myFunction}>
        <img src="/Images/nextbutton.png" alt="My image" />
      </button>
    );
  };
  


export default Button;