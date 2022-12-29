import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onAddCategory }) => {
    const [value, setValue] = useState('')

    const handleInputChange = ({ target: { value } }) => setValue(value)

    const handleSubmit = e => {
        e.preventDefault()

        const formatedValue = value.trim()

        if (formatedValue.length <= 1) return

        onAddCategory(formatedValue)
        setValue('')
    }

    return (
        <form
            onSubmit={handleSubmit}
            aria-label='gifsForm'
        >
            <input
                type='text'
                placeholder='Buscar gifs'
                value={value}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}