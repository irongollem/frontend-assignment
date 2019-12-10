import '../sass/index.scss'
import Flights from './Flights'

const flights = new Flights()

document.querySelector('#flight-input')
  .addEventListener('input', function (input) { flights.handleFlights(input) })
