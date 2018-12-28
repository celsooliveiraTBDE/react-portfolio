import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchPosts } from '../../actions';
import _ from "lodash";

import MktNavbar from '../Navbar/MktNavBar'
import Navbar from "../Navbar";
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer'


class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" >
                    <Link to={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div className='wrapper is-gapless is-fluid is-dark'>

                <MktNavbar></MktNavbar>

                <section className="columns is-gapless">
                    <div className="column is-one-fifth">
                        <div id='my-sidebar-on-mobile' className='hero is-dark is-fullheight'>
                            <Navbar />

                            <Sidebar />
                        </div>
                    </div>

                    <div className="column is-four-fifths">

                        <div>
                            <h3>Postts</h3>
                            <ul className="list-group">
                                {this.renderPosts()}
                            </ul>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);