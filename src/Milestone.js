import React, { Component } from 'react';
import Step from './Step'
class Milestone extends Component {
  render() {
    return (
      <div className="milestones">
        <ul className="milestone">
          Read the book 'Elegant Javascript'
          <Step />
        </ul>
      </div>
    );
  }
}

export default Milestone;