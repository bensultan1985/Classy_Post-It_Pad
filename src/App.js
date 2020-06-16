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

  async componentWillMount () {
    console.log('running')
    console.log(this.state)
    if (await localStorage) {
      let allLocalStorage = Object.keys(localStorage)
      allLocalStorage.forEach(element => {
        this.setState({
          notes: {
            ...this.state.notes,
            [element]: localStorage.getItem(element)
        }
        })
      })
        // console.log(localStorage.getItem(allLocalStorage[element]))

    console.log(this.state.notes)
    }
  }


  //why does this not work??

  // componentWillMount() {
  //   console.log(this.state)
  //   if (localStorage) {
  //     let allLocalStorage = Object.keys(localStorage)
  //     allLocalStorage.forEach(element => {
  //       // console.log(localStorage.getItem(allLocalStorage[element]))
  //       this.setState({
  //         notes: {
  //           ...this.state.notes,
  //         [element]: localStorage.getItem(element)
  //       }
  //       })
  //     })
  //   console.log(this.state.notes)
  //   }
  // }

  makeNew = () => {
    let newCount = this.state.count + 1
    this.setState({count: newCount})
    let test = uuid()
    localStorage.setItem([test], '')
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
    localStorage.removeItem(noteKey);
  }


    render() {
      console.log(this.state)
      return (
      <div className="App">
        <div id="header">Classy Post-It Pad</div>
        <Button makeNew={this.makeNew} noteObj={this.state}/>
        {Object.keys(this.state.notes).map(element => <Note key={element} note={element} text={this.state.notes[element]} message={element} delNote={this.delNote}/>)}
      </div>
    );
  }
}

export default App;
