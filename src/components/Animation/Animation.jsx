import React, { Component } from 'react';
import { bind } from 'decko';
import cn from 'classnames';
import './Animation.css';

class Animation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ty_right: 0,
            ty_left: 0,
            ty_digital: 0,
            ty_white: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScrollTop)
    }

    componentWillUnMount() {
            window.removeEventListener('scroll', this.onScrollTop)
        }

    @bind
    onScrollTop(e) {
        let { ty_right, ty_left, ty_digital, ty_white } = this.state;
        // let wave_front = document.querySelector('.Wave_right');
        // let wave_back = document.querySelector('.Wave_left');

        let windowScroll = window.scrollY;
        this.setState({
            ty_right: Math.max(-windowScroll * 1.1, -400),
            ty_left: windowScroll * 0.5,
            ty_digital: windowScroll * 0,
            ty_white: -windowScroll * 0.1
        })
    }

    render() {
        const { ty_right, ty_left, ty_digital, ty_white } =  this.state;

        return <div  className='Animation'>
            <div className="Wave_left" style={{ transform: `translateY(${ty_left}px)` }}>
            </div>
            <div className="Wave_digital" style={{ transform: `translateY(${ty_digital}px)` }}>
                <div className="Digital-contnent">
                    <p>Digital-contnent</p>
                    <p>whitout water</p>
                </div>
            </div>
            <div className="Wave_right" style={{ transform: `translateY(${ty_right}px)` }}></div>
            <div className="Wave_white" style={{ transform: `translateY(${ty_white}px)` }}></div>
        </div>
    }
}

export default Animation;
