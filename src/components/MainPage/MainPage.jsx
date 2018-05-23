import React, { Component } from "react";
import { bind } from "decko";
import "./MainPage.css";
import cn from "classnames";

import Visibility from '@material-ui/icons/Visibility';
import ChatBubble from '@material-ui/icons/ChatBubble';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import Label from '@material-ui/icons/Label';

const SOURCES = [
    {
        text:
            "Curabitur lobartis id lorem id bibendum ud it consectetur magna. Quisque volutpat",
        img:
            "./images/A.jpg"
    },
    {
        text:
            "Curabitur lobartis id lorem id bibendum ud it consectetur magna. Quisque volutpat",
        img:
            "./images/book.jpg"
    },
    {
        text:
            "Curabitur lobartis id lorem id bibendum ud it consectetur magna. Quisque volutpat",
        img:
            "./images/leave.jpg"
    },
    {
        text:
            "Curabitur lobartis id lorem id bibendum ud it consectetur magna. Quisque volutpat",
        img:
            "./images/8.jpg"
    },

    {
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        img:
            "./images/88.jpg"
    }
];

class MainPage extends Component {

    @bind
    renderCards(source, style) {
        const { text, img } = source;
        console.log(img)
        return <div className={[style]}>
            <div style={{backgroundImage: `url(${img})`}} className={`MainPage__media_${style}`}></div>
            <div className={`MainPage__content_${style}`}>
                <div className={`MainPage__text_${style}`}>
                    {text}
                </div>
                <div className={`MainPage__icons_${style}`}>
                    <a href='#' className='MainPage__stats'><Visibility style={{ fontSize: 15 }} /><div className='MainPage__margin'> 120</div></a>
                    <a href='#' className='MainPage__stats'><ChatBubble style={{ fontSize: 15 }} /><div className='MainPage__margin'>  22</div></a>
                    <a href='#' className='MainPage__stats'><ThumbUp style={{ fontSize: 15 }} /><div className='MainPage__margin'>  170</div></a>
                    <a href='#' className='MainPage__stats MainPage__stats_disabled'><ThumbDown style={{ fontSize: 15 }} /><div className='MainPage__margin'> 10</div></a>
                </div>
                <div className='MainPage__link'>
                    <a href='#' className='MainPage__stats'>
                        <Label style={{ fontSize: 15 }} />
                        <div className='MainPage__margin'>
                            Digital
                        </div>
                    </a>
                </div>
            </div>
        </div>
    }

    render() {

        return <div className="MainPage_cover">
            <div className="MainPage">
                <div className="MainPage__above">
                    {this.renderCards(SOURCES[0], "smallCard")}
                    {this.renderCards(SOURCES[1], "smallCard")}
                </div>
                <div className="MainPage__above">
                    {this.renderCards(SOURCES[2], "smallCard")}
                    {this.renderCards(SOURCES[3], "smallCard")}
                </div>
                <div className="MainPage__middle">
                    {this.renderCards(SOURCES[4], "bigCard")}
                </div>
                <div className="MainPage__beyond">
                    {this.renderCards(SOURCES[0], "smallCard")}
                    {this.renderCards(SOURCES[0], "smallCard")}
                </div>
                <div className="MainPage__beyond">
                    {this.renderCards(SOURCES[2], "smallCard")}
                    {this.renderCards(SOURCES[2], "smallCard")}
                </div>
            </div>
        </div>
    }
}

export default MainPage;
