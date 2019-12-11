import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = ({update, reset}) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  const specialHandler = button => {
    if(button ==='C'){
      reset();
    }else{
      update(button);
    }
  }
  return (

      // {/* STEP 3 - Use .map() to iterate over your array data and return a button
      //  component matching the name on the provided file. Pass
      //  it any props needed by the child component*/}
       specialState.map((special, index) => <SpecialButton key={index} special={special} index={index} update={() => specialHandler(special)}/>)
       

  );
};
export default Specials;
