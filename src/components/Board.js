import React, { Component } from 'react';
import '../css/Board.css';
import Note from './Note'

class Board extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                        <Note title="My First Book" body="The Very Hungry Catapillar" />
                        <Note title="My First Vacation" body="Costa Rica" />
                        <Note title="My First Movie" body="Lion King" />
                    </div>
                </div>
                <div>
                    <button className="btn btn-success add-button">Add</button>
                </div>
            </div>
        )
    }
}

export default Board;