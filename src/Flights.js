import Screen from './Screen'

export default class Flights {
  constructor () {
    this.screen = new Screen()
  }

  async getFlights () {
    const data = await fetch('/flights.json')
    const { flights } = await data.json()
    return flights
  }

  async handleFlights (blob) {
    const input = blob.target.value
    this.screen.clear()
    if (input.length < 3) return

    const flights = await this.getFlights()

    flights
      .filter(fl => fl.airport.toLowerCase().includes(input.toLowerCase()))
      .sort((a, b) => {
        if (a.score > b.score) return -1
        if (a.score < b.score) return 1
        return 0
      })
      .forEach(fl => { this.screen.addFlight(fl) })
  }
}
