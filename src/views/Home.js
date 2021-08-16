import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Welcome {this.props.myName}</h1>
                <button className='btn btn-primary' onClick={this.props.updateName}>Update Name</button>
            </div>
        )
    }
}
