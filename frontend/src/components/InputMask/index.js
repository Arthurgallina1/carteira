import React, { useRef, useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { useField } from "@unform/core";

export default function Mask({ name, inputMask }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [mask, setMask] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: "props.value",
      clearValue: (pickerRef) => {
        pickerRef.setInputValue(null);
      },
    });
  }, [fieldName, registerField]);

  function handleMask(e) {
    const { value } = e.target;
    return setMask(value);
  }

  return (
    <>
      <label htmlFor={fieldName}>preco</label>
      <InputMask
        name={fieldName}
        mask={inputMask}
        value={mask}
        onChange={(e) => handleMask(e)}
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}
