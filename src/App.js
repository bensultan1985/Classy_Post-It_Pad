import React from 'react';
import './App.css';
import Button from './button'
import { v4 as uuid } from 'uuid';
import Note from './note';


class App extends React.Component {
  constructor(props) {
    super(props)

    
  this.state = {
    count: 0,
    notes: {}
  }


  this.makeNew = this.makeNew.bind(this);
  this.delNote = this.delNote.bind(this);
}

  componentWillMount() {
    console.log(this.state)
  }

  makeNew = () => {
    let newCount = this.state.count + 1
    this.setState({count: newCount})
    let test = uuid()
    this.setState({notes: {...this.state.notes,
      [test]: ''}})

  }

  delNote = (noteKey) => {
    let test = Object.keys(this.state.notes).filter(note => note !== noteKey)
    let newArray = []
    test.forEach(element => {
      newArray.push({[element]: ''})})

    let newObj = {}
      newArray.forEach(element => {
        newObj[element] = ''
      })

      //deletes the note
    this.setState({...delete this.state.notes[noteKey]})
  }


    render() {
      return (
      <div className="App">
        <div id="header">Classy Post-It Pad</div>
        <Button makeNew={this.makeNew} noteObj={this.state}/>
        {Object.keys(this.state.notes).map(element => <Note key={element} note={element} delNote={this.delNote}/>)}
      </div>
    );
  }
}

export default App;
