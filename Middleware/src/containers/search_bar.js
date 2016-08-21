import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'term': ''
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                 placeholder="Search a city"
                 className="form-control"
                 value={this.state.term}
                 onChange={event => {this.setState({'term': event.target.value})}}
                />
                <span className="input-group-btn">
                    <buttton type="submit" className="btn btn-secondary">Search</buttton>
                </span>
            </form>
        );
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);