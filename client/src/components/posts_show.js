import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions';
import {Link} from 'react-router-dom';
class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params; // lists the wildcard tokens inside URL
        this.props.getPost(id);
    }
    onDeleteClick(){
        const {id} = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
    render() {
        //  posts[this.props.match.params.id];  the post we want to show
        const { post } = this.props;
if(!post){
    return <div>Loading...</div>
}
        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button
                className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}>
                Delete Post</button>
                <h3>  {post.title}</h3>
                {/* <h4>{post.categories}</h4>
                <p>{post.content}</p> */}
            </div>
        );
    }
}
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { getPost, deletePost })(PostsShow); 