import { render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('GifExpertApp tests', () => {
    test('should first', () => {
        const { container } = render(<GifExpertApp />)

        expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()
        expect(screen.getAllByRole('heading', { level: 1 }).length).toBe(1)
        expect(container).toMatchSnapshot()

        // screen.debug()
    })
})