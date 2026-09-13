import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the heading and primary external links', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Decentralized Ephemeral Storage Protocol/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Documentation' })).toHaveAttribute(
      'href',
      'https://docs.eld.network',
    )
    expect(screen.getAllByRole('link', { name: /ELD BLOCKCHAIN EXPLORER/i })[0]).toHaveAttribute(
      'href',
      'https://explorer.eld.network',
    )
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/eldnetwork',
    )

    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveAttribute('href', '#top')
    expect(screen.getByRole('button', { name: /dark mode|light mode/i })).toBeInTheDocument()
  })
})
