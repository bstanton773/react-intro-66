import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class SingleUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
            redirect: null
        }
    }

    componentDidMount(){
        const userId = this.props.match.params.id
        fetch(`http://localhost:5000/api/users/${userId}`)
            .then(r => r.json())
            .then(data => {
                console.log(data);
                this.setState({
                    user: data
                })
            })
            .catch(err => console.error(err))
    }

    deleteUser = () => {
        const user = this.state.user
        const token = localStorage.getItem('token');
        let myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + token)
        fetch(`http://localhost:5000/api/users/delete/${user.id}`, {
            method: 'DELETE',
            headers: myHeaders
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            this.setState({
                redirect: '/'
            })
        })
        .catch(error => console.error('error', error));
    }

    render() {
        const user = this.state.user
        return (
            this.state.redirect ? 
            <Redirect to={this.state.redirect} /> :
            <div className="card mt-5">
                <div className="card-header">
                    Account Information
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">ID: {user.id}</li>
                    <li className="list-group-item">Username: {user.username}</li>
                    <li className="list-group-item">Email: {user.email}</li>
                </ul>
                
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
                Delete User
                </button>

                
                <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Delete {user.username}?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure that you would like to delete the user {user.username}?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={this.deleteUser}>Delete that user please!</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
