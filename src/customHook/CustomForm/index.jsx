import { useState } from "react";

export const useForm = (initialtate = {}) => {
  const [values, setValues] = useState(initialtate);

  const HandleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, HandleInputChange];
};
