import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import './_default.css';
const Drizzle = 'https://images-cienradios-arc.s3.amazonaws.com/radiomitre/weather/llovizna.svg';
const Nublado = 'https://images-cienradios-arc.s3.amazonaws.com/radiomitre/weather/nublado.svg';
const NubladoConSol = 'https://images-cienradios-arc.s3.amazonaws.com/radiomitre/weather/nubladoconsol.svg';
const Clear = 'https://images-cienradios-arc.s3.amazonaws.com/radiomitre/weather/soleado.svg';
const Thunderstorm = 'https://images-cienradios-arc.s3.amazonaws.com/radiomitre/weather/tormenta.svg';
const Ventoso = 'https://images-cienradios-arc.s3.amazonaws.com/radiomitre/weather/ventoso.svg';

const WeatherComponent = () => {
  const [lati, setLati] = useState(0);
  const [long, setLong] = useState(0);
  const [Temp, setTemp] = useState('');
  const [Max, setMax] = useState('');
  const [Min, setMin] = useState('');
  const [Country, setCountry] = useState('');
  const [Clima, setClima] = useState('');
  const [Icon, setIcon] = useState('');
  const [Loading, setLoading] = useState(true);
  const [ id , setId ] = useState('')
  const [ City , setCity ] = useState('')

  useEffect(() => {
   let unmounted = false;
    navigator.geolocation.getCurrentPosition(function (position) {
      setLati(position.coords.latitude);
      setLong(position.coords.longitude);

      if (lati !== 0 && long !== 0) {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=f20b66a33b32ecfc690c95d0e610f495`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setLoading(false);
            setTemp(Math.round(result.main.temp - 273));
            setMax(Math.round(result.main.temp_max - 273));
            setMin(Math.round(result.main.temp_min - 273));
            setCountry(result.sys.country);
            setClima(result.weather[0].description);
            setId(result.weather[0].id)
            setCity(result.name)
            console.log(result);
          })
          .catch((error) => console.log('error', error));
      }
    });
    return () => { unmounted = true };
  },[]);
  //api.openweathermap.org/data/2.5/weather?lat=-34.7008819&lon=-58.36031500000001&appid=f20b66a33b32ecfc690c95d0e610f495

 const getWeatherIcon = rangedId => {
    switch (true) {
    case rangedId >= 200 && rangedId <= 232:
      return <img className="positionIcon" src={Thunderstorm} />;
    case rangedId >= 300 && rangedId <= 321:
      return <img src={Drizzle} className="positionIcon" />;
    case rangedId >= 500 && rangedId <= 531:
      return <img src={NubladoConSol} className="positionIcon" />;
    case rangedId >= 600 && rangedId <= 622:
      return <img src={Nublado} className="positionIcon" />;
    case rangedId >= 701 && rangedId <= 781:
      return <img src={Ventoso} className="positionIcon" />;
    case rangedId === 800:
      return <img src={Clear} className="positionIcon" />;
    case rangedId >= 801 && rangedId <= 804:
      return <img src={Clear} className="positionIcon" />;
    default:
      return <img src={NubladoConSol} className="positionIcon" />;
    }
  };
  const TransformClimaToSpanish = rangedId => {
    switch (true) {
    case rangedId >= 200 && rangedId <= 232:
      return 'tormenta con lluvia';
    case rangedId >= 300 && rangedId <= 321:
      return 'llovizna';
    case rangedId >= 500 && rangedId <= 531:
      return 'Lluvia fuerte';
    case rangedId >= 600 && rangedId <= 622:
      return 'Nieve';
    case rangedId >= 701 && rangedId <= 781:
      return 'Neblina';
    case rangedId === 800:
      return 'Cielo Despejado';
    case rangedId >= 801 && rangedId <= 804:
      return 'Nubes Dispersas';
    default:
      return 'Cielo Despejado';
    }
  };

  const MinmaxTemp = () => {
    return (
      <h4 className="content_values_temp">
        <span className="px-4">Min: {Min}&deg;C</span>
        <span className="px-4">Max: {Max}&deg;C</span>
      </h4>
    );
  };
  return (
    <div className="container_general">
      {Loading ? (
        <ReactLoading
          type="spinningBubbles"
          className="spiner_"
          color={'#55a8fd'}
        ></ReactLoading>
      ) : (
        <div className="container_weather">
          <h1>
          <span>{City}</span>
          </h1>
          <span>
            {getWeatherIcon(id)}
            <h2 className="py-2 temp_data">Temp: {Temp}&deg;C</h2>
            {MinmaxTemp()}
          </span>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
