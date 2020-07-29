import React, { Component } from 'react'
import Pokeball from '../pokeball.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
  render(){
    const { posts } = this.props;
    //console.log(posts)
    const postList = posts.length ? (posts.map( post => {
      return (
        <div className="post card" key={post.id}>
          <img src={Pokeball} alt="A pokeball" />
          <div className="card-content">
            <Link to={'/' + post.id}>
              <span>{post.title}</span>
            </Link>
            <p>{post.content}</p>
          </div>
        </div>
      )
    })) : (
      <div className="center">
        No post yet.
      </div>
    );
    return(
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)