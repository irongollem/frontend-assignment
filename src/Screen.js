export default class Screen {
  constructor () {
    this.container = document.querySelector('#result-container')
  }

  clear () {
    this.container.innerHTML = ''
  }

  addFlight (flight) {
    const flightblock = document.createElement('div')
    flightblock.classList.add('rw-card')

    const body = document.createElement('div')
    body.classList.add('rw-card__body')

    const footer = document.createElement('div')
    footer.classList.add('rw-card__footer')

    const header = document.createElement('h3')
    header.classList.add('rw-card__header')
    header.innerText = flight.airport

    const content = document.createElement('div')
    content.classList.add('rw-card__content')

    const flightNumber = document.createElement('p')
    flightNumber.innerText = flight.flightNumber

    const originalTime = document.createElement('p')
    originalTime.innerText = `Original: ${flight.originalTime}`

    const expectedTime = document.createElement('p')
    expectedTime.innerText = `Expected: ${flight.expectedTime}`

    content.appendChild(flightNumber)
    content.appendChild(document.createElement('hr'))
    content.appendChild(originalTime)
    content.appendChild(expectedTime)

    body.appendChild(header)
    body.appendChild(content)

    flightblock.appendChild(body)
    flightblock.appendChild(footer)

    this.container.appendChild(flightblock)
  }
}
