import React, { Component } from 'react'

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
            <div>
                This is the Post Page. 
                {this.state.posts.map((post) => <h4>{post.title}</h4>)}
            </div>
        )
    }
}
