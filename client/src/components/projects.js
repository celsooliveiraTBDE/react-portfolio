import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink, CardDeck,
    CardTitle, CardSubtitle
} from 'reactstrap';
const items = [
    {
        CardTitle: 'Street Art Finder',
        CardText: 'An interactive exploration of Instragrammable streetart in the City of Angels',
        CardImg: '../assets/ORG_DSC03400.JPG',
        CardLink: ['Demo', 'Github'],
        CardSubtitle: "Full Stack: Firebase Backend"

    },
    {
        CardTitle: "DRNX CANVAS",
        CardSubtitle: 'Full Stack MVC: Node/Express.js ',
        CardText: 'An interactive exploration of Instragrammable streetart in the City of Angels',

        CardImg: '../assets/ORG_DSC03400.JPG',
        CardLink: ['Demo', 'Github']
    },
    {
        CardTitle: 'AR Camera App',
        CardSubtitle: 'React.js + Node/Express.js ',
        CardText: 'AA mobile-friendly prototype which allows users to get a taste of AR using only their phones',
        CardImg: '../assets/ORG_DSC03400.JPG',
        CardLink: ['Demo', 'Github']
    }
];


class Portfolio extends Component {


    render() {
        const cards = items.map((item) => {
            return (
                <Card
                    className="card"
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
                                    <img src="../assets/logo.svg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className='title is-4'>{item.CardTitle}</p>
                                <p className="subtitle is-6">{item.CardSubtitle}</p>
                            </div>
                        </div>

                            <CardText className="content">{item.CardText}</CardText>
                            <CardLink href="#">{item.CardLink[0]}</CardLink>
                            <CardLink href="#">{item.CardLink[1]}</CardLink>
                            <br />
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                      
                    </div>
                </Card>
            );
        });
        return (
            <CardDeck className='section level has-background-white'>
                <div className='level-left is-full-width pb-4'><span className='level-item title is-size-2 has-text-white'>    CURRENT PROJECTS</span></div>

                {cards}
            </CardDeck>

        )
    }
}
export default Portfolio

