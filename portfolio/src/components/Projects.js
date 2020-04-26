import React, { Component } from 'react';

export class Projects extends Component {
    render() {
        return (
            <div className="project-body">
                <div className="intro">
                    <p>
                        Here are a few projects I've done through my undergrad.
                        They were done in a group of 3-4 students as a class project
                        to present at the end of the quarter. Manuals and documentation
                        were written for the application as welll. Clicking on the
                        image will route to the GitHub repository.
                    </p>
                </div>
                <div className="project">
                    <div className="icon">
                        <a href="https://github.com/MatthewPontarolo/ThinkFast">
                            <img src= { process.env.PUBLIC_URL + "/thinkfast.png"} alt = "think fast"/>
                        </a>
                    </div>
                    <div className="description">
                        <h2>ThinkFast</h2>
                        <p>
                            ThinkFast is a collection of brain-games that are thrown
                            at increasing speeds, all while on a timer. As the player
                            completes puzzles, the timer is extended, but the
                            difficulty also increases. The application consists of
                            three minigames: CallOut, TouchMaze, and ShakeQ.
                            <br/> <br/>
                            CallOut presents a word with some letters blanked out,
                            so the player has to call out their guesses for what the
                            word is. A category is provided as a hint.
                            <br/> <br/>
                            TouchMaze creates a randomly generated maze where the
                            player has to complete it using the phone's touchscreen
                            interface without lifting their finger.
                            <br/> <br/>
                            ShakeQ presents a series of randomized math expressions
                            requiring the user to response to the criteria with the
                            correct math expression by shaking the device.
                        </p>
                    </div>
                </div>
                <div className="project">
                    <div className="icon">
                        <a href="https://github.com/MatthewPontarolo/SpeedChess">
                            <img src= { process.env.PUBLIC_URL + "/speedchess.png"} alt = "speed chess"/>
                        </a>
                    </div>
                    <div className="description">
                        <h2>SpeedChess</h2>
                        <p>
                            SpeedChess is a multiplayer game of chess, with some rules
                            changed to make the game fast-paced with players having to
                            utilize their predictive intuitions. Rather than
                            alternating turns, players take turns and choose moves
                            simultaneously, adding hidden information to the system
                            of chess and requiring players to think a couple steps
                            ahead to their opponents throughout the game.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
