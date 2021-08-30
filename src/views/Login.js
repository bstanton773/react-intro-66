import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                This is the Login Page
                <form onSubmit={this.props.handleLogIn}>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='username'></label>
                            <input type='text' name='username' className='form-control' placeholder='Username'></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='password'></label>
                            <input type='password' name='password' className='form-control' placeholder='Password'></input>
                        </fieldset>
                        <input type='submit' className='btn btn-outline-warning mt-3' value='Log In'></input>
                    </div>
                </form>
            </div>
        )
    }
}
