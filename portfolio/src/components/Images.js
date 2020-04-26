import React, { Component } from 'react';

import { SRLWrapper } from "simple-react-lightbox";

export class Images extends Component {
    render() {
        return (
            <div className="image-body">
                <div class="intro">
                   <p>
                       Here are some of my drawings made from Adobe Illustrator.
                       They consist of doodles, infographics, poster boards, and
                       card designing. Click on an image to see it enlarged.
                       To close the pop-up, just click outside of the enlarged image.
                   </p>
               </div>
               <SRLWrapper>
                    <div className="gallery">
                        <div className="pic">
                            <img src= { process.env.PUBLIC_URL + "/banana.jpg"} alt = "banana"/>
                        </div>
                        <div className="pic">
                            <img src= { process.env.PUBLIC_URL + "/doggo.jpg"} alt = "dog"/>
                        </div>
                        <div className="pic">
                            <img src= { process.env.PUBLIC_URL + "/fire.jpg"} alt = "fire"/>
                        </div>
                        <div className="pic">
                            <img src= { process.env.PUBLIC_URL + "/laptop.jpg"} alt = "laptop"/>
                        </div>
                        <div className="pic">
                            <img src= { process.env.PUBLIC_URL + "/lollipop.jpg"} alt = "lollipop"/>
                        </div>
                        <div className="pic">
                            <img src= { process.env.PUBLIC_URL + "/trio.jpg"} alt = "trio"/>
                        </div>
                        <div className="pic">
                            <img src= { process.env.PUBLIC_URL + "/clipboard.jpg"} alt = "clipboard art"/>
                        </div>
                        <div className="pic">
                            <img src= { process.env.PUBLIC_URL + "/coffee.jpg"} alt = "coffee card"/>
                        </div>
                        <div className="pic">
                            <img src= { process.env.PUBLIC_URL + "/deltopia.jpg"} alt = "deltopia infographic"/>
                        </div>
                        <div className="pic">
                            <img src= { process.env.PUBLIC_URL + "/film.jpg"} alt = "film infographic"/>
                        </div>
                    </div>
                </SRLWrapper>
            </div>
        );
    }
}

export default Images;
