import React, { Component } from 'react';

export class Home extends Component {
    render() {
        return (
            <div className="home-body">
                <div className="profile-pic">
                    <img src = { process.env.PUBLIC_URL + '/profile.jpg' } alt = "profile"/>
                </div>
                <div className="about">
                    <h3>About Me</h3>
                    <p>
                    Hello! My name is Kevin Son, and I am studying computer science
                    at the University of California, Santa Barbara. Besides
                    having an interest in software engineering and data analysis,
                    I also enjoy using a subset of Adobe Products to dabble in
                    photography, video editting, and graphic designing on my
                    free time.

                    <br/> <br/>

                    Currently, this website is under construction. To see some of
                    my graphic design skills, take a look at my Drawings page. For
                    software development, take a look at my Projects page or click
                    on my GitHub tab!
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
