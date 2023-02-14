
import React,{Component} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';


const key_api="bf712372d4a116d14d1fe895eb0906d6";
class App extends Component {
  state={
    temp:"",
    city:"",
    country:"",
    hum:"",
    description:"",
   error:""
  }
  getweather = async(e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key_api}`);
    const data= await api.json();
    if(city && country){
      this.setState({
        temp:data.main.temp,
        city:data.name,
        country:data.sys.country,
        hum:data.main.humidity,
        description:data.weather[0].description,
     
      })
    }else{
      this.setState({
        temp:"",
        city:"",
        country:"",
        hum:"",
        description:"",
       error:"please enter data"
      })
    }
  }
  render(){
  return (
    <div>
      <h1>Welcome to weather application..!</h1>
    <div className="wrapper">
      <div className="form-container">

      <Form weather={this.getweather}/>
      <Weather
       temp={this.state.temp}
       city={this.state.city}
       country={this.state.country}
       hum={this.state.hum}
       description={this.state.description}
       error={this.state.error}
      />
      </div>
     
    </div>
    </div>
  );
  }
}

export default App;
