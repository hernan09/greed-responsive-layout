import React from "react";
import "./_default.css";
import { useState } from "react";
import { useForm } from "../../customHook/CustomForm/index";

const FormComponentData = () => {
  const [formState, HandleInputChange] = useForm({
    name: "",
    email: "",
  });
  const { name, email } = formState;

  const [bolean, setBolean] = useState(false);

  const sendData = (e) => {
    e.preventDefault()
    setBolean({
      ...bolean,
      bolean: true,
    });
  
    console.log(formState);
    fetch('http://localhost:4000/mailer',{body : JSON.stringify(formState?.[0]?.name),method:'POST'}).then(response => console.log(response))
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
