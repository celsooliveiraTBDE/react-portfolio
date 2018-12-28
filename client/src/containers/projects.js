import React, { Component } from 'react';
import {
    Card, CardText, CardLink, CardDeck,

} from 'reactstrap';
import Navbar from '../components/Navbar'
import MktNavbar from '../components/Navbar/MktNavBar'
import Carousel from '../components/Carousel/'

// add model so that projects are served and managed from the backend. 
const items = [
    {
        CardTitle: 'Street Art Finder',
        CardText: 'An interactive exploration of Instagrammable streetart in the City of Angels',
        CardImg: '../assets/project-images/streetart.png',
        CardLink: ['https://celsooliveiratbde.github.io/street-art-finder/', 'https://github.com/celsooliveiraTBDE/street-art-finder'],
        CardSubtitle: "Full Stack: Firebase Backend",
        TechIcon: "../assets/firebase.png"

    },
    {
        CardTitle: "DRNX CANVAS",
        CardSubtitle: 'Full Stack MVC: Node/Express.js ',
        CardText: 'A new marketplace for products, ideas and of course drinks, from some of the best bartenders in the world.',
        CardImg: '../assets/project-images/scrn-canvas.png',
        CardLink: ['https://blooming-springs-14649.herokuapp.com/', 'https://github.com/celsooliveiraTBDE/canvas-drnx'],
        TechIcon: "../assets/nodejs-512.png"

    },
    {
        CardTitle: 'AR Camera App',
        CardSubtitle: 'React.js + Node/Express.js ',
        CardText: 'A mobile-friendly prototype allowing users to get a taste of AR using only their phones',
        CardImg: '../assets/project-images/Astrolab.png',
        CardLink: ['https://mysterious-bastion-41115.herokuapp.com/', 'https://github.com/celsooliveiraTBDE/Astrolab-Web'],
        TechIcon: "../assets/logo.svg"

    }
];


class Portfolio extends Component {


    render() {
        const cards = items.map((item) => {
            return (
                <Card
                    className="column"
                    tag="div"
                    key={item.CardTitle}
                >
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={item.CardImg} alt={item.CardTitle} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={item.TechIcon} alt={item.CardTitle} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className='title is-4'>{item.CardTitle}</p>
                                <p className="subtitle is-6">{item.CardSubtitle}</p>
                            </div>
                        </div>

                        <CardText className="content">{item.CardText}</CardText>
                        <CardLink href={item.CardLink[0]}>Demo</CardLink>
                        <CardLink href={item.CardLink[1]}>GitHub</CardLink>
                        {/* <br /> */}
                        {/* <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                    </div>
                </Card>
            );
        });
        return (
            <div className='wrapper is-gapless is-fluid is-dark'>
                <MktNavbar></MktNavbar>
                <Navbar></Navbar>
                <div id='project-tile-image' className='hero bg is-danger is-large'>
                    <Carousel></Carousel>

                </div>
                <section className="hero is-danger py-1 my-0">
                    <div className="hero-body pt-1 mb-0 pb-0">
                        <div className='level-left is-full-width pb-2'><span className='level-item title is-size-2 has-text-white'> CURRENT PROJECTS</span></div>
                    </div>
                </section>
                <CardDeck className='section columns py-5 is-desktop has-background-white'>
                    {/* <div className='level-left is-full-width pb-4'><span className='level-item title is-size-2 has-text-white'>    CURRENT PROJECTS</span></div> */}
                    {cards}
                </CardDeck>

            </div>
        )
    }
}
export default Portfolio

