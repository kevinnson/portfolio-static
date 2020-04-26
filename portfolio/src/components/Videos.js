import React, { Component } from 'react';

export class Videos extends Component {
    render() {
        return (
            <div className="video-body">
                <div class="intro">
                    <p>
                        Here are some of my favorite songs I want to share that can be
                        streamed from YouTube. I'm into alternative and indie music!
                    </p>
                </div>
                <div className="vid-gallery">
                    <iframe title="stupid la love song" width="560" height="315" src="https://www.youtube.com/embed/Z8BSy6WDIGo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <iframe title="anybody out there" width="560" height="315" src="https://www.youtube.com/embed/dy4DeXppRwc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <iframe title="pluto projector" width="560" height="315" src="https://www.youtube.com/embed/Pi9J4epTWGM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <iframe title="no 1 party anthem" width="560" height="315" src="https://www.youtube.com/embed/mGUjVbsYG6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <iframe title="easily" width="560" height="315" src="https://www.youtube.com/embed/XTKn5fTBGeQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <iframe title="carless" width="560" height="315" src="https://www.youtube.com/embed/nN27OgOem90" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <iframe title="years" width="560" height="315" src="https://www.youtube.com/embed/Ddz4KiNWzQI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </div>
            </div>
        );
    }
}

export default Videos;
