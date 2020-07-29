import React, { Component } from 'react'
import { addPost } from '../actions/postActions'
import { connect } from 'react-redux'

class NewPost extends Component {
    state = {
        title: '',
        content: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.addPost(this.state);
        this.props.history.push('/');

    }
    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value
        })
     }
    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h4 className="center">New Post</h4>
                    <h5>Title:</h5>
                    <input type="text" onChange={this.handleChange} id="title" />
                    <h5>Content:</h5>
                    <input type="text" onChange={this.handleChange} id="content" />
                    <button className="btn red lighten-1 z-depth-0">Add</button>                
                </form>
            </div>
        )
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addPost(post))
    }
}

export default connect(null, mapDispatchToProps)(NewPost)