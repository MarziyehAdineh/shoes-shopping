import React, { Component } from 'react'
import Timer from './timer';
export default class Time extends Component {
  constructor (props){
    super(props);
    this.state={
      loaded:true
    }
  }
  render() {
    return (
      <div>
     <Timer/>
      </div>
    )
  }
}
