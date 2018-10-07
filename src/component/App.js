import React from "react";
import Drag from './Drag';
import "./App.css";

export default class App extends React.PureComponent {

  render() {
    return (
      <div className="component-app">
        <Drag />
      </div>
    );
  }
}
