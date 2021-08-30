import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">{this.props.myName}'s Page</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/users">Users</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/posts">Posts</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                {this.props.isLoggedIn ? (
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/" onClick={this.props.logOut}>Logout</Link>
                                        </li>
                                    ) : (
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                    )
                                }
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

