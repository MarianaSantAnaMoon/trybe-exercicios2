/* Dado um array de temperaturas em graus Celsius, crie uma função que retorne um novo array com as temperaturas convertidas para 
Fahrenheit. A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.*/

const temperaturesCelsius = [23, 10, 32, 21, 47];

const convertToFahrenheit = (temperaturesCelsius) => {
    let temperaturesFahrenheit = temperaturesCelsius.map((temperature) => {
      return (temperature * 9/5) + 32;
    });
  
    return temperaturesFahrenheit;
  };

  console.log(convertToFahrenheit(temperaturesCelsius));
// [ 73.4, 50, 89.6, 69.8, 116.6 ]

  