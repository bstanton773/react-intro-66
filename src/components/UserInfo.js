import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class UserInfo extends Component {
    render() {
        // console.log(this.props.user);
        const user = this.props.user;
        return (
            <div className='col-12 col-sm-6 col-md-4'>
                <div className='card my-3'>
                    <h5 className='card-title text-center'>{user.username}</h5>
                    <div className='d-flex flex-row justify-content-center'>
                        <a href={`mailto:${user.email}`} className='btn btn-primary'>Email</a>
                        <Link to={`/users/${user.id}`} className='btn btn-secondary'>Account Info</Link>
                    </div>
                </div>
            </div>
        )
    }
}
