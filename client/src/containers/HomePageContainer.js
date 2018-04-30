import React from 'react';
import HomePage from '../components/HomePage';

export default class HomePageContainer extends React.Component {
    state = {
        filter: '',
        pageNumber: 0,
        itemsPerPage: 10,
    }

    onSearch = value => this.setState({
        filter: value,
        pageNumber: 0,
    })

    handlePageChange = ({ pageNumber, itemsPerPage }) => this.setState({
        pageNumber: pageNumber === 0 || itemsPerPage ? 0 : pageNumber || this.state.pageNumber,
        itemsPerPage: itemsPerPage || this.state.itemsPerPage,
    })

    render() {
        return <HomePage
            filter={this.state.filter}
            pageNumber={this.state.pageNumber}
            itemsPerPage={this.state.itemsPerPage}
            onSearch={this.onSearch}
            onPageChange={this.handlePageChange}
        />;
    }
}
