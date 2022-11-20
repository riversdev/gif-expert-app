import { useState } from 'react'

export const AddCategorie = ({ onAddCategorie }) => {
    const [value, setValue] = useState('')

    const handleInputChange = ({ target: { value } }) => setValue(value)

    const handleSubmit = e => {
        e.preventDefault()

        const formatedValue = value.trim()

        if (formatedValue.length <= 1) return

        onAddCategorie(formatedValue)
        setValue('')
    }

    return (
        <form
            onSubmit={handleSubmit}
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