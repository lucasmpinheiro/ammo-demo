import React from 'react';
import HomePage from '../components/HomePage';

export default class HomePageContainer extends React.Component {
    state = {
        filter: '',
    }

    onSearch = value => this.setState({ filter: value })

    render() {
        return <HomePage onSearch={this.onSearch} filter={this.state.filter} />;
    }
}
