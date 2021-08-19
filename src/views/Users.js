import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import UserInfo from '../components/UserInfo';

export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/users')
            .then(r => r.json())
            .then(data => {
                // console.log(data);
                this.setState({
                    users: data.users
                })
            })
            .catch(err => console.error(err))
    }


    render() {
        return (
            <div>
                <Link to='/create-user' className='btn btn-success'>Create User</Link>
                <div className='row'>
                    {this.state.users.map((u, i) =><UserInfo user={u} key={i}/>)}
                </div>
            </div>
        )
    }
}
