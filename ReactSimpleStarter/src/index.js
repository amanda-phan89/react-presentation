import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/search_bar';
import WeatherList from './components/weather_list';

const API_KEY = '8d133b2e54571caf2b86a2b71fba5a52';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

// Create component. It will render html
class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            'city': '',
            'weather': []
        }
		//this.onSearchBarChange = this.onSearchBarChange.bind(this);
    }
    cityWeatherSearch(city) {
        const url = `${ROOT_URL}&q=${city}`;
        const self = this;
        axios.get(url)
        .then((response) => {
            self.setState({
                weather: [response.data, ...self.state.weather]
            });
        });
    }
	/*onSearchBarChange(city) {
		this.cityWeatherSearch(city);
	}*/
    render () {
        return (
            <div>
                <SearchBar onSearchBarChange={city => {this.cityWeatherSearch(city)}} />
                <WeatherList weather={this.state.weather} />
            </div>
        );
        //<SearchBar onSearchBarChange={this.onSearchBarChange} />
    }
}

// Put this generated html component in Dom
ReactDOM.render(<App />, document.querySelector('.container'));
