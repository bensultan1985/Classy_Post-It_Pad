import React from 'react';

class Button extends React.Component {

    handleClick = (e) => {
      e.preventDefault();
      this.props.makeNew()

    }
        render() {
      return (
      <div className="button-css" onClick={this.handleClick}>
        click to add note
      </div>
    );
  }
}

export default Button;
