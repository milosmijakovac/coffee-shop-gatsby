import React, { Component } from 'react';
import Title from '../Globals/Title';
import Img from 'gatsby-image';

class Menu extends Component {
  constructor(props){
    super(props)
    console.log(props);
  }
  render() {
    return (
      <div>
        content from menu component
      </div>
    );
  }
}

export default Menu;