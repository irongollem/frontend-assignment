import '../sass/index.scss'
import Flights from './Flights'
import Screen from './Screen'

const screen = new Screen()

document.querySelector('#flight-input')
  .addEventListener('input', async (blob) => {
      const input = blob.target.value
      screen.clear()
      if (input.length < 3) return

      const flights = await Flights.getFlights()
      flights
        .filter(flight => flight.airport.toLowerCase().includes(input.toLowerCase()))
        .sort((a, b) => {
            if (a.score > b.score) return -1
            if (a.score < b.score) return 1
            return 0
        })
        .forEach(flight => { screen.addFlight(flight) })
  })

  Flights.getFlights()
