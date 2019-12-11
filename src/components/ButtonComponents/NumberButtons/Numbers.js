import React, {useState} from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

// import { numbers } from '../../../data'; 

//Import your array data to from the provided data file

  // STEP 2 - add the imported data to state
  
  
    
      // {/* STEP 3 - Use .map() to iterate over your array data and return a button
      //  component matching the name on the provided file. Pass
      //  it any props needed by the child component*/}
      
    const Numbers = ({ update }) => {
    const [numberState, setNumberState] = useState(numbers);

    const numberHandler = (number) => {
      if(number === "1"){
        console.log(number);
      }else{
        console.log(null);
      }
    }

    return(
      numberState.map((number, index) => <NumberButton key={index} number={number} index={index} update={() => update(number)}/>)

  )};

export default Numbers;
