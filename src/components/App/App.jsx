import React, { Component } from 'react';
import { bind } from 'decko';
import Animation from '../Animation/';
import MainPage from '../MainPage/';
import './App.css';
import cn from 'classnames';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        // window.addEventListener('scroll', this.onScrollTop)
    }

    componentWillUnmount() {

    }

    render() {

        return (
            <div className='App'>
                <Animation className='App__animation' />
                <MainPage />
                { false ? <SubPage className='App__subPage' />: ''}
        </div>
        )
    }
}

export default App;
