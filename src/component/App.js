import React from "react";
import Drag from './Drug';
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component-app">
        <Drag />
      </div>
    );
  }
}
