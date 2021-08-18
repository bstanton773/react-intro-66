import React, { Component } from 'react'
import PostDetail from '../components/PostDetail';

export default class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    posts: data.posts
                })
            })
            .catch(err => console.error(err))
    }



    render() {
        return (
            <ul className='list-group'>
                {this.state.posts.map((post) => <PostDetail post={post} />)}
            </ul>
        )
    }
}
