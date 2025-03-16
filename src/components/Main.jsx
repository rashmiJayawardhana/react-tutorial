import React from "react"; // Importing React

// Defining constants
const sname = "RJayawardhana"; // Static name variable
const position = "SE"; // Static position variable

// Defining an object with predefined values
const myObj = {
  sname: `${sname}`,
  position: `${position}`,
  city: "Panadura",
};

// The `Main` functional component receiving `props`
function Main(props) { 
  console.log(props); // Logging props to the console for debugging

  // Object destructuring (if needed)
  // const { city, position } = myObj;

  return (
    <div>
      <p>hi</p>
      
      {/* `props.children` will render any nested children inside <Main> */}
      <p>{props.children}</p>

      {/* Displaying various values */}
      {sname} {/* Static variable */}
      {myObj.sname} {/* Object property */}
      {myObj.position} {/* Object property */}
      
      {/* Displaying props received from App.jsx */}
      {props.name} 
      {props.city} 
      {props.position}
    </div>
  );
}

export default Main;
