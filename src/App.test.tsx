import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('Renders main page correctly', () => {
  afterEach(() => {
    cleanup()
  })

  it('Should render the page correctly', async () => {
    await render(<App />)

    const h1El = await screen.queryByText(
      'Vite + React + TypeScript + Eslint + Prettier + Vitest'
    )

    expect(h1El).toBeInTheDocument()
  })

  it('Should show the button count set to 0', async () => {
    await render(<App />)

    const buttonEl = await screen.queryByText('count is 0')

    expect(buttonEl).toBeInTheDocument()
  })

  it('Should show the button count set to 2', async () => {
    const user = userEvent.setup()
    await render(<App />)

    const buttonEl = await screen.queryByText('count is 0')

    expect(buttonEl).toBeInTheDocument()

    await user.click(buttonEl as HTMLElement)
    await user.click(buttonEl as HTMLElement)

    expect(buttonEl?.innerHTML).toBe('count is 2')
  })
})
