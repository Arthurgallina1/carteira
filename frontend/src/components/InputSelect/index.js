import React, { useRef, useEffect } from "react";
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from "react-select";
import { useField } from "@unform/core";
import "./styles.scss";

const Select = ({ name, label, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const colourStyles = {
    width: 90,
  };
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "state.value",
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }

          return ref.state.value.map((option) => option.value);
        } else {
          if (!ref.state.value) {
            return "";
          }

          return ref.state.value.value;
        }
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <div className="input-box">
      <label htmlFor={fieldName}>{label}</label>
      <ReactSelect
        defaultValue={defaultValue}
        className="react-select-container"
        classNamePrefix="react-select"
        ref={selectRef}
        placeholder="Digite o nome do ativo."
        isSearchable={true}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Select;
