import React, { Component } from 'react'

export default class CreatePost extends Component {
    render() {
        return (
            <div>
                <h4>Create A Post</h4>
                <form>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='title'>Title</label>
                            <input type='text' className='form-control' name='title' placeholder='Title'></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='body'>Body</label>
                            <input type='text' className='form-control' name='body' placeholder='Body'></input>
                        </fieldset>
                    </div>
                </form>
            </div>
        )
    }
}
