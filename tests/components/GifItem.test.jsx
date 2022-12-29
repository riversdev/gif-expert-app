import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('GifItem tests', () => {
    const props = { title: 'Saitama', url: 'https://one-punch.com/saitama.jpg' }

    test('should match the snapshot', () => {
        const { container } = render(<GifItem {...props} />)

        expect(container).toMatchSnapshot()
    })

    test('should display the image with the indicated url and alt', () => {
        render(<GifItem {...props} />)
        // screen.debug()

        // expect(screen.getByRole('img').src).toBe(props.url)
        // expect(screen.getByRole('img').alt).toBe(props.title)

        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(props.url)
        expect(alt).toBe(props.title)
    })

    test('should display title on the component', () => {
        render(<GifItem {...props} />)
        expect(screen.getByText(props.title)).toBeTruthy()
    })
})