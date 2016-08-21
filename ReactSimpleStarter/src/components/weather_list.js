import _ from 'lodash';
import React, { Component } from 'react';

class WeatherList extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            'error': ''
        };
    }
    componentWillReceiveProps(nextProps) {
        const newCity = nextProps.weather[0];
        const errorMsg = _.has(newCity, 'message') ? newCity.message : '';
        this.setState({'error': errorMsg});
    }
    renderWeather(cityData) {
        if(cityData.cod == 200) {
            const name = cityData.name;
            const temp = _.round(cityData.main.temp - 273.15);
            const pressure = cityData.main.pressure;
            const humidity = cityData.main.humidity;

            return (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{temp}</td>
                    <td>{pressure}</td>
                    <td>{humidity}</td>
                </tr>
            );
        }
    }
    render() {
        return (
            <div>
                <div className="error">{this.state.error}</div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (C)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WeatherList;