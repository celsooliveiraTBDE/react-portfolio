import React, { Component } from 'react';
import Card from "./Card"
class Portfolio extends Component {

    render() {
        return (
            <div class='section'>
                <div class="columns">
                    <div class="column">
                        <Card></Card>  </div>
                    <div class="column">
                        <Card></Card>
                    </div>
                    <div class="column">
                        <Card></Card>
                    </div>
                    <div class="column">
                        <Card></Card>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <Card></Card>
                    </div>
                    <div class="column">
                        <Card></Card>
                    </div>
                    <div class="column">
                        <Card></Card>
                    </div>
                    <div class="column">
                        <Card></Card>
                    </div>
                </div>
            </div>

        )
    }
}
export default Portfolio