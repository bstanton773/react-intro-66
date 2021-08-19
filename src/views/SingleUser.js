import React, { Component } from 'react'

export default class SingleUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {}
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

    render() {
        const user = this.state.user
        return (
            <div className="card mt-5">
                <div className="card-header">
                    Account Information
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">ID: {user.id}</li>
                    <li className="list-group-item">Username: {user.username}</li>
                    <li className="list-group-item">Email: {user.email}</li>
                </ul>
            </div>
        )
    }
}
