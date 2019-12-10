export default class Flights {
  static async getFlights () {
    const data = await fetch('/flights.json')
    const { flights } = await data.json()
    return flights
  }
}
