import React from "react";
import "./_default.css";
import { useState } from "react";
import { useForm } from "../../customHook/CustomForm/index";

const FormComponentData = () => {
  const [formState, HandleInputChange] = useForm({
    name: "",
    email: "",
    pasword: "",
  });
  const { name, email, pasword } = formState;

  const [bolean, setBolean] = useState(false);

  const sendData = (e) => {
    e.preventDefault()
    setBolean({
      ...bolean,
      bolean: true,
    });
    console.log(formState);
  };

  return (
    <div className="form_container">
      <form onSubmit={sendData}>
      <div className="row g-3">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Country"
            name="name"
            value={name}
            onChange={HandleInputChange}
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="email"
            aria-label="Sigla"
            name="email"
            value={email}
            onChange={HandleInputChange}
          />
        </div>
        <button
        style={{width:300,margin:'auto',marginTop:10}}
          className="btn btn-warning"
          onClick={sendData}
          type="submit"
        >
          SEND
        </button>
      </div>
      <div className="content_data">
      </div>
      </form>
    </div>
  );
};

export default FormComponentData;
