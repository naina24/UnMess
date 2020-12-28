import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './todo1.css';

export default class TodoItem1 extends Component {
  render() {
    const { title } = this.props;
    return (
      <li className="list-items">
        <h5>{title}</h5>
        <button className="btn-info" >.. Eat .. </button>
      </li>
    );
  }
}
