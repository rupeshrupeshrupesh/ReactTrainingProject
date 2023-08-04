import React, { useState } from "react";
import "./App.css";
import Action from "./Button/ActionButton";
import Employee from "./Employee/Employee";
import InputForm from "./Formik/InputForm";
import YupInput from "./Formik/YupInputForm";

function App() {

  const [isValid, setValid] = useState(false);

  function checkValid(value:boolean) {
    setValid(value);
  }
  
  return (
    <>
     {!isValid&& < InputForm onFlag={checkValid}/>}
      {isValid && <Employee></Employee>}

    </>
  );
}

export default App;
