import React from 'react';
import ReactDOM from 'react-dom';

// index.js
const cars = [
    {
      name: "Bugatti Chiron Super Sport",
      horsepower: 1600,
      topSpeed: 440,
    },
    {
      name: "Koenigsegg Jesko Absolut",
      horsepower: 1600,
      topSpeed: 531,
    },
    {
      name: "Hennessey Venom F5",
      horsepower: 1817,
      topSpeed: 500,
    },
  ];
  
  function CarList() {
    return (
      <div className="container">
        <h1>Carros Mais Potentes do Mundo</h1>
        <ul className="car-list">
          {cars.map((car, index) => (
            <li key={index} className="car-item">
              <h2 className="car-name">{car.name}</h2>
              <p className="car-specs">Potência: {car.horsepower} HP</p>
              <p className="car-specs">Velocidade Máxima: {car.topSpeed} km/h</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  ReactDOM.render(<CarList />, document.getElementById('root'));
  