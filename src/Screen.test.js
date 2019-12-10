import Screen from './Screen'

describe('Testing Screen class', () => {
  let screen
  beforeEach(() => {
    screen = new Screen()
    const el = document.createElement('div')
    el.id = 'result-container'
    screen.container = el
  })

  describe('clear method', () => {
    it('should clear the container element of existing flights', () => {
      screen.container.innerHTML = 'not empty'
      expect(screen.container.innerHTML).toBe('not empty')
      screen.clear()
      expect(screen.container.innerHTML).toBe('')
    })
  })

  describe('addFlight method', () => {
    it('should create a flight element and add it to the DOM', () => {
      screen.addFlight({
        flightIdentifier: 'D20190401KL0701',
        flightNumber: 'KL 701',
        airport: 'Santiago',
        expectedTime: '21:00',
        originalTime: '21:00',
        url: '/en/departures/flight/D20190401KL0701/',
        score: '58.897865'
      })

      expect(screen.container.innerHTML).toBe('<div class="rw-card"><div class="rw-card__body"><h3 class="rw-card__header"></h3><div class="rw-card__content"><p></p><hr><p></p><p></p></div></div><div class="rw-card__footer"></div></div>')
    })

    it('should throw an error with incorrect input', () => {
      expect(() => { screen.addFlight() }).toThrow()
      expect(() => { screen.addFlight('flight') }).toThrow()
      expect(() => { screen.addFlight([]) }).toThrow()
    })
  })
})
