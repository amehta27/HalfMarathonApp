import React, { Component } from 'react';
import { Nav,Navbar,Form,FormControl,Col,Button,CardGroup,Card} from 'react-bootstrap'
import './Weather.css';
class Weather extends Component {

    constructor(){
        super()
        this.state = {
           weather : {},
           city : '',
           weathercloud :null
        }
   }


componentDidMount() {

    this.populateHoustonWeather()

  }


  populateHoustonWeather(){
    fetch("http://api.openweathermap.org/data/2.5/weather?id=4699066&units=imperial&APPID=21c957193e985fa15c7f8e9e29db5d6e")
    .then((response) => response.json())
    .then((json) => {



      this.setState({
        weather : json.main,
        city : json.name,
        weathercloud : json.weather
      })

    })

  }

  render() {
    return (
        <div className = "weatherstyling">
        <Card bg="dark" className = "weatherstylingbox"text="white">
        <Card.Header>Houston Weather</Card.Header>
        <Card.Body>
        <label>temprature : </label>  {this.state.weather.temp} °F <br/>
        <label>pressure : </label>  {this.state.weather.pressure} hPa<br/>
        <label>Humidity : </label>  {this.state.weather.humidity}%<br/>
        <label>Temp-Min : </label>  {this.state.weather.temp_min} °F<br/>
        <label>Temp-Max : </label>  {this.state.weather.temp_max} °F<br/>
        <label>clouds : </label> {this.state.weathercloud?this.state.weathercloud[0].main:null}<br/>
        <label>description : </label> {this.state.weathercloud?this.state.weathercloud[0].description:null}
         
        </Card.Body>
      </Card>
      </div>
    //   <div>
    //     <h3>Houston Weather</h3>
    //    <label>temprature</label>  {this.state.weather.temp} <br/>
    //    <label>pressure</label>  {this.state.weather.pressure}<br/>
    //    <label>Humidity</label>  {this.state.weather.humidity}<br/>
    //    <label></label>  {this.state.weather.temp_min}<br />
    //      {this.state.weather.temp_max}<br />
          
      

    //     {/* <WeatherList weatherList={this.state.weather} /> */}



    //   </div>

    );
  
}
}

export default Weather;

