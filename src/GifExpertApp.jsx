import { useState } from 'react'
import { AddCategorie, GifGrid } from './components'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Naruto'])
    const onAddCategorie = categorie => {
        // if (categories.includes(categorie)) return
        if (categories.find(x => x.toLowerCase() === categorie.toLowerCase())) return

        setCategories([
            categorie,
            ...categories,
        ])
    }

    return (
        <>
            <h1>Gif expert app</h1>
            <AddCategorie onAddCategorie={onAddCategorie} />
            {categories.map(category =>
                <GifGrid key={category} category={category} />
            )}
        </>
    )
}