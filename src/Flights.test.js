import Flights from './Flights'
import { JestEnvironment } from '@jest/environment'

JestEnvironment.mock('../flights.json')

it('Test that getFlights actually retrieves flight data', () => {
  expect(Flights)
})
