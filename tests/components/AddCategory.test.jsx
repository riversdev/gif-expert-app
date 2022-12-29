import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('AddCategorie test', () => {
    test('should change the value in the text box', () => {
        render(<AddCategory onAddCategory={() => { }} />)

        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: 'Saitama' } })

        expect(input.value).toBe('Saitama')

        // screen.debug()
    })

    test('should call onaddcategory only if the input have a value', () => {
        const inputValue = 'Saitama'
        const onAddCategory = jest.fn() // mock

        render(<AddCategory onAddCategory={onAddCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(input.value).toBe('')
        expect(onAddCategory).toHaveBeenCalled()
        expect(onAddCategory).toHaveBeenCalledTimes(1)
        expect(onAddCategory).toHaveBeenCalledWith(inputValue)

        // screen.debug()
    })

    test('shouldnt call onaddcategory if input is empty', () => {
        const inputValue = ''
        const onAddCategory = jest.fn()

        render(<AddCategory onAddCategory={onAddCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(onAddCategory).not.toHaveBeenCalled()
        expect(onAddCategory).toHaveBeenCalledTimes(0)
    })
})