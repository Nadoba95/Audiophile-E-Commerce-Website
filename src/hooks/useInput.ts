import { useState } from "react";

type InputValidator = (value: string) => boolean;

const useInput = (validateValue: InputValidator) => {
  const [enteredValue, setEnteredValue] = useState("");

  const valueIsValid = validateValue(enteredValue);

  function valueChangedHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setEnteredValue(e.target.value);
  }

  function resetInput() {
    setEnteredValue("");
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    valueChangedHandler,
    resetInput,
  };
};

export default useInput;
