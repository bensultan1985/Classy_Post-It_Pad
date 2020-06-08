import React, { Component } from 'react'

export class DelButton extends Component {
    constructor(props) {
        super(props)
    }

    handleDel = (e) => {
        e.preventDefault()
        this.props.delNote(this.props.note)
      }

    render() {
        return (
            <div className="delbutton" onClick={this.handleDel}>
                delete note
            </div>
        )
    }
}

export default DelButton;