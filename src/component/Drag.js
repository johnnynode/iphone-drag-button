import React from "react";
import DragService from '../services/Drag';
import './Drag.css';

export default class Drag extends React.PureComponent {

  render() {
    return (
      <span className="drag-me" ref="dragElem">
      </span>
    );
  }

  componentDidMount() {
    DragService.init(this.refs['dragElem']);
  }
}
