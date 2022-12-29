import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Naruto'])
    const onAddCategory = category => {
        // if (categories.includes(categorie)) return
        if (categories.find(x => x.toLowerCase() === category.toLowerCase())) return

        setCategories([
            category,
            ...categories,
        ])
    }

    return (
        <>
            <h1>Gif expert app by Rivers</h1>
            <AddCategory onAddCategory={onAddCategory} />
            {categories.map(category =>
                <GifGrid key={category} category={category} />
            )}
        </>
    )
}