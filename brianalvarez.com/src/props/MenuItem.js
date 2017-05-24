import React from 'react'
import "./MenuItem.css"

class MenuItem extends React.Component {
  render() {
    return (
      <div className="menuItem">
        {this.props.children}
      </div>
    );
  }
}

export default MenuItem;