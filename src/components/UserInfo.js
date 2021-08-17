import React, { Component } from 'react'

export default class UserInfo extends Component {
    render() {
        console.log(this.props.user);
        const user = this.props.user;
        return (
            <div className='col-12 col-sm-6 col-md-4'>
                <div className='card my-3'>
                    <h5 className='card-title text-center'>{user.username}</h5>
                    <a href={`mailto:${user.email}`} className='btn btn-primary mx-5'>Email</a>
                </div>
            </div>
        )
    }
}
