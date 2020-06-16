import React from 'react';
import './App.css';
import DelButton from './delbutton'

class Note extends React.Component {
  constructor(props) {
    super(props)
  }

  updateSession = (e) => {
    e.preventDefault()
    console.log('updating note')
    localStorage.setItem([this.props.note], document.getElementById(this.props.note).value);
  }

    render() {
      return (
      <div className="note">
        <textarea id={this.props.note} placeholder="type your note..." defaultValue={this.props.text} message={this.props.message} onChange={this.updateSession}></textarea>
        <DelButton note={this.props.note} delNote={this.props.delNote}/>
      </div>
    );
  }
}

export default Note;
