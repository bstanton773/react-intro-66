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
        const token = localStorage.getItem('token');
        let myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + token)
        fetch('http://localhost:5000/api/users',{
            method: 'GET',
            headers: myHeaders
        })
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
                    {this.state.users.map((u, index) =><UserInfo user={u} key={index}/>)}
                </div>
            </div>
        )
    }
}
