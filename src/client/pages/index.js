import React, { Component } from 'react'

export default class Index extends Component {
  constructor (props) {
    super(props)
  }

  handlerClick (e) {
    alert('SSR')
  }

  render () {
    return <div onClick={this.handlerClick}>hello SSR</div>
  }
}