import React, { Component } from "react";
import ModalImage from "react-modal-image";
import "./layaout.css";
import FormComponentData from "./FormDataEntry/default";


class LayoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="body__container">
        <FormComponentData />
      </div>
    );
  }
}

export default LayoutPage;
