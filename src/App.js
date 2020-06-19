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
    if (await localStorage.getItem('gotHelp') == 'true') {
      console.log(localStorage.gotHelp)
      document.getElementById('helpheader').style.display = 'none'
    } else {
      document.getElementById('helpheader').style.display = 'block';
    }
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
    let test = new Date().getTime()
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

  noHelp = () => {
    localStorage.setItem('gotHelp', 'true')
    document.getElementById('helpheader').style.display = 'none';
  }


    render() {
      console.log(this.state)
      return (
      <div className="App">
        <div id="helpheader">
          Bonjour, Ciao, Namaste, Ni Hau. This classy notepad is for the most elegant, articulate mavens upon polymaths. You have worldly problems to solve and grocery lists to write. Waste not your brain power on wondering if you've saved your notes. Every letter you enter is auto-saved, without fail. Write a note. Close your browser. Open it back up next week - hell - next year! Voila! Your cherished note will be here to greet you like an old friend.
          <button id="closehelpheader" onClick={this.noHelp}> got it </button>
        </div>
        <div id="header">Classy Post-It Pad</div>
        <Button makeNew={this.makeNew} noteObj={this.state}/>
        {Object.keys(this.state.notes).filter(element => element !== 'gotHelp').map(element => <Note key={element} note={element} text={this.state.notes[element]} message={element} delNote={this.delNote}/>).sort((a,b) => {
          return b.key - a.key
        })
      }
      </div>
    );
  }
}

export default App;
