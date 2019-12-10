import Screen from './Screen'
import Flights from './Flights'

jest.mock('./Screen')

describe('Testing Flight class', () => {
  let flights
  const flightsArray = [
    {
      flightIdentifier: 'D20190401KL0701',
      flightNumber: 'KL 701',
      airport: 'Santiago',
      expectedTime: '21:00',
      originalTime: '21:00',
      url: '/en/departures/flight/D20190401KL0701/',
      score: '58.897865'
    },
    {
      flightIdentifier: 'D20190401KL1221',
      flightNumber: 'KL 1221',
      airport: 'Sandefjord',
      expectedTime: '21:25',
      originalTime: '21:25',
      url: '/en/departures/flight/D20190401KL1221/',
      score: '100.817875'
    }
  ]

  beforeEach(() => {
    Screen.mockClear()
    flights = new Flights()
  })

  describe('instance creation', () => {
    it('should have called the screen constructor', () => {
      expect(Screen).toHaveBeenCalledTimes(1)
    })
  })

  describe('getFlights', () => {
    it('should call flights API and return flight data', async next => {
      fetch.mockResponseOnce(JSON.stringify({ flights: flightsArray }))

      const res = await flights.getFlights()
      expect(res).toEqual(flightsArray)
      next()
    })
  })

  describe('Handle flights', () => {
    let mockScreenInstance
    let mockClear
    let mockAddFlight

    beforeEach(() => {
      mockScreenInstance = Screen.mock.instances[0]
      mockClear = mockScreenInstance.clear
      mockAddFlight = mockScreenInstance.addFlight
    })

    it('should clear screen when called', () => {
      flights.handleFlights()
      expect(mockClear).toHaveBeenCalledTimes(1)
      expect(mockAddFlight).not.toHaveBeenCalled()
    })
    it('Should stop if less than 3 characters are intered', () => {
      flights.getFlights = jest.fn(() => new Promise((resolve, reject) => { resolve(flightsArray) }))

      flights.handleFlights({
        target: {
          value: 'Sa'
        }
      })
      expect(mockClear).toHaveBeenCalledTimes(1)
      expect(mockAddFlight).not.toHaveBeenCalled()
    })
    it('should call screen.addFlight twice when two flights are presented', async () => {
      flights.getFlights = jest.fn(() => new Promise((resolve, reject) => { resolve(flightsArray) }))

      await flights.handleFlights({
        target: {
          value: 'San'
        }
      })
      expect(mockAddFlight).toHaveBeenCalledTimes(2)
    })
    it('should call screen.addFlight first with the flight with the highest score', async () => {
      flights.getFlights = jest.fn(() => new Promise((resolve, reject) => { resolve(flightsArray) }))

      await flights.handleFlights({
        target: {
          value: 'San'
        }
      })

      expect(mockAddFlight.mock.calls[0][0].airport).toBe('Sandefjord')
    })
  })
})
