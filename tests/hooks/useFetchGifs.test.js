import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('useFetchGifs tests', () => {
    test('should return the initial state', () => {
        const { result } = renderHook(() => useFetchGifs('Naruto'))
        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('should return an array of images and isLoading in false', async () => {
        const { result } = renderHook(() => useFetchGifs('Naruto'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 1000, // no es necesario !
            }
        )

        const { images, isLoading } = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
})