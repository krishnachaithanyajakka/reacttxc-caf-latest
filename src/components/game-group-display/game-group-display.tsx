import React from 'react';
import axios from 'axios';
import MainService from './../../services/main-service';
import './game-group-display.scss';



export default class GameGroupDisplay extends React.Component {
    private mainService: MainService;
    constructor(props) {
        super(props);
        this.mainService = new MainService();
    }

    getLobbyWithGameGroup = () => {
        this.mainService.getLobbyListWithGameGroups().then(data => {
            console.log("Lobby with Game Groups Data:", data);
        });
    }

    getGameGroupGames = () => {
        this.mainService.getGameGroupGames().then(data => {
            console.log("Lobby with Game Groups Data:", data);
        });
    }

    prepareGameGroupWithGames = () => {
        axios.all([
            this.mainService.getLobbyListWithGameGroups(),
            this.mainService.getGameGroupGames(),
            this.mainService.getGameGroupGames()
        ]).then(axios.spread((data1, data2, data3) => {
            console.log('Date created From API1: ', data1);
            console.log('Date created From API2', data2);
            console.log('Date created From API3', data3);
        }));
    }

    render() {
        return (<div className="game-group-container">
            <p>Game group Display component</p>
            <div>
                <div>Get Lobby with Game Group:</div>
                <button className="gg-btn" onClick={this.getLobbyWithGameGroup}>Get Lobby and Groups</button><br></br>
                <button className="gg-btn" onClick={this.getGameGroupGames}>Get GameGroup Games</button><br></br>
                <button className="gg-btn" onClick={this.prepareGameGroupWithGames}>Axios all for lobby Groups and Games</button>
            </div>
        </div>);
    }
}