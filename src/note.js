import React from 'react';
import './App.css';
import DelButton from './delbutton'

class Note extends React.Component {
  constructor(props) {
    super(props)
  }

    render() {
      return (
      <div className="note">
        <textarea placeholder="type your note..."></textarea>
        <DelButton note={this.props.note} delNote={this.props.delNote}/>
      </div>
    );
  }
}

export default Note;
