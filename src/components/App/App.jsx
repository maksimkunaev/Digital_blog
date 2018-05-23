import React, { Component } from 'react';
import { bind } from 'decko';
import Animation from '../Animation/';
import MainPage from '../MainPage/';
import './App.css';
import cn from 'classnames';

import SubPage from '../SubPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSubpage: false
        };
    }

    @bind
    onMoreClick() {
        this.setState({ showSubpage: true });
        wond
    }

    render() {
        const { showSubpage } = this.state;

        return (
            <div className='App'>
                <Animation className='App__animation' />
                <MainPage />
                <div className="App__more" onClick={this.onMoreClick}>Показать больше</div>
                {showSubpage && <SubPage />}
            </div>
        )
    }
}

export default App;
