import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component
{
    renderWeather(cityData) {
        if (cityData.cod == '200'){
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
                <div className="error">{this.props.error}</div>
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

function mapStateToProps(state) {
    const newCity = state.weather[0];
    const errorMsg = _.has(newCity, 'message') ? newCity.message : '';
    
    return {
        weather: state.weather,
        error: errorMsg
    };
}

export default connect(mapStateToProps)(WeatherList);