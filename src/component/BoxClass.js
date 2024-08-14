import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
        <div>
        <div className={`Box ${this.props.result}`}>
          <div className='Box_under'>
            <h1>{this.props.name}</h1>
            <img className='item-img' src={this.props.item && this.props.item.img} alt="" />
            <h2>{this.props.result}</h2>
          </div>
        </div>
      </div>
    )
  }
}
